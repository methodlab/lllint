import axios from 'axios';
import { FormatResult, formatFunction } from './llmTypes';

export async function formatCodeWithLLM(
  code: string,
  systemPrompt: string,
  codingGuidelines: string,
  apiKey: string,
  model: string
): Promise<FormatResult> {
  const preprocessedCode = code.split('\n').map((line, index) => `${index + 1}| ${line}`).join('\n');

  const messages = [
    { role: 'system', content: systemPrompt },
    { role: 'user', content: `Please format the following code according to the coding guidelines and provide any notes.` },
    { role: 'user', content: `Coding Guidelines:\n${codingGuidelines}` },
    { role: 'user', content: `Code:\n${preprocessedCode}` }
  ];

  const apiUrl = "https://api.openai.com/v1/chat/completions";

  try {
    const response = await axios.post(apiUrl, {
      model: model,
      messages: messages,
      functions: [formatFunction],
      function_call: "auto",
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      }
    });

    const choice = response.data.choices[0];
    
    if (choice.finish_reason === 'function_call') {
      const functionCall = choice.message.function_call;

      if (functionCall.name === 'format') {
        const args = JSON.parse(functionCall.arguments);
        return {
          formattedCode: args.code,
          notes: args.notes || []
        };
      }
    }

    throw new Error('Unexpected response from the assistant.');
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.error?.message || error.message;
      throw new Error(`API Error: ${errorMessage}`);
    } else {
      throw new Error(`Unexpected error: ${error.message}`);
    }
  }
}