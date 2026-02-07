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
