"use client";

import { useState } from "react";
import Header from "./components/Header";
import ChatMessage from "./components/ChatMessage";
import ChatInput from "./components/ChatInput";

export default function Home() {
  const [messages, setMessages] = useState([]);     //Stores conversation either user/ai. Message -> current msg, setMessages -> function to update msg state
  const [loading, setLoading] = useState(false);    //whether gemini is processing the req or not. loading -> current loading state, setLoading -> function to update loading state
  //false because it is the initial value. When msg is sent, loading = true.

  const sendMessage = async (text) => {
    if (!text.trim() || loading) return;    //so that empty msgs are not sent/extra spaccing is removed. loading -> if gemini is processing the req, user cannot send another message.

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: text,
      },
    ]);

    setLoading(true);   //processing req

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        //Request body: prompt is sent to api as json.
        body: JSON.stringify({
          text: text,
        }),
      });

      const data = await response.json();   //convert to json

      if (!response.ok) {
        throw new Error(
          data?.error || "Gemini API request failed"
        );
      }

      const answer = data?.answer;

      if (!answer) {
        throw new Error("No response received.");
      }

      // for ai response
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: answer,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "Sorry, something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0a273b] flex flex-col">

      <Header />

      <section className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-3xl mx-auto space-y-4">

          {messages.length === 0 && (         //fresh page, welcome message
            <div className="flex items-center justify-center min-h-[60vh]">
              <div className="text-center">

                <h2 className="text-3xl font-bold text-white">
                  Google AI Chat
                </h2>

                <p className="text-white/60 mt-2">
                  Ask Gemini anything.
                </p>

              </div>
            </div>
          )}

          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              role={message.role}
              text={message.text}
            />
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-[#bbe1fa] text-[#1b262c] px-4 py-3 rounded-xl">
                Gemini is thinking...
              </div>
            </div>
          )}

        </div>
      </section>

      <ChatInput
        onSend={sendMessage}
        loading={loading}
      />

    </main>
  );
}