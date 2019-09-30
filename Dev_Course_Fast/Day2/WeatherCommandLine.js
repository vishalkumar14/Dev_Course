const chalk = require("chalk");
const figlet = require("figlet");
const http = require("https");
const http2 = require("http");
const fs = require("fs");
const readline = require("readline");
const ora = require("ora");

console.log(chalk.yellow(figlet.textSync("Mausam Smachar")));

const IP_Opt = {
  hostname: "ip-api.com",
  post: 443,
  path: "/json/",
  method: "GET"
};

const option = {
  hostname: "www.metaweather.com",
  post: 443,
  path: "",
  method: "GET"
};

const request = http2.get(IP_Opt, function(res) {
  let WeatherData = "";

  res.on("data", function(chunk) {
    WeatherData += chunk;
  });

  res.on("end", function() {
    const JSONWeatherData = JSON.parse(WeatherData);

    // console.log(JSONWeatherData);

    let lat = JSONWeatherData.lat;
    let long = JSONWeatherData.lon;
    let data = JSONWeatherData.city;

    // console.log(chalk.green(data + " Weather Data"));

    option.path = "/api/location/search/?lattlong=" + lat + "," + long;

    const CityReq = http.get(option, function(res) {
      let CityData = "";
      // const spinner = ora("Weather Data is Loading").start();
      const spinner = ora(
        `${chalk.green(data + " Weather Data is Loading")}`
      ).start();

      res.on("data", function(chunk) {
        CityData += chunk;
      });

      res.on("end", function() {
        const JSONCityData = JSON.parse(CityData);

        let id = JSONCityData[0].woeid;

        option.path = "/api/location/" + id + "/";

        const City = http.get(option, function(res) {
          let CityWeatherData = "";

          res.on("data", function(chunk) {
            CityWeatherData += chunk;
          });

          res.on("end", function() {
            const CityWD = JSON.parse(CityWeatherData);
            const JSONCityData = CityWD.consolidated_weather[0];

            // console.log(JSONCityData);
            spinner.stop();
            // console.log(
            //   data + " Weather : " + chalk.cyan(JSONCityData.weather_state_name)
            // );
            console.log(
              data +
                " Today Temperature is " +
                chalk.cyan(JSONCityData.the_temp)
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

            const throbber = ora({
              text:
                data +
                " Weather : " +
                chalk.cyan(JSONCityData.weather_state_name),
              spinner: {
                interval: 100,
                frames: [
                  "☀️ ",
                  "☀️ ",
                  "🌤 ",
                  "⛅️ ",
                  "🌥 ",
                  "☁️ ",
                  "🌧 ",
                  "🌨 ",
                  "🌧 ",
                  "🌨 ",
                  "🌧 ",
                  "🌨 ",
                  "⛈ ",
                  "🌨 ",
                  "🌧 ",
                  "🌨 ",
                  "☁️ ",
                  "🌥 ",
                  "⛅️ ",
                  "🌤 "
                ]
              }
            }).start();

            setTimeout(function() {
              throbber.stopAndPersist({
                symbol: "🌍 ",
                text:
                  data +
                  " Weather : " +
                  chalk.cyan(JSONCityData.weather_state_name)
              });
              console.log();
            }, 3000);
          });
        });

        City.end();
      });
    });

    CityReq.end();
  });
});

request.end();


