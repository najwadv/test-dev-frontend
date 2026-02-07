import { getPalindrome } from "../utils/helpers";

export default function IsPalindrome({ pets }) {
  return (
    <div>
      <h4>Instruksi 6: Memeriksa Palindrome pada Nama Hewan Peliharaan Esa</h4>
      <ul>
        {pets.map((pet, index) => {
          const result = getPalindrome(pet.name);
          return (
            <li key={index}>
              {pet.name} - {result.nameLength} -{" "}
              {result.isPalindrome ? "Ya" : "Tidak"}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
