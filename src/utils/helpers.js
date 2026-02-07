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

// Helper function for check checkAnagram.jsx
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

// Helper function for transform data JSON
export const transformJsonData = (dataJson) => {
  const source = dataJson.data;
  const result = {
    total: 0,
    data: [],
  };
  const groupedData = {};

  source.forEach((item) => {
    result.total += item.total;

    if (!groupedData[item.category]) {
      groupedData[item.category] = {
        category: item.category,
        total: 0,
        data: {},
      };
    }

    const catNow = groupedData[item.category];
    catNow.total += item.total;

    if (!catNow.data[item.code]) {
      catNow.data[item.code] = {
        total: 0,
        data: [],
      };
    }

    const codeNow = catNow.data[item.code];
    codeNow.total += item.total;
    codeNow.data.push({
      name: item.name,
      total: item.total,
    });

    codeNow.data.sort((a, b) => a.name.localeCompare(b.name));
  });
  const sortedCat = Object.keys(groupedData).sort();
  result.data = sortedCat.map((catName) => {
    const catObject = groupedData[catName];

    const sortedCode = Object.keys(catObject.data).sort();
    const sortedDataCode = {};

    sortedCode.forEach((code) => {
      sortedDataCode[code] = catObject.data[code];
    });

    return {
      category: catObject.category,
      total: catObject.total,
      data: sortedDataCode,
    };
  });
  return result;
};
