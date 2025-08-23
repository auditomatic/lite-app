const e=[{name:"First Number",description:"Extract the first integer or decimal number",type:"regex",config:{pattern:"(\\d+(?:\\.\\d+)?)",captureGroup:1},outputType:"number",isBuiltIn:!0,isPublic:!0,tags:["number","basic"],testCases:[{name:"Simple integer",input:"The answer is 42",expected:42},{name:"Decimal number",input:"Rate this 8.5 points",expected:8.5},{name:"Multiple numbers",input:"Score: 85, Grade: 90",expected:85},{name:"With text prefix",input:"Final result: 73.2 out of 100",expected:73.2},{name:"No number found",input:"No numbers here at all",expected:void 0},{name:"Zero value",input:"Score: 0 points",expected:0}]},{name:"Last Number",description:"Extract the last integer or decimal number",type:"regex",config:{pattern:".*\\b(\\d+(?:\\.\\d+)?)",captureGroup:1},outputType:"number",isBuiltIn:!0,isPublic:!0,tags:["number","basic"],testCases:[{name:"Multiple numbers",input:"Student ID: 12345, Final Score: 87",expected:87},{name:"Score with breakdown",input:"85/100 with 25/25 on writing and 22/25 research",expected:25},{name:"Decimal at end",input:"Overall rating is 8.5",expected:8.5},{name:"Year and score",input:"Class of 2024, scored 92",expected:92},{name:"Single number",input:"Result: 76",expected:76},{name:"No numbers",input:"Great work overall",expected:void 0}]},{name:"Score/Grade/Result",description:"Extract number after score, grade, result, rating, etc.",type:"regex",config:{pattern:"(?:score|grade|result|rating|mark|points?|total)[^0-9]*?(\\d+(?:\\.\\d+)?)",flags:"i",captureGroup:1},outputType:"number",isBuiltIn:!0,isPublic:!0,tags:["number","evaluation"],testCases:[{name:"Simple score",input:"Your score is 85",expected:85},{name:"Grade format",input:"I would grade this response a 90",expected:90},{name:"Rating with colon",input:"Rating: 8.5",expected:8.5},{name:"Points earned",input:"Total points earned: 47",expected:47},{name:"Multiple keywords",input:"The final result shows a score of 73",expected:73},{name:"No score keyword",input:"The answer is 85",expected:void 0},{name:"Decimal grade",input:"Grade: 82.5",expected:82.5}]},{name:"Percentage",description:"Extract percentage values",type:"regex",config:{pattern:"(\\d+(?:\\.\\d+)?)\\s*%",captureGroup:1},outputType:"number",isBuiltIn:!0,isPublic:!0,tags:["number","percentage"],testCases:[{name:"Simple percentage",input:"Accuracy is 85%",expected:85},{name:"Decimal percentage",input:"92.5% correct",expected:92.5},{name:"Multiple percentages",input:"80% accuracy, 75% recall",expected:80},{name:"No space",input:"Score:88%",expected:88},{name:"With context",input:"The model achieved 91.2% on this task",expected:91.2},{name:"No percentage",input:"Score is 85 out of 100",expected:void 0}]},{name:"Yes/No",description:"Extract yes or no answer",type:"regex",config:{pattern:"\\b(yes|no)\\b",flags:"i",captureGroup:1},outputType:"boolean",isBuiltIn:!0,isPublic:!0,tags:["boolean","basic"],testCases:[{name:"Simple yes",input:"The answer is yes",expected:!0},{name:"Simple no",input:"No, that is incorrect",expected:!1},{name:"Uppercase",input:"YES, I agree",expected:!0},{name:"In sentence",input:"I would say no to this",expected:!1},{name:"Multiple options",input:"Yes, but also no in some cases",expected:!0},{name:"No match",input:"Maybe or perhaps",expected:void 0}]},{name:"True/False",description:"Extract true or false value",type:"regex",config:{pattern:"\\b(true|false)\\b",flags:"i",captureGroup:1},outputType:"boolean",isBuiltIn:!0,isPublic:!0,tags:["boolean","basic"],testCases:[{name:"Simple true",input:"That statement is true",expected:!0},{name:"Simple false",input:"False, this is incorrect",expected:!1},{name:"Uppercase",input:"TRUE",expected:!0},{name:"Mixed case",input:"The answer is False",expected:!1},{name:"In context",input:"It is true that the sky is blue",expected:!0},{name:"No match",input:"Correct or incorrect",expected:void 0}]},{name:"Pass/Fail",description:"Extract pass or fail status",type:"regex",config:{pattern:"\\b(pass|fail|passed|failed)\\b",flags:"i",captureGroup:1},outputType:"text",isBuiltIn:!0,isPublic:!0,tags:["boolean","evaluation"],testCases:[{name:"Student passed",input:"The student passed the exam",expected:"passed"},{name:"Failed test",input:"Unfortunately, you failed",expected:"failed"},{name:"Simple pass",input:"Pass",expected:"Pass"},{name:"Simple fail",input:"FAIL",expected:"FAIL"},{name:"Past tense",input:"Student has passed with honors",expected:"passed"},{name:"No match",input:"Successful completion",expected:void 0}]},{name:"First Word",description:"Extract the first word from text",type:"regex",config:{pattern:"\\b(\\w+)\\b",captureGroup:1},outputType:"text",isBuiltIn:!0,isPublic:!0,tags:["text","word","basic"],testCases:[{name:"Simple word",input:"Hello world",expected:"Hello"},{name:"With punctuation",input:"Great! This is amazing",expected:"Great"},{name:"Single word",input:"Excellent",expected:"Excellent"},{name:"With spaces",input:"   Trimmed   ",expected:"Trimmed"},{name:"Numbers as words",input:"123 test",expected:"123"},{name:"Empty input",input:"",expected:void 0}]},{name:"Dollar Amount",description:"Extract dollar amounts and convert to number (removes $ and commas)",type:"javascript",config:{code:`// Extract dollar amount and convert to number
const dollarPattern = /\\$([\\d,]+(?:\\.\\d{2})?)/
const match = content.match(dollarPattern)

if (!match) {
  return undefined
}

// Remove commas and convert to number
const amount = match[1].replace(/,/g, '')
return parseFloat(amount)`,timeout:1e4},outputType:"number",isBuiltIn:!0,isPublic:!0,tags:["number","currency","money","javascript"],testCases:[{name:"Simple dollar",input:"The price is $100",expected:100},{name:"With commas",input:"Salary: $150,000",expected:15e4},{name:"With cents",input:"Total: $99.99",expected:99.99},{name:"Large amount",input:"$1,250,000.00",expected:125e4},{name:"Multiple amounts",input:"Was $200, now $150",expected:200},{name:"No dollar sign",input:"Price is 100",expected:void 0}]},{name:"First Sentence",description:"Extract the first sentence",type:"regex",config:{pattern:"^([^.!?]+)[.!?]?",captureGroup:1},outputType:"text",isBuiltIn:!0,isPublic:!0,tags:["text","sentence"],testCases:[{name:"Simple sentence",input:"This is great. More text here.",expected:"This is great"},{name:"No punctuation",input:"Single sentence with no period",expected:"Single sentence with no period"},{name:"Exclamation",input:"Excellent work! Keep going.",expected:"Excellent work"},{name:"Question first",input:"Is this correct? Yes it is.",expected:"Is this correct"},{name:"Multiple sentences",input:"Good essay. Clear writing. Nice conclusion.",expected:"Good essay"},{name:"Empty input",input:"",expected:void 0}]},{name:"Last Sentence",description:"Extract the last sentence",type:"regex",config:{pattern:"([^.!?]+)[.!?]?$",captureGroup:1},outputType:"text",isBuiltIn:!0,isPublic:!0,tags:["text","sentence"],testCases:[{name:"Multiple sentences",input:"First sentence. Second sentence. Final conclusion",expected:"Final conclusion"},{name:"With period",input:"Start here. End here.",expected:"End here"},{name:"Single sentence",input:"Only one sentence",expected:"Only one sentence"},{name:"Ends with exclamation",input:"Good start. Great finish!",expected:"Great finish"},{name:"Ends with question",input:"Some text. Is this right?",expected:"Is this right"},{name:"No sentences",input:"...",expected:void 0}]},{name:"Answer/Response",description:'Extract text after "answer:", "response:", etc.',type:"regex",config:{pattern:"(?:answer|response|solution)\\s*:?\\s*(.+?)(?:[.!?\\n]|$)",flags:"i",captureGroup:1},outputType:"text",isBuiltIn:!0,isPublic:!0,tags:["text","response"],testCases:[{name:"Answer with colon",input:"Answer: The capital is Paris",expected:"The capital is Paris"},{name:"Response format",input:"Response: I agree with this",expected:"I agree with this"},{name:"Solution format",input:"Solution 42 is correct",expected:"42 is correct"},{name:"No colon",input:"Answer is definitely yes",expected:"is definitely yes"},{name:"Uppercase",input:"ANSWER: Absolutely correct",expected:"Absolutely correct"},{name:"No answer word",input:"The result is 85",expected:void 0}]},{name:"Multiple Choice (A-D)",description:"Extract multiple choice answer (A, B, C, or D)",type:"regex",config:{pattern:"\\b([A-D])\\b",flags:"i",captureGroup:1},outputType:"text",isBuiltIn:!0,isPublic:!0,tags:["text","multiple-choice"],testCases:[{name:"Simple A",input:"The answer is A",expected:"A"},{name:"Parentheses",input:"I choose (B) for this question",expected:"B"},{name:"Lowercase",input:"Option c looks correct",expected:"c"},{name:"With period",input:"D. This is the right choice",expected:"D"},{name:"Multiple choices",input:"A is wrong but B is correct",expected:"A"},{name:"No valid choice",input:"I think option E or F",expected:void 0}]},{name:"Letter Grade",description:"Extract letter grades (A, B, C, D, F with optional +/-)",type:"regex",config:{pattern:"\\b([A-F][+-]?)\\b",flags:"i",captureGroup:1},outputType:"text",isBuiltIn:!0,isPublic:!0,tags:["text","grade","evaluation"],testCases:[{name:"Simple A",input:"Grade: A",expected:"A"},{name:"B plus",input:"Student earned a B+",expected:"B+"},{name:"C minus",input:"This gets a C-",expected:"C-"},{name:"Failing grade",input:"Unfortunately this is an F",expected:"F"},{name:"Multiple grades",input:"A on math, B+ on science",expected:"A"},{name:"No letter grade",input:"Scored 85 points",expected:void 0}]},{name:"JSON Object",description:"Extract first JSON object",type:"regex",config:{pattern:"(\\{[^{}]*(?:\\{[^{}]*\\}[^{}]*)*\\})",captureGroup:1},outputType:"json",isBuiltIn:!0,isPublic:!0,tags:["json","structured"],testCases:[{name:"Simple JSON",input:'Result: {"score": 85}',expected:'{"score": 85}'},{name:"Nested JSON",input:'{"result": {"score": 90, "grade": "A"}}',expected:'{"result": {"score": 90, "grade": "A"}}'},{name:"With text around",input:'Here is the data {"value": 42} for analysis',expected:'{"value": 42}'},{name:"Multiple JSON objects",input:'{"a": 1} and {"b": 2}',expected:'{"a": 1}'},{name:"Malformed JSON",input:"{score: 85, grade: A}",expected:"{score: 85, grade: A}"},{name:"No JSON",input:"Just plain text here",expected:void 0}]},{name:"Sum All Numbers",description:"Find and sum all numbers in the text",type:"javascript",config:{code:`// Find all numbers and sum them
const numbers = content.match(/\\d+(\\.\\d+)?/g) || []
const sum = numbers.reduce((total, n) => total + parseFloat(n), 0)
return sum`,timeout:1e4},outputType:"number",isBuiltIn:!0,isPublic:!0,tags:["javascript","number","calculation"],testCases:[{name:"Multiple integers",input:"Items: 10, 20, 30",expected:60},{name:"With decimals",input:"Prices: $1.50, $2.25, $3.25",expected:7},{name:"Mixed numbers",input:"Score 85 out of 100, 8.5 rating",expected:193.5},{name:"No numbers",input:"No numeric values here",expected:0},{name:"Single number",input:"Total: 42",expected:42},{name:"Large numbers",input:"1000 and 2500.75",expected:3500.75}]},{name:"Word Count",description:"Count the number of words",type:"javascript",config:{code:`// Count words (split by whitespace)
const words = content.trim().split(/\\s+/)
return words.filter(w => w.length > 0).length`,timeout:1e4},outputType:"number",isBuiltIn:!0,isPublic:!0,tags:["javascript","text","statistics"],testCases:[{name:"Simple sentence",input:"This is a test",expected:4},{name:"Multiple spaces",input:"Word   count    test",expected:3},{name:"Empty string",input:"",expected:0},{name:"Single word",input:"Hello",expected:1},{name:"With punctuation",input:"Hello, world! How are you?",expected:5},{name:"Essay response",input:"This essay demonstrates clear thinking and good writing skills throughout.",expected:10}]},{name:"Sentiment Keywords",description:"Analyze sentiment based on keyword presence",type:"javascript",config:{code:`// Simple sentiment analysis
const text = content.toLowerCase()
const positive = ['good', 'great', 'excellent', 'amazing', 'wonderful', 
                  'fantastic', 'love', 'perfect', 'best', 'happy', 'outstanding']
const negative = ['bad', 'terrible', 'awful', 'horrible', 'worst', 
                  'hate', 'disgusting', 'poor', 'disappointing', 'sad', 'fail']

const posCount = positive.filter(word => text.includes(word)).length
const negCount = negative.filter(word => text.includes(word)).length

if (posCount > negCount) return 'positive'
if (negCount > posCount) return 'negative'
return 'neutral'`,timeout:1e4},outputType:"text",isBuiltIn:!0,isPublic:!0,tags:["javascript","sentiment","analysis"],testCases:[{name:"Positive response",input:"This is a great essay with excellent points",expected:"positive"},{name:"Negative response",input:"This is terrible work, very disappointing",expected:"negative"},{name:"Neutral response",input:"The paper discusses the methodology clearly",expected:"neutral"},{name:"Mixed sentiment",input:"Good ideas but poor execution",expected:"neutral"},{name:"Strong positive",input:"Amazing work, fantastic results, perfect execution",expected:"positive"},{name:"Strong negative",input:"Awful, terrible, worst I have seen",expected:"negative"}]},{name:"Extract First Number from JSON (JS)",description:"Extract JSON and return the first numeric value found",type:"javascript",config:{code:`// Extract first numeric value from JSON in text
const jsonPattern = /\\{[^{}]*(?:\\{[^{}]*\\}[^{}]*)*\\}/
const match = content.match(jsonPattern)

if (!match) {
  return undefined
}

try {
  const data = JSON.parse(match[0])
  
  // Recursively find first numeric value in JSON
  function findFirstNumber(obj) {
    if (typeof obj === 'number') {
      return obj
    }
    
    if (Array.isArray(obj)) {
      for (const item of obj) {
        const result = findFirstNumber(item)
        if (result !== undefined) {
          return result
        }
      }
    }
    
    if (obj && typeof obj === 'object') {
      for (const value of Object.values(obj)) {
        const result = findFirstNumber(value)
        if (result !== undefined) {
          return result
        }
      }
    }
    
    return undefined
  }
  
  return findFirstNumber(data)
} catch (e) {
  // Invalid JSON
  return undefined
}`,timeout:1e4},outputType:"number",isBuiltIn:!0,isPublic:!0,tags:["javascript","json","extraction","number"],testCases:[{name:"Simple JSON",input:'Result: {"score": 85}',expected:85},{name:"Nested JSON",input:'{"result": {"score": 90, "grade": "A"}}',expected:90},{name:"Array with numbers",input:'{"values": [1, 2, 3]}',expected:1},{name:"Mixed data types",input:'{"name": "test", "score": 75, "valid": true}',expected:75},{name:"No JSON found",input:"Just plain text here",expected:void 0},{name:"Invalid JSON",input:"{score: 85, invalid}",expected:void 0},{name:"No numbers in JSON",input:'{"name": "test", "valid": true}',expected:void 0},{name:"Decimal number",input:'{"rating": 8.5, "max": 10}',expected:8.5},{name:"Deeply nested",input:'{"data": {"results": {"final": {"score": 95}}}}',expected:95}]},{name:"Extract First Number from JSON",description:"Extract JSON and return the first numeric value found",type:"python",config:{code:`import re
import json

def extract_json_number(text):
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
        return None`,functionName:"extract_json_number",timeout:1e4},outputType:"number",isBuiltIn:!0,isPublic:!0,tags:["python","json","extraction","number"],testCases:[{name:"Simple JSON",input:'Result: {"score": 85}',expected:85},{name:"Nested JSON",input:'{"result": {"score": 90, "grade": "A"}}',expected:90},{name:"Array with numbers",input:'{"values": [1, 2, 3]}',expected:1},{name:"Mixed data types",input:'{"name": "test", "score": 75, "valid": true}',expected:75},{name:"No JSON found",input:"Just plain text here",expected:void 0},{name:"Invalid JSON",input:"{score: 85, invalid}",expected:void 0},{name:"No numbers in JSON",input:'{"name": "test", "valid": true}',expected:void 0}]},{name:"LLM Score Extractor (Fuzzy)",description:"Robust multi-strategy extraction of scores/grades/ratings from LLM responses (0-100)",type:"python",config:{code:`import re
import json

def parse_llm_score(text):
    """
    Multi-strategy fuzzy parser for extracting 0-100 scores from LLM responses.
    Handles various formats: JSON, ratios, percentages, natural language.
    Returns dict with value, confidence, and method used.
    """
    
    results = []
    
    # Strategy 1: JSON field extraction (confidence: 0.95)
    json_patterns = [
        r'\\{[^}]*"score"\\s*:\\s*(\\d+(?:\\.\\d+)?)[^}]*\\}',
        r'\\{[^}]*score\\s*:\\s*(\\d+(?:\\.\\d+)?)[^}]*\\}',  # without quotes
        r'"score"\\s*:\\s*(\\d+(?:\\.\\d+)?)',
    ]
    for pattern in json_patterns:
        match = re.search(pattern, text, re.IGNORECASE)
        if match:
            try:
                score = float(match.group(1))
                results.append({
                    'value': score,
                    'confidence': 0.95,
                    'method': 'json_field',
                    'raw_match': match.group(0)
                })
                break
            except:
                pass
    
    # Strategy 2: Score/Rating patterns (confidence: 0.85)
    score_patterns = [
        r'(?:score|rating|grade|mark|points?)\\s*:?\\s*(\\d+(?:\\.\\d+)?)\\s*(?:/\\s*(\\d+))?',
        r'(\\d+(?:\\.\\d+)?)\\s*(?:out of|/)\\s*(\\d+)',
        r'(?:give|gave|would give|rate|grade)(?:\\s+it)?\\s+(?:a\\s+)?(\\d+(?:\\.\\d+)?)',
        r'(?:is|equals?|->|→)\\s*(\\d+(?:\\.\\d+)?)',
    ]
    for pattern in score_patterns:
        matches = re.finditer(pattern, text, re.IGNORECASE)
        for match in matches:
            try:
                score = float(match.group(1))
                # Handle ratios (X/Y format)
                if len(match.groups()) > 1 and match.group(2):
                    denominator = float(match.group(2))
                    if denominator != 100 and denominator > 0:
                        score = (score / denominator) * 100
                
                results.append({
                    'value': score,
                    'confidence': 0.85,
                    'method': 'score_pattern',
                    'raw_match': match.group(0)
                })
            except:
                pass
    
    # Strategy 3: Percentage patterns (confidence: 0.80)
    percent_pattern = r'(\\d+(?:\\.\\d+)?)\\s*%'
    matches = re.finditer(percent_pattern, text)
    for match in matches:
        try:
            score = float(match.group(1))
            results.append({
                'value': score,
                'confidence': 0.80,
                'method': 'percentage',
                'raw_match': match.group(0)
            })
        except:
            pass
    
    # Strategy 4: Context number extraction (confidence: 0.70)
    context_patterns = [
        (r'(?:score|grade|rating|rate|evaluation).*?(\\d+(?:\\.\\d+)?)', 0.70),
        (r'(\\d+(?:\\.\\d+)?).*?(?:score|grade|rating|points|scale)', 0.70),
    ]
    
    for pattern, confidence in context_patterns:
        matches = re.finditer(pattern, text, re.IGNORECASE | re.DOTALL)
        for match in matches:
            try:
                score = float(match.group(1))
                # Sanity check - scores should be 0-100
                if 0 <= score <= 100:
                    results.append({
                        'value': score,
                        'confidence': confidence,
                        'method': 'context_number',
                        'raw_match': match.group(0)[:50]
                    })
            except:
                pass
    
    # Strategy 5: First number fallback (confidence: 0.40)
    all_numbers = re.findall(r'\\d+(?:\\.\\d+)?', text)
    if all_numbers and not results:
        try:
            score = float(all_numbers[0])
            if 0 <= score <= 100:  # Only if reasonable range
                results.append({
                    'value': score,
                    'confidence': 0.40,
                    'method': 'first_number',
                    'raw_match': all_numbers[0]
                })
        except:
            pass
    
    # Strategy 6: Written numbers (confidence: 0.60)
    written_numbers = {
        'zero': 0, 'ten': 10, 'twenty': 20, 'thirty': 30, 'forty': 40,
        'fifty': 50, 'sixty': 60, 'seventy': 70, 'eighty': 80, 'ninety': 90,
        'hundred': 100
    }
    for word, value in written_numbers.items():
        if word in text.lower():
            results.append({
                'value': value,
                'confidence': 0.60,
                'method': 'written_number',
                'raw_match': word
            })
    
    # Return best result
    if not results:
        return None
    
    # Sort by confidence and return best score
    results.sort(key=lambda x: x['confidence'], reverse=True)
    best = results[0]
    
    # Normalize to 0-100 if needed
    if best['value'] > 100:
        if best['value'] <= 10:
            # Might be 0-10 scale
            best['value'] = best['value'] * 10
        elif best['value'] <= 1000:
            # Might be 0-10 scale input as integer
            best['value'] = best['value'] / 10
        else:
            # Probably not a score, reduce confidence
            best['confidence'] *= 0.5
    
    return best['value']`,functionName:"parse_llm_score",timeout:1e4},outputType:"number",isBuiltIn:!0,isPublic:!0,tags:["python","llm","score","fuzzy","multi-strategy"],testCases:[{name:"Simple number",input:"85",expected:85},{name:"Score format",input:"Score: 85/100",expected:85},{name:"Natural language",input:"I would rate this essay 82 points",expected:82},{name:"JSON format",input:'{"score": 90}',expected:90},{name:"Percentage",input:"75%",expected:75},{name:"Ratio scaling",input:"I give it 8.5 out of 10",expected:85},{name:"Written number",input:"about seventy points",expected:70}]}];export{e as DEFAULT_PARSERS};
