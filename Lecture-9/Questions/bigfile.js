var fs = require("fs");
var writer = fs.createWriteStream("big.txt");
for (var i = 0; i < 1000000; i++) {
  writer.write(
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut temporibus at voluptas. Maxime neque libero labore reprehenderit, aperiam ipsam porro esse a vel corporis alias odio fugit cum quaerat rerum laboriosam! Quibusdam iure doloribus quos est officiis? Harum neque molestiae ratione ut possimus deserunt eaque autem quae modi minus. Ab explicabo culpa nos"
  ); 
}
//console.log(process.memoryUsage().external/1024 +"KB");

