import { calcEvenNumbers } from "../utils/helpers";

export default function EvenNumbers({ numbers }) {
  const { total, evenNumbers } = calcEvenNumbers(numbers);

  return (
    <div>
      <p className="text-stone-400 text-lg mb-8">
        Initiated Array: {numbers.join(", ")}
      </p>
      <p className="font-semibold">Even Numbers: {evenNumbers.join(", ")}</p>
      <p className="font-semibold">Total Even Numbers: {total}</p>
    </div>
  );
}
