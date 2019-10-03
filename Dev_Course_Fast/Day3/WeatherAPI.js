const chalk = require("chalk");
const http = require("http");
const fs = require("fs");
const ora = require("ora");
const axios = require("axios");
const minimist = require("minimist");

if (process.argv.length == 1) {
  console.log("weather [command] <options>");
  console.log("today .............. show weather for today");
  console.log("forecast .............. show 5-day weather forecast");
} else {
  const spinner = ora(`${chalk.green("Weather Data is Loading")}`).start();

  const argv = minimist(process.argv);

  if (argv.location === undefined) {
    const opt = argv["_"][0];
    const City = IPGet();

    const path =
      "https://www.metaweather.com/api/location/search/?query=" + City;
    const woeid = CityID(path);

    const WoeidPath = "https://www.metaweather.com/api/location/" + woeid;
    const WeatherData = WeatherDataFun(WoeidPath).consolidated_weather;

    
    if (opt === "today") {
      const TodayWeather = WeatherData[0];
      console.log(
        City +
          " Today Weather is: " +
          TodayWeather.weather_state_name +
          ", " +
          TodayWeather.the_temp
      );
    } 
    else if (opt === "forecast") {
      for (let i = 0; i < WeatherData.length; ++i) {
        const Data = WeatherData[i];
        console.log(
          Data.applicable_date +
            " - Low: " +
            Data.min_temp +
            " | High: " +
            Data.max_temp +
            " | " +
            Data.weather_state_name
        );
      }
    }
  }
}

async function IPGet() {
  const res = await axios.get("https://ip-api.com/json/");
  return res.data.city;
}

async function CityID(path) {
  const res = await axios.get(path);
  return res.data.woeid;
}
async function WeatherDataFun(path) {
  const res = await axios.get(path);
  return res.data;
}
