const chalk = require("chalk");
const figlet = require("figlet");
const http = require("https");
const fs = require("fs");
const readline = require("readline");

console.log(chalk.yellow(figlet.textSync("Mausam Smachar")));

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Weather Information -> "
});

const option = {
  hostname: "www.metaweather.com",
  post: 443,
  path: "",
  method: "GET"
};

reader.prompt();

reader.on("line", function(data) {
  console.log(chalk.green(data + " Weather Data"));
  option.path = "/api/location/search/?query=" + data;

  const request = http.get(option, function(res) {
    let WeatherData = "";

    res.on("data", function(chunk) {
      WeatherData += chunk;
    });

    res.on("end", function() {
      const JSONWeatherData = JSON.parse(WeatherData);
      let woeid = JSONWeatherData[0].woeid;
      option.path = "/api/location/" + woeid + "/";
      const CityReq = http.get(option, function(res) {
        let CityData = "";

        res.on("data", function(chunk) {
          CityData += chunk;
        });

        res.on("end", function() {
          const JSONCityData = JSON.parse(CityData).consolidated_weather[0];
          console.log();
          console.log(
            data + " Weather : " + chalk.cyan(JSONCityData.weather_state_name)
          );
          console.log(
            data + " Today Temperature is " + chalk.cyan(JSONCityData.the_temp)
          );
          console.log(
            data + " Min Temperature is " + chalk.cyan(JSONCityData.min_temp)
          );
          console.log(
            data + " Max Temperature is " + chalk.cyan(JSONCityData.max_temp)
          );
          console.log(
            data + " Win Sped is : " + chalk.cyan(JSONCityData.wind_speed)
          );
          console.log(
            data + " Humidity is : " + chalk.cyan(JSONCityData.humidity)
          );
          console.log();
        });
      });

      CityReq.end();
    });
  });

  request.end();

  reader.prompt();
});

reader.on("close", function(data) {
  console.log();
  console.log("Thank You Using For Using Prompt");
});
