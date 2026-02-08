import { countBySpecies } from "../utils/helpers";

export default function CountPetsBasedOnSpecies({ pets }) {
  const countPetsBySpecies = countBySpecies(pets);

  return (
    <div>
      <div className="space-y-2 mb-6 text-stone-300 font-semibold">
        {Object.entries(countPetsBySpecies).map(([species, count]) => (
          <div key={species}>
            {species}: {count}
          </div>
        ))}
      </div>
    </div>
  );
}
