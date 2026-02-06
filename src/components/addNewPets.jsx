export default function AddNewPets({ onAddPet }) {
  const handleClick = () => {
    const rino = {
      species: "Rhinoceros",
      name: "Rino",
      breed: "Javanese Rhino",
      characteristic: "Hardworker",
      isFavorite: true,
    };
    onAddPet(rino);
    console.log("Berhasil menambahkan Rino");
  };

  return (
    <div>
      <h4>Instruksi 2: Menambahkan Rino</h4>
      <button onClick={handleClick}>Tambahkan Rino</button>
    </div>
  );
}
