import { checkAnagram } from "../utils/helpers";

export default function CheckAnagram() {
  const word1 = "Dear";
  const word2 = "Read";

  const isAnagram = checkAnagram(word1, word2);

  return (
    <div>
      <h4>Instruksi 7: Memeriksa Anagram</h4>
      <p>Kata pertama: {word1}</p>
      <p>Kata kedua: {word2}</p>
      <p>{isAnagram ? "String ini anagram." : "Bukan string anagram!"}</p>
    </div>
  );
}
