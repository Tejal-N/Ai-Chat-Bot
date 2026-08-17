export default function ChatMessage({ role, text }) {
  const isUser = role === "user";

  return (
    <div className={`flex w-full ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`flex max-w-[75%] items-end gap-2 sm:max-w-[70%] ${
          isUser ? "flex-row" : "flex-row"
        }`}
      >
        {/* Icon */}
        <div
          className={`mb-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-teal-400/50 bg-teal-400/10 ${
            isUser ? "order-2" : "order-1"
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 text-teal-300"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d={
                isUser
                  ? "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z"
                  : "M12 2C12.8 7.4 16.6 11.2 22 12C16.6 12.8 12.8 16.6 12 22C11.2 16.6 7.4 12.8 2 12C7.4 11.2 11.2 7.4 12 2Z"
              }
            />
          </svg>
        </div>

        {/* Message */}
        <div
          className={`order-1 rounded-2xl px-4 py-3 text-white shadow-sm ${
            isUser
              ? "border border-teal-800 bg-[#23707a]/30"
              : "border border-teal-400 bg-white/10 backdrop-blur-md"
          } ${isUser ? "order-1" : "order-2"}`}
        >
          {!isUser && (
            <p className="mb-1 text-xs font-semibold text-teal-200">
              Gemini
            </p>
          )}

          <p className="text-sm leading-relaxed whitespace-pre-wrap">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}