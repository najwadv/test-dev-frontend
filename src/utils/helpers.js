// Helper function for file countPets.jsx
export const countBySpecies = (pets) => {
  return pets.reduce((acc, pet) => {
    const species = pet.species;

    if (!acc[species]) {
      acc[species] = 1;
    } else {
      acc[species] += 1;
    }

    return acc;
  }, {});
};

// Helper function for file isPalindrome.jsx
export const getPalindrome = (name) => {
  const reversed = name.toLowerCase().split("").reverse().join("");
  return {
    isPalindrome: name.toLowerCase() === reversed,
    nameLength: name.length,
  };
};

// Helper function for file evenNumbers.jsx
export const calcEvenNumbers = (arr) => {
  const array = arr || [];
  const even = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      even.push(arr[i]);
    }
  }
  const total = even.reduce((acc, num) => acc + num, 0);

  return {
    total: total,
    evenNumbers: even,
  };
};

// Helper function for check Anagram
export const checkAnagram = (word1, word2) => {
  const cleanWord1 = word1.toLowerCase().replace(/[^a-z0-9]/g, "");
  const cleanWord2 = word2.toLowerCase().replace(/[^a-z0-9]/g, "");

  if (cleanWord1.length !== cleanWord2.length) {
    return false;
  }

  const charCount = {};
  for (const char of cleanWord1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const char of cleanWord2) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char] -= 1;
  }
  return true;
};
