const animals = [
    { id: 1, name: "Peter Panda", species: "Panda", dietTypeId: 1 },
    { id: 2, name: "GG", species: "Giraffe", dietTypeId: 2 },
    { id: 3, name: "Harold Horse", species: "Horse", dietTypeId: 3 },
    { id: 4, name: "Tony T. Tiger", species: "Siberian Tiger", dietTypeId: 4 },
    { id: 5, name: "Zany", species: "Zebra", dietTypeId: 5 },
    { id: 6, name: "Harambe", species: "Silverback Gorilla", dietTypeId: 6 }
  ];
  
  const foods = [
    { id: 1, dietType: "Herbivore", food: "Bamboo Shoots" },
    { id: 2, dietType: "Herbivore", food: "Leaves" },
    { id: 3, dietType: "Carnivore", food: "Raw Penguin Meat" },
    { id: 4, dietType: "Carnivore", food: "Chicken" },
    { id: 5, dietType: "Herbivore", food: "Grass" },
    { id: 6, dietType: "Herbivore", food: "Fruits" }
  ];
  
  export const getAnimals = () => {
    return animals.map((animal) => ({ ...animal }));
  };
  export const getFoods = () => {
    return foods.map((food) => ({ ...food }));
  };
  