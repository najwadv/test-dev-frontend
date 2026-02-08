export default function TerminalContainer({ children }) {
  return (
    <div className="w-full bg-[#0d0d0d] rounded-xl border border-stone-800 overflow-hidden shadow-2xl font-mono">
      <div className="flex gap-1.5 ml-4 my-2">
        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
      </div>
      <span className="text-stone-500 text-[10px] ml-4 select-none uppercase tracking-widest">
        bash — expectation.json
      </span>

      <div className="p-6 text-sm leading-relaxed overflow-x-auto">
        <pre className="text-stone-400">
          <code>{children}</code>
        </pre>
      </div>
    </div>
  );
}
