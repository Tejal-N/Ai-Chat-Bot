"use client";

import { useState } from "react";

export default function ChatInput({ onSend, loading }) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!text.trim() || loading) return;

    onSend(text);
    setText("");
  };

  return (
    <footer className="px-3 pb-4 pt-2">
      <div
        className={`mx-auto flex max-w-3xl gap-2 rounded-2xl border bg-white/10 p-2 backdrop-blur-xl ${
          text.trim() ? "border-teal-400" : "border-teal-400/50"
        }`}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit();
          }}
          placeholder="Prompt here"
          disabled={loading}
          className="min-w-0 flex-1 bg-transparent px-3 py-2 text-white outline-none placeholder:text-white/40"
        />

        <button
          onClick={handleSubmit}
          disabled={loading || !text.trim()}
          className="rounded-xl bg-teal-500 px-5 py-2 text-white transition hover:bg-teal-600 disabled:opacity-50"
        >
          {loading ? "..." : "Send"}
        </button>
      </div>
    </footer>
  );
}