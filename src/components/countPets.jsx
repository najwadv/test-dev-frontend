export default function CountPetsBasedOnSpecies({ pets }) {
  const countBySpecies = pets.reduce((acc, pet) => {
    const species = pet.species;

    if (!acc[species]) {
      acc[species] = 1;
    } else {
      acc[species] += 1;
    }

    return acc;
  }, {});

  return (
    <div>
      <h4>Instruksi 5: Menghitung hewan peliharaan Esa berdasarkan spesies</h4>
      <ul>
        {Object.entries(countBySpecies).map(([species, count]) => (
          <li key={species}>
            {species}: {count}
          </li>
        ))}
      </ul>
    </div>
  );
}
