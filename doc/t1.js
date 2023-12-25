const OpenAI = require('openai');

// Replace 'YOUR_API_KEY' with your actual API key from OpenAI
const apiKey = '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';

// Initialize OpenAI with your API key
const openai = new OpenAI({ apiKey });

async function main() {
  try {
    const completion = await openai.complete({
      engine: 'text-davinci-003',
      prompt: 'Once upon a time...',
      max_tokens: 50,
    });

    console.log(completion.data.text);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
