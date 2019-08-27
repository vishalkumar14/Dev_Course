function lookup(Name, value) {
  var contacts = [
    {
      firstName: "Abhishekh",
      lastName: "Kumar",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"]
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"]
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"]
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"]
    }
  ];

  for (var i = 0; i < contacts.length; ++i) {
    var obj = contacts[i];
    if (obj.firstName === Name) {
      if (obj[value] !== undefined) {
        return obj[value];
      } else {
        return "Property Not Found";
      }
    }
  }

  return "Not Contact Found";
}

console.log(lookup("Abhishekh", "likes"));
