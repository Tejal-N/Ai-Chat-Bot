export default function Header() {
  return (
    <header className="mx-auto mt-3 w-[calc(100%-2rem)] max-w-3xl rounded-full border border-teal-300 bg-teal-300/10 px-6 py-2.5 text-white shadow-lg backdrop-blur-xl">
      <div className="relative flex items-center justify-center">
        
        <svg
          viewBox="0 0 24 24"
          className="absolute left-0 h-6 w-6"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2C12.8 7.4 16.6 11.2 22 12C16.6 12.8 12.8 16.6 12 22C11.2 16.6 7.4 12.8 2 12C7.4 11.2 11.2 7.4 12 2Z" />
        </svg>

        <div className="text-center">
          <h1 className="text-lg font-semibold tracking-tight">
            Google AI Chat
          </h1>

          <p className="text-xs text-white/65">
            Powered by Gemini
          </p>
        </div>

      </div>
    </header>
  );
}