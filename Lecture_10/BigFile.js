const fs = require("fs");

const writer = fs.createWriteStream("big.txt");

for (let i = 0; i < 10000; i++) {
  writer.write(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit Corrupti eaque sunt possimus ut, quasi voluptas culpa non similique quisquam porro odio cupiditate id, mollitia ullam nam aliquid aut aperiam! Exercitationem.Lorem ipsum dolor sit amet consectetur adipisicing elit Corrupti eaque sunt possimus ut, quasi voluptas culpa non similique quisquam porro odio cupiditate id, mollitia ullam nam aliquid aut aperiam! Exercitationem."
  );
}
