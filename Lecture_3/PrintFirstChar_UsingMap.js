var animals = [
  "Hen",
  "Elephant",
  "Leopard",
  "Rabbit",
  "Ostrich",
  "Llama",
  "Whale",
  "Octopus",
  "Lion",
  "Dog"
];

console.log(
  animals.map(function(name) {
    return name.length == 0 ? "" : name[0];
  })
);
