export default function InstructionCard({
  number,
  title,
  description,
  children,
  className = "",
}) {
  return (
    <div
      className={`bg-stone-900 border border-stone-800 rounded-2xl p-6 shadow-xl ${className}`}
    >
      <div className="flex items-center gap-3 mb-2">
        <h3 className="text-xl font-bold text-stone-100">
          Instruction {number}: {title}
        </h3>
      </div>
      {description && (
        <p className="text-stone-400 text-lg mb-8">{description}</p>
      )}
      <div className="text-stone-300">{children}</div>
    </div>
  );
}
