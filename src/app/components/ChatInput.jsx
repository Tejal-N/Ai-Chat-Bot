"use client";

import { useState } from "react";

export default function ChatInput({ onSend, loading }) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!text.trim() || loading) return;

    onSend(text);
    setText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200 p-4">
      <div className="max-w-3xl mx-auto flex gap-2">

        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Prompt here"
          disabled={loading}
          className="
            flex-1
            px-4
            py-3
            border
            border-gray-300
            rounded-lg
            text-gray-800
            outline-none
            focus:ring-2
            focus:ring-[#3c7879]
          "
        />

        <button
          onClick={handleSubmit}
          disabled={loading || !text.trim()}
          className="
            px-5
            py-3
            bg-[#3c7879]
            text-white
            rounded-lg
            hover:bg-[#275d5d]
            disabled:opacity-50
          "
        >
          {loading ? "..." : "Send"}
        </button>

      </div>
    </footer>
  );
}