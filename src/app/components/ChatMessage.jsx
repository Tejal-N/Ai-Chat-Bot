export default function ChatMessage({ role, text }) {
  const isUser = role === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[75%] px-4 py-3 rounded-xl ${
          isUser
            ? "bg-[#23637A] text-white"
            : "bg-[#bbe1fa] text-[#1b262c]"
        }`}
      >
        {!isUser && (
          <p className="text-xs font-bold mb-1 opacity-70">
            Gemini
          </p>
        )}

        <p className="text-sm leading-relaxed whitespace-pre-wrap">
          {text}
        </p>
      </div>
    </div>
  );
}