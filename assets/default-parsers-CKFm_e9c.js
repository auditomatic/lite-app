const e=[{name:"First Number",description:"Extract the first integer or decimal number",type:"regex",config:{pattern:"(\\d+(?:\\.\\d+)?)",captureGroup:1},outputType:"number",isBuiltIn:!0,isPublic:!0,tags:["number","basic"],testCases:[{name:"Integer",input:"The answer is 42",expected:42},{name:"Decimal",input:"Price: $19.99",expected:19.99},{name:"No number",input:"No numbers here",expected:void 0}]},{name:"Last Number",description:"Extract the last integer or decimal number",type:"regex",config:{pattern:".*\\b(\\d+(?:\\.\\d+)?)",captureGroup:1},outputType:"number",isBuiltIn:!0,isPublic:!0,tags:["number","basic"]},{name:"Score/Grade/Result",description:"Extract number after score, grade, result, rating, etc.",type:"regex",config:{pattern:"(?:score|grade|result|rating|mark|points?|total)[^0-9]*?(\\d+(?:\\.\\d+)?)",flags:"i",captureGroup:1},outputType:"number",isBuiltIn:!0,isPublic:!0,tags:["number","evaluation"],testCases:[{name:"Score",input:"Your score is 85",expected:85},{name:"Grade",input:"I would grade this response an 90",expected:90},{name:"Natural language",input:"The final result was seventy-five: 75",expected:75}]},{name:"Percentage",description:"Extract percentage values",type:"regex",config:{pattern:"(\\d+(?:\\.\\d+)?)\\s*%",captureGroup:1},outputType:"number",isBuiltIn:!0,isPublic:!0,tags:["number","percentage"]},{name:"Currency (USD)",description:"Extract dollar amounts",type:"regex",config:{pattern:"\\$([\\d,]+(?:\\.\\d{2})?)",captureGroup:1},outputType:"number",isBuiltIn:!0,isPublic:!0,tags:["number","currency"],testCases:[{name:"Simple",input:"Price: $99.99",expected:99.99},{name:"With commas",input:"Total: $1,234.56",expected:1234.56}]},{name:"Yes/No",description:"Extract yes or no answer",type:"regex",config:{pattern:"\\b(yes|no)\\b",flags:"i",captureGroup:1},outputType:"boolean",isBuiltIn:!0,isPublic:!0,tags:["boolean","basic"],testCases:[{name:"Yes",input:"The answer is yes",expected:!0},{name:"No",input:"No, that is incorrect",expected:!1}]},{name:"True/False",description:"Extract true or false value",type:"regex",config:{pattern:"\\b(true|false)\\b",flags:"i",captureGroup:1},outputType:"boolean",isBuiltIn:!0,isPublic:!0,tags:["boolean","basic"]},{name:"Pass/Fail",description:"Extract pass or fail status",type:"regex",config:{pattern:"\\b(pass|fail|passed|failed)\\b",flags:"i",captureGroup:1},outputType:"text",isBuiltIn:!0,isPublic:!0,tags:["boolean","evaluation"]},{name:"First Sentence",description:"Extract the first sentence",type:"regex",config:{pattern:"^([^.!?]+)[.!?]?",captureGroup:1},outputType:"text",isBuiltIn:!0,isPublic:!0,tags:["text","sentence"]},{name:"Last Sentence",description:"Extract the last sentence",type:"regex",config:{pattern:"([^.!?]+)[.!?]?$",captureGroup:1},outputType:"text",isBuiltIn:!0,isPublic:!0,tags:["text","sentence"]},{name:"Answer/Response",description:'Extract text after "answer:", "response:", etc.',type:"regex",config:{pattern:"(?:answer|response|solution)\\s*:?\\s*(.+?)(?:[.!?\\n]|$)",flags:"i",captureGroup:1},outputType:"text",isBuiltIn:!0,isPublic:!0,tags:["text","response"]},{name:"Multiple Choice (A-D)",description:"Extract multiple choice answer (A, B, C, or D)",type:"regex",config:{pattern:"\\b([A-D])\\b",flags:"i",captureGroup:1},outputType:"text",isBuiltIn:!0,isPublic:!0,tags:["text","multiple-choice"]},{name:"Email Address",description:"Extract first email address",type:"regex",config:{pattern:"([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,})",flags:"i",captureGroup:1},outputType:"text",isBuiltIn:!0,isPublic:!0,tags:["text","email","structured"]},{name:"URL",description:"Extract first HTTP/HTTPS URL",type:"regex",config:{pattern:"(https?://[^\\s]+)",captureGroup:1},outputType:"text",isBuiltIn:!0,isPublic:!0,tags:["text","url","structured"]},{name:"JSON Object",description:"Extract first JSON object",type:"regex",config:{pattern:"(\\{[^{}]*(?:\\{[^{}]*\\}[^{}]*)*\\})",captureGroup:1},outputType:"json",isBuiltIn:!0,isPublic:!0,tags:["json","structured"]},{name:"Sum All Numbers",description:"Find and sum all numbers in the text",type:"javascript",config:{code:`// Find all numbers and sum them
const numbers = content.match(/\\d+(\\.\\d+)?/g) || []
const sum = numbers.reduce((total, n) => total + parseFloat(n), 0)
return sum`,timeout:1e4},outputType:"number",isBuiltIn:!0,isPublic:!0,tags:["javascript","number","calculation"],testCases:[{name:"Multiple numbers",input:"Items: 10, 20, 30",expected:60},{name:"With decimals",input:"Prices: $1.50, $2.25, $3.25",expected:7}]},{name:"Word Count",description:"Count the number of words",type:"javascript",config:{code:`// Count words (split by whitespace)
const words = content.trim().split(/\\s+/)
return words.filter(w => w.length > 0).length`,timeout:1e4},outputType:"number",isBuiltIn:!0,isPublic:!0,tags:["javascript","text","statistics"]},{name:"Extract Between Markers",description:"Extract text between START and END markers",type:"javascript",config:{code:`// Extract text between START and END
const start = content.indexOf('START')
const end = content.indexOf('END')
if (start === -1 || end === -1) return null
return content.substring(start + 5, end).trim()`,timeout:1e4},outputType:"text",isBuiltIn:!0,isPublic:!0,tags:["javascript","text","extraction"]},{name:"Sentiment Keywords",description:"Analyze sentiment based on keyword presence",type:"javascript",config:{code:`// Simple sentiment analysis
const text = content.toLowerCase()
const positive = ['good', 'great', 'excellent', 'amazing', 'wonderful', 
                  'fantastic', 'love', 'perfect', 'best', 'happy']
const negative = ['bad', 'terrible', 'awful', 'horrible', 'worst', 
                  'hate', 'disgusting', 'poor', 'disappointing', 'sad']

const posCount = positive.filter(word => text.includes(word)).length
const negCount = negative.filter(word => text.includes(word)).length

if (posCount > negCount) return 'positive'
if (negCount > posCount) return 'negative'
return 'neutral'`,timeout:1e4},outputType:"text",isBuiltIn:!0,isPublic:!0,tags:["javascript","sentiment","analysis"]},{name:"Mean of Numbers (NumPy)",description:"Extract all numbers and return their mean using NumPy",type:"python",config:{code:`import re
import numpy as np

def analyze_numbers(text):
    """Extract numbers and return their mean."""
    # Extract all numbers
    numbers = re.findall(r'\\d+(?:\\.\\d+)?', text)
    
    if not numbers:
        return None
    
    # Use NumPy for calculation
    nums = np.array([float(n) for n in numbers])
    return float(np.mean(nums))`,functionName:"analyze_numbers",timeout:1e4},outputType:"number",isBuiltIn:!0,isPublic:!0,tags:["python","numpy","statistics","mean"]},{name:"Extract First Number from JSON",description:"Extract JSON and return the first numeric value found",type:"python",config:{code:`import re
import json

def extract_json(text):
    """Extract first numeric value from JSON in text."""
    # Try to find JSON-like structure
    match = re.search(r'\\{[^{}]*(?:\\{[^{}]*\\}[^{}]*)*\\}', text)
    
    if not match:
        return None
    
    try:
        data = json.loads(match.group(0))
        
        # Find first numeric value in JSON
        def find_first_number(obj):
            if isinstance(obj, (int, float)):
                return obj
            elif isinstance(obj, dict):
                for v in obj.values():
                    result = find_first_number(v)
                    if result is not None:
                        return result
            elif isinstance(obj, list):
                for item in obj:
                    result = find_first_number(item)
                    if result is not None:
                        return result
            return None
        
        return find_first_number(data)
    except json.JSONDecodeError:
        return None`,functionName:"extract_json",timeout:1e4},outputType:"number",isBuiltIn:!0,isPublic:!0,tags:["python","json","extraction","number"]},{name:"First Valid Email",description:"Extract and return the first valid email address",type:"python",config:{code:`import re

def validate_emails(text):
    """Extract and return first valid email address."""
    # Comprehensive email regex
    pattern = r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}'
    
    emails = re.findall(pattern, text)
    
    for email in emails:
        # Additional validation
        if not ('..' in email or email.startswith('.') or email.endswith('.')):
            return email  # Return first valid email as string
    
    return None  # No valid email found`,functionName:"validate_emails",timeout:1e4},outputType:"text",isBuiltIn:!0,isPublic:!0,tags:["python","email","validation","single"]},{name:"Pandas DataFrame Mean",description:"Parse CSV-like data and return mean of first numeric column using pandas",type:"python",config:{code:`import re
import pandas as pd
import numpy as np
from io import StringIO

def analyze_csv(text):
    """Parse CSV data and return mean of first numeric column."""
    # Try to find CSV-like data (lines with commas)
    lines = text.strip().split('\\n')
    csv_lines = [line for line in lines if ',' in line]
    
    if not csv_lines:
        return None
    
    try:
        # Create DataFrame from CSV text
        csv_text = '\\n'.join(csv_lines)
        df = pd.read_csv(StringIO(csv_text))
        
        # Find first numeric column
        for col in df.columns:
            if pd.api.types.is_numeric_dtype(df[col]):
                return float(df[col].mean())
        
        return None  # No numeric columns
    except:
        return None`,functionName:"analyze_csv",timeout:1e4},outputType:"number",isBuiltIn:!0,isPublic:!0,tags:["python","pandas","csv","dataframe","mean"]}];export{e as DEFAULT_PARSERS};
