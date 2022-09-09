// import { getAnimals, getFoods } from "./database.js";

/*
    Goal - Zanzibar Zoo
    ======================
    * Zoo animal health checkup process
    * Array of animals with `dietTypeId` property on each one
    * Array of foods { id: 1, dietType: "Carnivore/Herbivore", food: "Chicken/Carrots" }
    * Each function will copy the object and return the copy {...original}
    * Steps:
        1. There are 6 holding areas. Function 1 assigns animal to one of
            them and adds a `holdingArea` property. Parameters are animal
            object and holding area number. Math.random() * 6
        2. Function to weigh animal. 2 parameters (object, number) and adds
            a `weight` property. Checks if animal in a holding area first.
        3. Function to feed the animal, which checks if the animal was
            weighed first, and if so, sets `fed` to `true`. Also adds `food`
            with appropriate food from food array.
        4. Function to check temperature. Animal must be in holding area,
            weighed, and have been fed. `if ("prop" in object)`
        5. Function to take stool sample. Carnivore animals should have
            stinky stool, herbivores have unstinky stool. This function
            checks which food the animal ate, then adds appropriate value
            to new `stoolSmell` property.
*/
/*
//Algorithm:
1. create a fn that adds a holding area property to the original objects you pass in based on a random number
2. create second fn to add weighAnimal property if there's a holdingArea property present in the result from the first fn
3. create a third fn to add a fed property set to true & the food property from the aray sent in and the animal input has been weighed
4. 4th fn (might be an if in a loop) if thers a value for  holding area, fed, and weighed, check the animal's temp
5. 5th function to establish stoolSmell. add if..else statement to determine stool property value
*/

const zooAnimals = [
  { id: 1, name: "Peter Panda", species: "Panda", dietTypeId: 1 },
  { id: 2, name: "GG", species: "Giraffe", dietTypeId: 2 },
  { id: 3, name: "Harold Horse", species: "Horse", dietTypeId: 3 },
  { id: 4, name: "Tony T. Tiger", species: "Siberian Tiger", dietTypeId: 4 },
  { id: 5, name: "Zany", species: "Zebra", dietTypeId: 5 },
  { id: 6, name: "Harambe", species: "Silverback Gorilla", dietTypeId: 6 },
];
const zooFoods = [
  { id: 1, dietType: "Herbivore", food: "Bamboo Shoots" },
  { id: 2, dietType: "Herbivore", food: "Leaves" },
  { id: 3, dietType: "Carnivore", food: "Raw Penguin Meat" },
  { id: 4, dietType: "Carnivore", food: "Chicken" },
  { id: 5, dietType: "Herbivore", food: "Grass" },
  { id: 6, dietType: "Herbivore", food: "Fruits" },
];

const addHoldingArea = (animalObject, holdingAreaNumber) => {
  animalObject.holdingArea = holdingAreaNumber;
};

const weighAnimal = (animalObject, weight) => {
  if (animalObject.holdingArea) {
    animalObject.weight = weight;
  }
};

const fedAnimal = (animalObject) => {
  if (animalObject.weight) {
    const foundFood = zooFoods.find(
      (food) => food.id === animalObject.dietTypeId
    );

    animalObject.food = foundFood.food;
    animalObject.fed = true;
  }

  //     for (const food of zooFoods) {
  //       if (animalObject.dietTypeId === food.id) {
  //         animalObject.food = food.food;
  //         animalObject.fed = true;
  //       }
  //     }
  //   }
};

const tempCheck = (animalObject) => {
  if (animalObject.weight && animalObject.holdingArea && animalObject.fed) {
    animalObject.tempCheck = true;
  }
};

// -------- Stink-gorithm ---------
// pass animal object argument to function
// iterate foods array
// check if animalObject.dietTypeId === foodObject.id
// check if foodObject.dietType === Herbivore/Carnivore
// if true, set properties

const stoolSmell = (animalObject) => {
  for (const food of zooFoods) {
    if (animalObject.dietTypeId === food.id) {
      if (food.dietType === "Herbivore") {
        animalObject.stoolSmell = "unstinky";
      } else {
        animalObject.stoolSmell = "stinky";
      }
    }
  }
};

// if (42 === 42 && "Nick Adams is cool" === "Nick Adams is cool") {
//   console.log("sup")
// }

for (const animal of zooAnimals) {
  const randomNumber = Math.floor(Math.random() * 6);
  const randomWeight = Math.floor(Math.random() * 1000);
  addHoldingArea(animal, randomNumber);
  weighAnimal(animal, randomWeight);
  fedAnimal(animal);
  tempCheck(animal);
  stoolSmell(animal);

  console.log(animal);
}
