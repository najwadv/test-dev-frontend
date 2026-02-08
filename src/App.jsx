import pets from "./data/pets";
import { useState } from "react";
import AddNewPets from "./components/addNewPets";
import FavoritePets from "./components/favoritePets";
import UpdatePets from "./components/updatePets";
import CountPetsBasedOnSpecies from "./components/countPets";
import IsPalindrome from "./components/isPalindrome";
import EvenNumbers from "./components/evenNumbers";
import CheckAnagram from "./components/checkAnagram";
import DataTransform from "./components/dataTransform";
import Button from "./components/Button";
import InstructionCard from "./components/instructionsCard";

function App() {
  const scrollDown = () => {
    const element = document.getElementById("instruction-1");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
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
    <div className="w-full min-h-screen bg-stone-950 text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <section className="py-16 flex lg:flex-row items-center justify-between">
          <div className="lg:w-1/2">
            <h1 className="text-6xl font-extrabold mb-4 leading-tight">
              Technical Test for Frontend Developer
            </h1>
            <p className="text-stone-400 mb-8 text-lg">
              PT. Integrasia Utama | by Najwa Diva Azzahra
            </p>
            <Button
              variant="secondary"
              className="px-10 py-4"
              onClick={scrollDown}
            >
              Get Started
            </Button>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-end">
            <img
              src="/src/assets/hero-section-illust.png"
              alt="Hero Section Illustration"
              className="w-800px h-600px object-contain"
            />
          </div>
        </section>

        <hr className="w-64 h-1 mx-auto py-24 border-stone-700 rounded-sm md:my-10" />

        <div className="flex flex-col lg:flex-row gap-8 mb-12 items-center">
          <div id="instruction-1" className="lg:w-2/3 w-full">
            <h4 className="text-xl font-bold mb-2 text-stone-200">
              Instruction 1: Create an array data.
            </h4>
            <h3 className="text-lg mb-8 text-stone-400">
              Create an array data consists of Esa's pets that includes the
              pet's name, species, breed, and characteristics.
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-stone-700 text-stone-400 uppercase tracking-wider">
                    <th className="py-3 px-4 font-semibold">Name</th>
                    <th className="py-3 px-4 font-semibold">Species</th>
                    <th className="py-3 px-4 font-semibold">Breed</th>
                    <th className="py-3 px-4 font-semibold">Characteristic</th>
                    <th className="py-3 px-4 font-semibold">Favorite</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-900">
                  {esaPets.map((pet, index) => (
                    <tr
                      key={index}
                      className="hover:bg-stone-900/50 transition-colors"
                    >
                      <td className="py-3 px-4 text-stone-300">{pet.name}</td>
                      <td className="py-3 px-4 text-stone-300">
                        {pet.species}
                      </td>
                      <td className="py-3 px-4 text-stone-300">{pet.breed}</td>
                      <td className="py-3 px-4 text-stone-300">
                        {pet.characteristic}
                      </td>
                      <td className="py-3 px-4 text-stone-300">
                        {pet.isFavorite ? "Favorite" : "Not Favorite"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="lg:w-1/3 w-full content-center">
            <InstructionCard
              number="2"
              title="Add new pet Rino the Rhinoceros."
              description="The button below will let the program add a new pet named Rino into the pet array."
            >
              <AddNewPets onAddPet={handleAddPet} className="items-center" />
            </InstructionCard>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 mb-24">
          <div className="lg:w-1/3 w-full content-center">
            <InstructionCard
              number="3"
              title="Sort pets based on favorite."
              description="Show a list of which pets are Esa's favorites. Under the list, you can choose to sort them ascending or descending."
            >
              <FavoritePets pets={esaPets} />
            </InstructionCard>
          </div>
          <div className="lg:w-1/3 w-full space-y-7">
            <InstructionCard
              number="4"
              title="Update Luna's breed."
              description="This button will allow the program to update Luna's breed data."
            >
              <UpdatePets onUpdatePet={handleReplaceBreed} />
            </InstructionCard>
            <InstructionCard
              number="5"
              title="Count the total of each species."
              description="Count and show the total of each pets species."
            >
              <CountPetsBasedOnSpecies pets={esaPets} />
            </InstructionCard>
          </div>
          <div className="lg:w-1/3 w-full space-y-4">
            <InstructionCard
              number="6"
              title="Check Palindrome."
              description="Check which pets are Palindrome and count the string length."
            >
              <IsPalindrome pets={esaPets} />
            </InstructionCard>
          </div>
        </div>

        <hr className="w-64 h-1 mx-auto py-6 border-stone-700 rounded-sm md:my-10" />

        <div className="flex flex-col lg:flex-row gap-2 mb-24">
          <div className="lg:w-1/2 w-full content-center">
            <InstructionCard
              number="7"
              title="Even Numbers."
              description="Check for even numbers in an array to show and calculate the total."
            >
              <EvenNumbers numbers={[15, 18, 3, 9, 6, 2, 12, 14]} />
            </InstructionCard>
          </div>
          <div className="lg:w-1/2 w-full content-center">
            <InstructionCard
              number="8"
              title="Check Anagram."
              description="Check if two given words are anagram or not."
            >
              <CheckAnagram />
            </InstructionCard>
          </div>
        </div>

        <hr className="w-64 h-1 mx-auto py-6 border-stone-700 rounded-sm md:my-10" />

        <h4 className="text-xl font-bold mb-2 text-stone-200">
          Instruction 9: Transform JSON data.
        </h4>
        <h3 className="text-lg mb-8 text-stone-400">
          Transform given JSON data in case.json into JSON data in
          expectation.json.
        </h3>
        <DataTransform />
      </div>
    </div>
  );
}

export default App;
