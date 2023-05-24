import axios, { AxiosResponse } from "axios";

export interface Message {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface CompletionCreatePayload {
  model: string;
  messages: Message[];
}

export interface ChatResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
  choices: {
    message: {
      role: string;
      content: string;
    };
    finish_reason: string;
    model: {
      id: string;
    };
  }[];
}

const baseUrl = "https://api.openai.com/v1/";
export const createChatCompletion = async (
  payload: CompletionCreatePayload
): Promise<ChatResponse> => {
  const url = `${baseUrl}/chat/completions`;
  const headers = {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_GPT_API_KEY!}`,
  };

  let response: AxiosResponse<ChatResponse>;

  try {
    response = await axios.post<
      CompletionCreatePayload,
      AxiosResponse<ChatResponse>
    >(url, payload, { headers });
  } catch (error) {
    console.error(`Error in createChatCompletion: ${error}`);
    throw error;
  }

  return response.data;
};
