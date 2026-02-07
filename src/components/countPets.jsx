import { countBySpecies } from "../utils/helpers";

export default function CountPetsBasedOnSpecies({ pets }) {
  const countPetsBySpecies = countBySpecies(pets);

  return (
    <div>
      <h4>Instruksi 5: Menghitung hewan peliharaan Esa berdasarkan spesies</h4>
      <ul>
        {Object.entries(countPetsBySpecies).map(([species, count]) => (
          <li key={species}>
            {species}: {count}
          </li>
        ))}
      </ul>
    </div>
  );
}
