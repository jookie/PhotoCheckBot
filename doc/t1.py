
from openai import OpenAI


const apiKey = process.env.OPENAI_API_KEY!;
const OrganizationID = process.env.OPENAI_API_ORG_ID;

client = OpenAI()
client.api_key = "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"
completion = client.chat.completions.create(
  model="gpt-3.5-turbo",
  messages=[
    {"role": "system", "content": "You are a poetic assistant, skilled in explaining complex programming concepts with creative flair."},
    {"role": "user", "content": "Compose a poem that explains the concept of recursion in programming."}
  ]
)

print(completion.choices[0].message)