const n=`"""
Auditomatic Trial Runtime
Config-driven interpreter for trial execution
"""

__version__ = "1.0.0"

from .core.config_loader import TrialConfig, load_trial_config
from .execution.executor import TrialExecutor

__all__ = ['TrialConfig', 'load_trial_config', 'TrialExecutor']`,e=`"""
Configuration loader and validator using Pydantic
"""

import json
from pathlib import Path
from typing import Dict, List, Any, Optional
from datetime import datetime
from pydantic import BaseModel, Field, validator

class ApiConfig(BaseModel):
    """API endpoint configuration"""
    baseUrl: str = Field(..., alias='baseUrl')
    endpoint: str

class AuthConfig(BaseModel):
    """Authentication configuration"""
    type: str
    header: Optional[str] = None
    envVar: Optional[str] = Field(None, alias='envVar')

class RequestTransform(BaseModel):
    """Request transformation rules"""
    promptKey: Optional[str] = Field('prompt', alias='promptKey')
    wrapPrompt: Optional[bool] = Field(False, alias='wrapPrompt')
    messageRole: Optional[str] = Field('user', alias='messageRole')
    nestParams: Optional[str] = Field(None, alias='nestParams')
    rootLevelParams: Optional[List[str]] = Field(default_factory=list, alias='rootLevelParams')

class ResponseTransform(BaseModel):
    """Response transformation rules"""
    contentPath: str = Field(..., alias='contentPath')
    fallbackPaths: List[str] = Field(default_factory=list, alias='fallbackPaths')
    errorPath: Optional[str] = Field(None, alias='errorPath')

class ResponseMode(BaseModel):
    """Response mode configuration"""
    id: str
    label: str
    description: str
    responseTransform: ResponseTransform = Field(..., alias='responseTransform')

class ProviderSnapshot(BaseModel):
    """Complete provider configuration snapshot"""
    id: str
    name: str
    api: ApiConfig
    auth: AuthConfig
    headers: Optional[Dict[str, str]] = Field(default_factory=dict)
    requestTransform: Optional[RequestTransform] = Field(None, alias='requestTransform')
    requestTransforms: Optional[List[Dict[str, Any]]] = Field(None, alias='requestTransforms')
    responseModes: Dict[str, ResponseMode] = Field(..., alias='responseModes')

class ConfigurationSnapshot(BaseModel):
    """Model configuration with provider snapshot"""
    provider: str
    modelId: str = Field(..., alias='modelId')
    parameters: Dict[str, Any] = Field(default_factory=dict)
    providerSnapshot: ProviderSnapshot = Field(..., alias='providerSnapshot')

class VariableSnapshot(BaseModel):
    """Variable data snapshot"""
    source: Dict[str, Any]
    items: List[Dict[str, Any]]

class ApiCall(BaseModel):
    """API call definition"""
    id: str
    order: int
    trialId: str = Field(..., alias='trialId')
    configurationIndex: int = Field(..., alias='configurationIndex')
    prompt: str
    variables: Optional[Dict[str, Any]] = Field(default_factory=dict)
    variableIndices: Optional[Dict[str, int]] = Field(default_factory=dict, alias='variableIndices')
    status: str = 'pending'
    created: Optional[datetime] = None

class Trial(BaseModel):
    """Trial configuration"""
    id: str
    name: str
    type: str
    status: str
    configurations: List[ConfigurationSnapshot]
    created: datetime
    templateConfig: Optional[Dict[str, Any]] = Field(None, alias='templateConfig')

class TrialConfig(BaseModel):
    """Complete trial configuration with all data"""
    version: str = "1.0"
    metadata: Dict[str, Any]
    trial: Trial
    api_calls: List[ApiCall] = Field(..., alias='api_calls')
    api_keys: Optional[Dict[str, str]] = Field(default_factory=dict, alias='api_keys')
    
    class Config:
        populate_by_name = True  # Pydantic v2 compatibility

def load_trial_config(path: Path) -> TrialConfig:
    """Load and validate trial configuration from JSON file."""
    if not path.exists():
        raise FileNotFoundError(f"Config file not found: {path}")
    
    with open(path, 'r') as f:
        data = json.load(f)
    
    return TrialConfig(**data)

def load_api_keys(path: Optional[Path] = None, 
                  env_prefix: str = "AUDITOMATIC_") -> Dict[str, str]:
    """
    Load API keys from file or environment variables.
    
    Args:
        path: Optional path to JSON file with API keys
        env_prefix: Prefix for environment variables
    
    Returns:
        Dictionary of provider -> API key mappings
    """
    import os
    
    api_keys = {}
    
    # Load from file if provided
    if path and path.exists():
        with open(path, 'r') as f:
            api_keys.update(json.load(f))
    
    # Override with environment variables
    # e.g., AUDITOMATIC_OPENAI_API_KEY -> openai-chat
    for key, value in os.environ.items():
        if key.startswith(env_prefix):
            provider = key[len(env_prefix):].lower().replace('_', '-')
            # Handle common variations
            if provider == "openai-api-key":
                provider = "openai-chat"
            elif provider == "anthropic-api-key":
                provider = "anthropic"
            api_keys[provider] = value
    
    return api_keys`,t=`"""
Path extraction using JSONPath
Replaces hardcoded path extraction with dynamic JSONPath
"""

import re
from typing import Any, List, Optional
from jsonpath_ng import parse
from jsonpath_ng.exceptions import JSONPathError

class PathExtractor:
    """
    Extract values from nested JSON using path notation.
    Supports both simple paths and full JSONPath syntax.
    """
    
    def __init__(self):
        self._cache = {}  # Cache compiled paths for performance
    
    def extract(self, data: Any, path: str) -> Any:
        """
        Extract value from data using path.
        
        Examples:
            - "content" -> data['content']
            - "choices[0].message.content" -> data['choices'][0]['message']['content']
            - "$.choices[?(@.index==0)].message.content" -> JSONPath query
        """
        if not data or not path:
            return None
        
        # Try simple extraction first (faster)
        if self._is_simple_path(path):
            return self._extract_simple(data, path)
        
        # Fall back to JSONPath for complex paths
        return self._extract_jsonpath(data, path)
    
    def extract_first(self, data: Any, paths: List[str]) -> Any:
        """Try multiple paths and return first non-null result."""
        for path in paths:
            value = self.extract(data, path)
            if value is not None:
                return value
        return None
    
    def _is_simple_path(self, path: str) -> bool:
        """Check if path is simple (no special JSONPath syntax)."""
        return not path.startswith('$') and '?' not in path and '@' not in path
    
    def _extract_simple(self, data: Any, path: str) -> Any:
        """
        Fast extraction for simple paths like "choices[0].message.content"
        This handles 99% of cases without JSONPath overhead.
        """
        # Split on dots and brackets
        parts = re.split(r'[\\.\\[\\]]+', path)
        parts = [p for p in parts if p]  # Remove empty strings
        
        current = data
        for part in parts:
            if current is None:
                return None
            
            if part.isdigit():
                # Array index
                idx = int(part)
                if isinstance(current, list) and 0 <= idx < len(current):
                    current = current[idx]
                else:
                    return None
            else:
                # Object key
                if isinstance(current, dict):
                    current = current.get(part)
                else:
                    return None
        
        return current
    
    def _extract_jsonpath(self, data: Any, path: str) -> Any:
        """
        Full JSONPath extraction for complex queries.
        Uses jsonpath_ng for standards compliance.
        """
        try:
            # Check cache
            if path not in self._cache:
                self._cache[path] = parse(path)
            
            jsonpath_expr = self._cache[path]
            matches = jsonpath_expr.find(data)
            
            if matches:
                # Return first match value
                return matches[0].value
            return None
            
        except (JSONPathError, Exception):
            # Fall back to simple extraction if JSONPath fails
            return self._extract_simple(data, path)

# Global instance for convenience
_extractor = PathExtractor()

def extract_path(data: Any, path: str) -> Any:
    """Convenience function using global extractor."""
    return _extractor.extract(data, path)

def extract_first_path(data: Any, paths: List[str]) -> Any:
    """Convenience function to try multiple paths."""
    return _extractor.extract_first(data, paths)`,r=`"""
Main trial executor
Orchestrates the execution of API calls using configuration
"""

import time
import json
from typing import Dict, Any, List, Optional
from datetime import datetime
import requests
from rich.console import Console
from rich.progress import Progress, SpinnerColumn, TextColumn, BarColumn, TaskProgressColumn
from rich.table import Table

from ..core.config_loader import TrialConfig
from ..providers.request_builder import build_request
from ..providers.response_parser import parse_response

class TrialExecutor:
    """Execute trials using configuration."""
    
    def __init__(self, 
                 api_keys: Optional[Dict[str, str]] = None,
                 timeout: int = 30,
                 rate_limit_delay: float = 0.1):
        """
        Initialize executor.
        
        Args:
            api_keys: Provider -> API key mappings
            timeout: Request timeout in seconds
            rate_limit_delay: Delay between requests in seconds
        """
        self.api_keys = api_keys or {}
        self.timeout = timeout
        self.rate_limit_delay = rate_limit_delay
        self.console = Console()
        self.results = []
    
    def execute(self, 
                config: TrialConfig,
                dry_run: bool = False,
                debug: bool = False) -> List[Dict[str, Any]]:
        """
        Execute trial.
        
        Args:
            config: Trial configuration
            dry_run: Preview without making requests
            debug: Show detailed output
        
        Returns:
            List of execution results
        """
        self.results = []
        trial = config.trial
        api_calls = config.api_calls
        
        # Header
        self.console.print(f"\\n[bold cyan]Executing Trial: {trial.name}[/bold cyan]")
        self.console.print(f"Total API calls: {len(api_calls)}")
        
        if dry_run:
            self.console.print("[yellow]🔍 DRY RUN MODE - No actual API calls will be made[/yellow]\\n")
        
        # Progress bar
        with Progress(
            SpinnerColumn(),
            TextColumn("[progress.description]{task.description}"),
            BarColumn(),
            TaskProgressColumn(),
            console=self.console
        ) as progress:
            
            task = progress.add_task(
                "[cyan]Processing API calls...", 
                total=len(api_calls)
            )
            
            for call in api_calls:
                # Get configuration for this call
                config_idx = call.configurationIndex
                if config_idx >= len(trial.configurations):
                    self.console.print(f"[red]Error: Invalid configuration index {config_idx}[/red]")
                    continue
                
                configuration = trial.configurations[config_idx]
                provider_id = configuration.provider
                
                # Get API key if needed
                api_key = self.api_keys.get(provider_id)
                if not api_key and configuration.providerSnapshot.auth.type != 'none':
                    if not dry_run:
                        self.console.print(
                            f"[yellow]Warning: No API key for {provider_id}[/yellow]"
                        )
                
                # Build request
                request_data = build_request(
                    prompt=call.prompt,
                    configuration=configuration,
                    api_key=api_key
                )
                
                # Show debug info
                if debug:
                    self._show_debug_info(call, configuration, request_data)
                
                # Execute or simulate
                if dry_run:
                    result = self._simulate_call(call, configuration, request_data)
                else:
                    result = self._execute_call(call, configuration, request_data)
                
                self.results.append(result)
                
                # Update progress
                progress.update(task, advance=1)
                
                # Rate limiting
                if not dry_run and self.rate_limit_delay > 0:
                    time.sleep(self.rate_limit_delay)
        
        # Summary
        self._show_summary()
        
        return self.results
    
    def _execute_call(self, call, configuration, request_data) -> Dict[str, Any]:
        """Execute actual API call."""
        start_time = time.time()
        
        try:
            response = requests.post(
                url=request_data['url'],
                headers=request_data['headers'],
                json=request_data['body'],
                timeout=self.timeout
            )
            
            elapsed = time.time() - start_time
            
            # Parse response
            response_json = response.json()
            parsed = parse_response(response_json, configuration)
            
            # Success result
            result = {
                'order': call.order,
                'success': True,
                'status_code': response.status_code,
                'content': parsed['content'],
                'usage': parsed['usage'],
                'latency_ms': int(elapsed * 1000),
                'provider': configuration.provider,
                'model': configuration.modelId,
                'timestamp': datetime.now().isoformat()
            }
            
            # Show inline result
            content_preview = parsed['content'][:100] + '...' if len(parsed['content']) > 100 else parsed['content']
            self.console.print(
                f"  [green]✓[/green] [{call.order}] {configuration.provider} | "
                f"{content_preview} ({elapsed:.2f}s)"
            )
            
        except Exception as e:
            elapsed = time.time() - start_time
            
            # Error result
            result = {
                'order': call.order,
                'success': False,
                'error': str(e),
                'latency_ms': int(elapsed * 1000),
                'provider': configuration.provider,
                'model': configuration.modelId,
                'timestamp': datetime.now().isoformat()
            }
            
            # Show inline error
            self.console.print(
                f"  [red]✗[/red] [{call.order}] {configuration.provider} | "
                f"Error: {str(e)[:100]}"
            )
        
        return result
    
    def _simulate_call(self, call, configuration, request_data) -> Dict[str, Any]:
        """Simulate API call for dry run."""
        self.console.print(
            f"  [yellow]🔍[/yellow] [{call.order}] Would call {configuration.provider} | "
            f"{configuration.modelId}"
        )
        
        if call.variables:
            var_str = ', '.join(f"{k}='{v}'" for k, v in call.variables.items())
            self.console.print(f"      Variables: {var_str}")
        
        return {
            'order': call.order,
            'success': True,
            'dry_run': True,
            'provider': configuration.provider,
            'model': configuration.modelId,
            'url': request_data['url'],
            'timestamp': datetime.now().isoformat()
        }
    
    def _show_debug_info(self, call, configuration, request_data):
        """Show detailed debug information."""
        self.console.print(f"\\n[dim]--- Call {call.order} Debug ---[/dim]")
        self.console.print(f"Provider: {configuration.provider}")
        self.console.print(f"Model: {configuration.modelId}")
        self.console.print(f"URL: {request_data['url']}")
        self.console.print(f"Headers: {json.dumps(request_data['headers'], indent=2)}")
        self.console.print(f"Body: {json.dumps(request_data['body'], indent=2)}")
        self.console.print("[dim]---[/dim]\\n")
    
    def _show_summary(self):
        """Show execution summary."""
        successful = sum(1 for r in self.results if r.get('success'))
        failed = len(self.results) - successful
        
        # Summary table
        table = Table(title="Execution Summary")
        table.add_column("Metric", style="cyan")
        table.add_column("Value", style="white")
        
        table.add_row("Total Calls", str(len(self.results)))
        table.add_row("Successful", f"[green]{successful}[/green]")
        table.add_row("Failed", f"[red]{failed}[/red]" if failed > 0 else str(failed))
        
        if not any(r.get('dry_run') for r in self.results):
            # Calculate average latency
            latencies = [r['latency_ms'] for r in self.results if 'latency_ms' in r]
            if latencies:
                avg_latency = sum(latencies) / len(latencies)
                table.add_row("Avg Latency", f"{avg_latency:.1f}ms")
            
            # Calculate total tokens
            total_tokens = sum(
                r.get('usage', {}).get('total_tokens', 0) or 0
                for r in self.results if r.get('usage')
            )
            if total_tokens > 0:
                table.add_row("Total Tokens", str(total_tokens))
        
        self.console.print("\\n")
        self.console.print(table)`,o=`"""
Request builder that interprets provider configuration
Port of TypeScript request-builder.ts
"""

from typing import Dict, Any, Optional
from ..core.config_loader import ProviderSnapshot, ConfigurationSnapshot

class RequestBuilder:
    """Build HTTP requests from provider configuration."""
    
    def build_request(self,
                     prompt: str,
                     configuration: ConfigurationSnapshot,
                     api_key: Optional[str] = None) -> Dict[str, Any]:
        """
        Build complete HTTP request from configuration.
        
        Returns:
            Dictionary with url, method, headers, and body
        """
        provider = configuration.providerSnapshot
        
        # Build URL
        url = self._build_url(provider)
        
        # Build headers
        headers = self._build_headers(provider, api_key)
        
        # Build body
        body = self._build_body(prompt, configuration.modelId, 
                               configuration.parameters, provider)
        
        return {
            'url': url,
            'method': 'POST',
            'headers': headers,
            'body': body
        }
    
    def _build_url(self, provider: ProviderSnapshot) -> str:
        """Construct full URL from provider config."""
        base_url = provider.api.baseUrl
        endpoint = provider.api.endpoint
        
        # Handle trailing/leading slashes
        if base_url.endswith('/') and endpoint.startswith('/'):
            return base_url[:-1] + endpoint
        elif not base_url.endswith('/') and not endpoint.startswith('/'):
            return base_url + '/' + endpoint
        else:
            return base_url + endpoint
    
    def _build_headers(self, provider: ProviderSnapshot, 
                      api_key: Optional[str]) -> Dict[str, str]:
        """Build request headers with authentication."""
        headers = {'Content-Type': 'application/json'}
        
        # Add provider-specific headers
        if provider.headers:
            headers.update(provider.headers)
        
        # Add authentication
        if api_key and provider.auth.type != 'none':
            if provider.auth.type == 'bearer':
                headers['Authorization'] = f'Bearer {api_key}'
            elif provider.auth.type == 'header' and provider.auth.header:
                headers[provider.auth.header] = api_key
        
        return headers
    
    def _build_body(self, prompt: str, model: str, 
                   parameters: Dict[str, Any],
                   provider: ProviderSnapshot) -> Dict[str, Any]:
        """Build request body with prompt and parameters."""
        # Start with model
        body = {'model': model}
        
        # Handle prompt formatting
        transform = provider.requestTransform
        if transform:
            prompt_key = transform.promptKey or 'prompt'
            
            if transform.wrapPrompt:
                # Wrap in message format (chat endpoints)
                message_role = transform.messageRole or 'user'
                body[prompt_key] = [{'role': message_role, 'content': prompt}]
            else:
                # Direct prompt (completion endpoints)
                body[prompt_key] = prompt
        else:
            # Default to direct prompt
            body['prompt'] = prompt
        
        # Handle parameter nesting
        if transform and transform.nestParams:
            # Some parameters go in nested object (e.g., Ollama "options")
            nested_key = transform.nestParams
            root_level_params = transform.rootLevelParams or []
            
            nested_params = {}
            root_params = {}
            
            for key, value in parameters.items():
                if key in root_level_params:
                    root_params[key] = value
                else:
                    nested_params[key] = value
            
            # Add nested parameters
            if nested_params:
                body[nested_key] = nested_params
            
            # Add root-level parameters
            body.update(root_params)
        else:
            # Add all parameters at root level
            body.update(parameters)
        
        # Apply request transforms if present
        if provider.requestTransforms:
            body = self._apply_transforms(body, provider.requestTransforms)
        
        return body
    
    def _apply_transforms(self, body: Dict[str, Any], 
                         transforms: list) -> Dict[str, Any]:
        """Apply provider-specific request transforms."""
        for transform in transforms:
            if transform.get('type') == 'field_transform':
                body = self._apply_field_transform(body, transform.get('config', {}))
            elif transform.get('type') == 'validation_rule':
                # Could add validation here if needed
                pass
        
        return body
    
    def _apply_field_transform(self, body: Dict[str, Any], 
                               config: Dict[str, Any]) -> Dict[str, Any]:
        """Apply a field transformation."""
        field = config.get('field')
        transform_type = config.get('transform')
        
        if not field or field not in body:
            return body
        
        if transform_type == 'string_to_object':
            # e.g., response_format: "json" -> response_format: {type: "json"}
            transform_config = config.get('transformConfig', {})
            wrapper = transform_config.get('objectWrapper', 'type')
            
            if isinstance(body[field], str):
                body[field] = {wrapper: body[field]}
        
        return body

# Global instance
_builder = RequestBuilder()

def build_request(prompt: str, 
                 configuration: ConfigurationSnapshot,
                 api_key: Optional[str] = None) -> Dict[str, Any]:
    """Convenience function using global builder."""
    return _builder.build_request(prompt, configuration, api_key)`,a=`"""
Response parser that interprets provider configuration
Port of TypeScript response-parser.ts
"""

from typing import Dict, Any, Optional
from ..core.config_loader import ProviderSnapshot, ConfigurationSnapshot
from ..core.path_extractor import extract_path, extract_first_path

class ResponseParser:
    """Parse API responses using provider configuration."""
    
    def parse_response(self,
                      response: Dict[str, Any],
                      configuration: ConfigurationSnapshot) -> Dict[str, Any]:
        """
        Parse API response using provider configuration.
        
        Returns:
            Dictionary with content, usage, and features
        """
        provider = configuration.providerSnapshot
        parameters = configuration.parameters
        
        # Determine response mode
        response_mode = self._determine_response_mode(parameters, provider)
        
        # Get mode configuration
        mode_config = provider.responseModes.get(response_mode, 
                                                 provider.responseModes.get('text'))
        
        if not mode_config:
            # Fallback to simple extraction
            content = str(response)
        else:
            # Extract content using configured paths
            content = self._extract_content(response, mode_config)
        
        # Extract usage information
        usage = self._extract_usage(response, provider)
        
        return {
            'content': content,
            'usage': usage,
            'raw_response': response
        }
    
    def _determine_response_mode(self, 
                                 parameters: Dict[str, Any],
                                 provider: ProviderSnapshot) -> str:
        """Determine which response mode to use based on parameters."""
        # Check for function calling
        if parameters.get('tools') or parameters.get('tool_choice'):
            if 'function_calling' in provider.responseModes:
                return 'function_calling'
            elif 'tools' in provider.responseModes:
                return 'tools'
        
        # Check for JSON mode
        response_format = parameters.get('response_format')
        if response_format:
            if isinstance(response_format, dict) and response_format.get('type') == 'json_object':
                return 'json' if 'json' in provider.responseModes else 'text'
            elif isinstance(response_format, str) and 'json' in response_format:
                return 'json' if 'json' in provider.responseModes else 'text'
        
        # Default to text mode
        return 'text'
    
    def _extract_content(self, 
                        response: Dict[str, Any],
                        mode_config: Any) -> str:
        """Extract content using mode configuration."""
        transform = mode_config.responseTransform
        
        # Try main content path
        content_path = transform.contentPath
        content = extract_path(response, content_path)
        
        if content is not None:
            return str(content)
        
        # Try fallback paths
        fallback_paths = transform.fallbackPaths or []
        content = extract_first_path(response, fallback_paths)
        
        if content is not None:
            return str(content)
        
        # Last resort - return string representation
        return str(response)
    
    def _extract_usage(self, 
                      response: Dict[str, Any],
                      provider: ProviderSnapshot) -> Dict[str, Optional[int]]:
        """Extract token usage information."""
        usage = {
            'prompt_tokens': None,
            'completion_tokens': None,
            'total_tokens': None
        }
        
        # Check if provider has usage extraction config
        if not hasattr(provider, 'usageExtraction'):
            return usage
        
        usage_config = getattr(provider, 'usageExtraction', {})
        
        # Extract prompt tokens
        if prompt_path := usage_config.get('promptTokensPath'):
            usage['prompt_tokens'] = extract_path(response, prompt_path)
        
        # Extract completion tokens
        if completion_path := usage_config.get('completionTokensPath'):
            usage['completion_tokens'] = extract_path(response, completion_path)
        
        # Extract or calculate total tokens
        if total_path := usage_config.get('totalTokensPath'):
            if ',' in total_path:
                # Sum multiple paths
                total = 0
                for path in total_path.split(','):
                    value = extract_path(response, path.strip())
                    if value and isinstance(value, (int, float)):
                        total += int(value)
                usage['total_tokens'] = total if total > 0 else None
            else:
                # Single path
                usage['total_tokens'] = extract_path(response, total_path)
        
        # Calculate total if not provided
        if usage['total_tokens'] is None:
            prompt = usage['prompt_tokens'] or 0
            completion = usage['completion_tokens'] or 0
            if prompt > 0 or completion > 0:
                usage['total_tokens'] = prompt + completion
        
        return usage

# Global instance
_parser = ResponseParser()

def parse_response(response: Dict[str, Any],
                  configuration: ConfigurationSnapshot) -> Dict[str, Any]:
    """Convenience function using global parser."""
    return _parser.parse_response(response, configuration)`,s=`"""
Output formatters for different file formats
"""

import json
import csv
from pathlib import Path
from typing import List, Dict, Any
from datetime import datetime
import pandas as pd

class OutputFormatter:
    """Format and save execution results."""
    
    @staticmethod
    def save_json(results: List[Dict[str, Any]], 
                  filepath: Path = None) -> Path:
        """Save results as JSON."""
        if filepath is None:
            filepath = Path(f"results_{datetime.now():%Y%m%d_%H%M%S}.json")
        
        with open(filepath, 'w') as f:
            json.dump(results, f, indent=2, default=str)
        
        return filepath
    
    @staticmethod
    def save_csv(results: List[Dict[str, Any]], 
                 filepath: Path = None) -> Path:
        """Save results as CSV."""
        if filepath is None:
            filepath = Path(f"results_{datetime.now():%Y%m%d_%H%M%S}.csv")
        
        # Flatten nested dictionaries for CSV
        flattened = []
        for result in results:
            flat = {
                'order': result.get('order'),
                'success': result.get('success'),
                'provider': result.get('provider'),
                'model': result.get('model'),
                'content': result.get('content', '')[:1000],  # Truncate long content
                'error': result.get('error', ''),
                'status_code': result.get('status_code'),
                'latency_ms': result.get('latency_ms'),
                'timestamp': result.get('timestamp')
            }
            
            # Add usage info if present
            if usage := result.get('usage'):
                flat['prompt_tokens'] = usage.get('prompt_tokens')
                flat['completion_tokens'] = usage.get('completion_tokens')
                flat['total_tokens'] = usage.get('total_tokens')
            
            flattened.append(flat)
        
        # Write CSV
        if flattened:
            fieldnames = flattened[0].keys()
            with open(filepath, 'w', newline='') as f:
                writer = csv.DictWriter(f, fieldnames=fieldnames)
                writer.writeheader()
                writer.writerows(flattened)
        
        return filepath
    
    @staticmethod
    def save_excel(results: List[Dict[str, Any]], 
                   filepath: Path = None) -> Path:
        """Save results as Excel using pandas."""
        if filepath is None:
            filepath = Path(f"results_{datetime.now():%Y%m%d_%H%M%S}.xlsx")
        
        # Convert to DataFrame
        df = pd.DataFrame(results)
        
        # Flatten usage column if present
        if 'usage' in df.columns:
            usage_df = pd.json_normalize(df['usage'])
            usage_df.columns = [f'usage_{col}' for col in usage_df.columns]
            df = pd.concat([df.drop('usage', axis=1), usage_df], axis=1)
        
        # Truncate long content
        if 'content' in df.columns:
            df['content'] = df['content'].astype(str).str[:1000]
        
        # Save to Excel with formatting
        with pd.ExcelWriter(filepath, engine='openpyxl') as writer:
            df.to_excel(writer, sheet_name='Results', index=False)
            
            # Auto-adjust column widths
            worksheet = writer.sheets['Results']
            for column in df:
                column_length = max(df[column].astype(str).map(len).max(), len(column))
                column_length = min(column_length, 50)  # Cap at 50 characters
                col_idx = df.columns.get_loc(column)
                worksheet.column_dimensions[chr(65 + col_idx)].width = column_length
        
        return filepath
    
    @staticmethod
    def save(results: List[Dict[str, Any]], 
             format: str = 'csv',
             filepath: Path = None) -> Path:
        """Save results in specified format."""
        if format == 'json':
            return OutputFormatter.save_json(results, filepath)
        elif format == 'csv':
            return OutputFormatter.save_csv(results, filepath)
        elif format == 'excel':
            return OutputFormatter.save_excel(results, filepath)
        else:
            raise ValueError(f"Unsupported format: {format}")`,i=`# Core dependencies
requests>=2.28.0
pandas>=2.0.0
openpyxl>=3.0.0  # For Excel export

# JSON path extraction
jsonpath-ng>=1.5.0

# Configuration validation
pydantic>=2.0.0

# CLI and formatting
click>=8.0.0
rich>=13.0.0

# Environment variables
python-dotenv>=1.0.0`,l=`#!/usr/bin/env python3
"""
Auditomatic Trial Executor
Main entry point for executing exported trials
"""

import sys
from pathlib import Path
import click
from rich.console import Console

from auditomatic_trial import load_trial_config, TrialExecutor
from auditomatic_trial.core.config_loader import load_api_keys
from auditomatic_trial.output.formatters import OutputFormatter

console = Console()

@click.command()
@click.option('--config', '-c', 
              type=click.Path(exists=True, path_type=Path),
              default='data/trial_config.json',
              help='Path to trial configuration JSON')
@click.option('--api-keys', '-k',
              type=click.Path(path_type=Path),
              default=None,
              help='Path to API keys JSON (optional)')
@click.option('--dry-run', is_flag=True,
              help='Preview execution without making API calls')
@click.option('--debug', is_flag=True,
              help='Show detailed request/response information')
@click.option('--output', '-o',
              type=click.Choice(['json', 'csv', 'excel'], case_sensitive=False),
              default='csv',
              help='Output format for results')
@click.option('--output-file', '-f',
              type=click.Path(path_type=Path),
              help='Output file path (auto-generated if not specified)')
@click.option('--timeout',
              type=int,
              default=30,
              help='Request timeout in seconds')
@click.option('--rate-limit',
              type=float,
              default=0.1,
              help='Delay between requests in seconds')
def main(config, api_keys, dry_run, debug, output, output_file, timeout, rate_limit):
    """
    Execute Auditomatic trial from exported configuration.
    
    This tool runs API calls defined in a trial configuration file,
    using provider snapshots to build requests and parse responses.
    """
    
    # Banner
    console.print("\\n[bold cyan]╔══════════════════════════════════════╗[/bold cyan]")
    console.print("[bold cyan]║     Auditomatic Trial Executor      ║[/bold cyan]")
    console.print("[bold cyan]╚══════════════════════════════════════╝[/bold cyan]\\n")
    
    try:
        # Load configuration
        console.print(f"Loading configuration from: [cyan]{config}[/cyan]")
        trial_config = load_trial_config(config)
        
        # Load API keys
        api_keys_dict = {}
        if api_keys and api_keys.exists():
            console.print(f"Loading API keys from: [cyan]{api_keys}[/cyan]")
            api_keys_dict = load_api_keys(api_keys)
        else:
            console.print("[yellow]No API keys file specified, checking environment variables...[/yellow]")
            api_keys_dict = load_api_keys(env_prefix="AUDITOMATIC_")
        
        if api_keys_dict:
            console.print(f"[green]Loaded API keys for: {', '.join(api_keys_dict.keys())}[/green]")
        
        # Create executor
        executor = TrialExecutor(
            api_keys=api_keys_dict,
            timeout=timeout,
            rate_limit_delay=rate_limit
        )
        
        # Execute trial
        results = executor.execute(
            config=trial_config,
            dry_run=dry_run,
            debug=debug
        )
        
        # Save results
        if not dry_run and results:
            output_path = OutputFormatter.save(
                results=results,
                format=output,
                filepath=output_file
            )
            console.print(f"\\n[green]✅ Results saved to: {output_path}[/green]")
        
        # Exit status
        failed_count = sum(1 for r in results if not r.get('success'))
        if failed_count > 0:
            console.print(f"\\n[yellow]⚠️  {failed_count} calls failed[/yellow]")
            sys.exit(1)
        else:
            console.print("\\n[green]✅ All calls completed successfully![/green]")
            sys.exit(0)
            
    except FileNotFoundError as e:
        console.print(f"[red]Error: {e}[/red]")
        sys.exit(1)
    except Exception as e:
        console.print(f"[red]Unexpected error: {e}[/red]")
        if debug:
            console.print_exception()
        sys.exit(1)

if __name__ == '__main__':
    main()`,p=`# Auditomatic Trial Export

This bundle contains your exported trial configuration and the Auditomatic runtime for executing it.

## Quick Start

1. **Install dependencies** (one-time setup):
   \`\`\`bash
   pip install -r requirements.txt
   \`\`\`

2. **Add API keys** (if needed):
   
   Option A: Edit \`data/api_keys.json\`:
   \`\`\`json
   {
     "openai-chat": "sk-...",
     "anthropic": "sk-ant-..."
   }
   \`\`\`
   
   Option B: Use environment variables:
   \`\`\`bash
   export AUDITOMATIC_OPENAI_API_KEY=sk-...
   export AUDITOMATIC_ANTHROPIC_API_KEY=sk-ant-...
   \`\`\`

3. **Run the trial**:
   \`\`\`bash
   python run.py
   \`\`\`

## Command Options

\`\`\`bash
# Preview without making API calls
python run.py --dry-run

# Show detailed debug information
python run.py --debug

# Save results in different formats
python run.py --output json
python run.py --output excel

# Specify custom output file
python run.py --output-file my_results.csv

# Adjust timeouts and rate limiting
python run.py --timeout 60 --rate-limit 0.5

# Use different config or API keys file
python run.py --config my_config.json --api-keys my_keys.json
\`\`\`

## Understanding the Output

### CSV Format (default)
- \`order\`: API call sequence number
- \`success\`: Whether the call succeeded
- \`content\`: The extracted response content
- \`latency_ms\`: Response time in milliseconds
- \`prompt_tokens\`, \`completion_tokens\`: Token usage

### JSON Format
Complete structured data including raw responses

### Excel Format
Formatted spreadsheet with auto-sized columns

## Troubleshooting

### "No API key for provider"
Add the required API key to \`data/api_keys.json\` or set the environment variable

### Connection errors
Check your internet connection and firewall settings

### Rate limiting errors
Increase the delay between requests: \`python run.py --rate-limit 1.0\`

## Advanced Usage

### Running a subset of calls
Edit \`data/trial_config.json\` and remove unwanted calls from the \`api_calls\` array

### Modifying parameters
Edit the \`parameters\` field in the relevant configuration in \`trial_config.json\`

### Using local models
For Ollama or other local providers, ensure the service is running on the expected port

## Support

For issues or questions, please refer to the Auditomatic documentation or contact support.

---
Generated by Auditomatic v1.0.0`;function d(){return{package:{"__init__.py":n,"core/__init__.py":"","core/config_loader.py":e,"core/path_extractor.py":t,"execution/__init__.py":"","execution/executor.py":r,"providers/__init__.py":"","providers/request_builder.py":o,"providers/response_parser.py":a,"output/__init__.py":"","output/formatters.py":s},requirements:i,runScript:l,readme:p}}export{d as getRuntimeFiles};
