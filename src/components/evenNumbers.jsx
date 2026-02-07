import { calcEvenNumbers } from "../utils/helpers";

export default function EvenNumbers({ numbers }) {
  const { total, evenNumbers } = calcEvenNumbers(numbers);

  return (
    <div>
      <h4>Instruksi 7: Menjumlah dan menampilkan bilangan genap </h4>
      <p>Array awal: {numbers.join(", ")}</p>
      <p>Bilangan genap: {evenNumbers.join(", ")}</p>
      <p>Jumlah bilangan genap: {total}</p>
    </div>
  );
}
