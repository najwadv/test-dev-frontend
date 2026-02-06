import pets from "./data/pets";
import { useState } from "react";
import AddNewPets from "./components/addNewPets";
import FavoritePets from "./components/favoritePets";

function App() {
  const [esaPets, setEsaPets] = useState(pets);

  const handleAddPet = (newPet) => {
    setEsaPets([...esaPets, newPet]);
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
      </div>
    </>
  );
}

export default App;
