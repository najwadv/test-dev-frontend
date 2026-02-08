export default function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
  ...props
}) {
  const baseClasses =
    "px-6 py-2 rounded-lg font-semibold transition-all duration-200 active:scale-95 flex items-center justify-center gap-2";

  const variants = {
    primary:
      "bg-[#4244e6] text-white hover:bg-[#7e96f3] shadow-lg shadow-blue-900/20",
    secondary: "bg-stone-50 text-black hover:bg-stone-100",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
