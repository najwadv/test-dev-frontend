import Button from "./Button";

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
      <div className="flex justify-center w-full">
        <Button onClick={handleClick} variant="primary" className="px-10 py-3">
          Add Rino
        </Button>
      </div>
    </div>
  );
}
