import Button from "./Button";

export default function UpdatePets({ onUpdatePet }) {
  console.log("Berhasil mengubah ras Luna");
  return (
    <div>
      <div className="flex justify-center w-full">
        <Button onClick={onUpdatePet} variant="primary" className="px-10 py-3">
          Change Breed
        </Button>
      </div>
    </div>
  );
}
