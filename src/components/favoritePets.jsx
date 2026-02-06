import { useState } from "react";

export default function FavoritePets({ pets }) {
  const [direction, setDirection] = useState("asc");
  const favoritePets = pets.filter((pet) => pet.isFavorite === true);
  const sortedPets = [...favoritePets].sort((a, b) => {
    return direction === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });

  const toggleSort = () => {
    setDirection(direction === "asc" ? "desc" : "asc");
  };

  return (
    <div>
      <h4>Instruksi 3: Mengurutkan hewan kesayangan Esa</h4>
      <button onClick={toggleSort}>
        Urutkan: {direction === "asc" ? "Z-A" : "A-Z"}
      </button>
      <ul>
        {sortedPets.map((pet, index) => (
          <li key={index}>
            {pet.name} - {pet.species} - {pet.breed} - {pet.characteristic}
          </li>
        ))}
      </ul>
      <p>Jumlah hewan kesayangan: {sortedPets.length}</p>
    </div>
  );
}
