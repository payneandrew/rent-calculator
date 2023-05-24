import {
  ChatResponse,
  CompletionCreatePayload,
  createChatCompletion,
} from "@/api/gpt";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Page from "@/components/Page";
import { useEffect, useState } from "react";

export default function GPT() {
  const [response, setResponse] = useState<ChatResponse | null>(null);
  const [celebrityName, setCelebrityName] = useState("");
  const [prompt, setPrompt] = useState("");

  useEffect(() => {
    const payload: CompletionCreatePayload = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are Donald Trump and you should only respond as him",
        },
        { role: "user", content: "tell me a joke" },
      ],
    };

    createChatCompletion(payload)
      .then((data) => {
        setResponse(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  if (!response) {
    return <p>Loading...</p>;
  }

  return (
    <Page>
      <form onSubmit={handleSubmit}>
        <label>
          Enter the celebrity name:
          <Input
            type="number"
            value={celebrityName}
            onChange={(event) => setTotalRentAmount(event.target.value)}
          />
        </label>
        <br />
        <label>
          Enter the question:
          <Input
            type="number"
            value={prompt}
            onChange={(event) => setTotalRentAmount(event.target.value)}
          />
        </label>
        <br />
        <Button>Next Step</Button>
      </form>
      <div>
        <h2>Chat Response:</h2>
        {response.choices.map((choice, index) => (
          <p key={index}>{choice.message.content}</p>
        ))}
      </div>
    </Page>
  );
}
