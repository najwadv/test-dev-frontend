import { getPalindrome } from "../utils/helpers";

export default function IsPalindrome({ pets }) {
  return (
    <div className="space-y-2 mb-6 text-stone-300">
      {pets.map((pet, index) => {
        const result = getPalindrome(pet.name);
        return (
          <li key={index}>
            {pet.name} ({result.nameLength}){" "}
            {result.isPalindrome ? "is palindrome." : "is not palindrome."}
          </li>
        );
      })}
    </div>
  );
}
