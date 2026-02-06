export default function UpdatePets({ onUpdatePet }) {
  console.log("Berhasil mengubah ras Luna");
  return (
    <div>
      <h4>Instruksi 4: Memperbarui data hewan peliharaan Esa</h4>
      <button onClick={onUpdatePet}>Perbarui data Luna</button>
    </div>
  );
}
