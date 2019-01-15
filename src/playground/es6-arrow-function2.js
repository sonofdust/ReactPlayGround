//arguments object - no longer bound with arrow functions
const add = function(a, b) {
  console.log(arguments);
  return a + b;
};

console.log(add(3, 56));

//this keyword = no longer bound
const user = {
  name: "Nicholas Roman",
  cities: ["Shelton", "Stanfrod", "Orem", "Lehi"],

  //   printCities() {
  //     this.cities.forEach(city => {
  //       console.log(this.name + " has lived in " + city);
  //     });
  //   }

  printCities() {
    return this.cities.map(city => this.name + " has lived in " + city);
  }
  //   printCities: function() {
  //     const that = this;
  //     this.cities.forEach(function(city) {
  //       console.log(that.name + " has lived in " + city);
  //     });
  //   }
};

console.log(user.printCities());

const multiplier = {
  numbers: [1, 2, 3, 4],
  multiply(num) {
    return this.numbers.map(int => int * num);
  }
};

console.log(multiplier.multiply(2));
