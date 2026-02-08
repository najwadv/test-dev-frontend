import { useState } from "react";
import Button from "./Button";

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
    <div className="flex flex-col">
      <div className="space-y-2 mb-6 text-stone-300">
        {sortedPets.map((pet, index) => (
          <li key={index}>
            {pet.name}, {pet.species}, {pet.breed}, {pet.characteristic}
          </li>
        ))}
      </div>
      <p className="text-center font-semibold mb-6">
        Jumlah hewan kesayangan: {sortedPets.length}
      </p>
      <div className="flex justify-center w-full">
        <Button onClick={toggleSort} variant="primary" className="px-10 py-3">
          Sort {direction === "asc" ? "Descending" : "Ascending"}
        </Button>
      </div>
    </div>
  );
}
