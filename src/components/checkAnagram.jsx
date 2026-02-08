import { checkAnagram } from "../utils/helpers";

export default function CheckAnagram() {
  const word1 = "Dear";
  const word2 = "Read";

  const isAnagram = checkAnagram(word1, word2);

  return (
    <div>
      <p className="text-stone-400 text-lg">Kata pertama: {word1}</p>
      <p className="text-stone-400 text-lg mb-8">Kata kedua: {word2}</p>
      <p className="font-semibold">
        {isAnagram
          ? "These strings are anagrams!"
          : "These strings are not anagrams!"}
      </p>
    </div>
  );
}
