import pets from "./data/pets";
import { useState } from "react";
import AddNewPets from "./components/addNewPets";
import FavoritePets from "./components/favoritePets";
import UpdatePets from "./components/updatePets";
import CountPetsBasedOnSpecies from "./components/countPets";
import IsPalindrome from "./components/isPalindrome";
import EvenNumbers from "./components/evenNumbers";
import CheckAnagram from "./components/checkAnagram";

function App() {
  const [esaPets, setEsaPets] = useState(pets);

  const handleAddPet = (newPet) => {
    const isExist = esaPets.some((pet) => pet.name === newPet.name);
    if (!isExist) {
      setEsaPets([...esaPets, newPet]);
    } else {
      alert(`${newPet.name} sudah ada di daftar hewan peliharaan.`);
    }
  };

  const handleReplaceBreed = () => {
    const updatedPets = esaPets.map((pet) => {
      if (pet.species === "Cat" && pet.breed === "Persian") {
        return { ...pet, breed: "Maine Coon" };
      }
      return pet;
    });
    setEsaPets(updatedPets);
  };

  return (
    <>
      <div>
        <h1>Technical Test - Frontend Developer</h1>
        <h3>
          PT. Integrasia Utama | Nama Kandidat: Najwa Diva Azzahra | Tanggal
          pengerjaan: 6-9 Februari 2026
        </h3>
        <h4>Instruksi 1: Data Array Hewan Peliharaan Esa</h4>
        <ul>
          {esaPets.map((pet, index) => (
            <li key={`pet-${index}`}>
              {pet.name} - {pet.species} - {pet.breed} - {pet.characteristic} -{" "}
              {pet.isFavorite ? "Favorite" : "Not Favorite"}
            </li>
          ))}
        </ul>
        <AddNewPets onAddPet={handleAddPet} />
        <FavoritePets pets={esaPets} />
        <UpdatePets onUpdatePet={handleReplaceBreed} />
        <CountPetsBasedOnSpecies pets={esaPets} />
        <IsPalindrome pets={esaPets} />
        <EvenNumbers numbers={[15, 18, 3, 9, 6, 2, 12, 14]} />
        <CheckAnagram />
      </div>
    </>
  );
}

export default App;
