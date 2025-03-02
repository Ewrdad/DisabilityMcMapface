import { fetchWeatherApi } from "openmeteo";
import { useState, useEffect } from "react";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import AirIcon from "@mui/icons-material/Air";
import { Tag } from "../../../../../Types";
import { Popover, Typography } from "@mui/material";
import React from "react";

const getWeatherData = async () => {
  const params = {
    latitude: 51.481723,
    longitude: -3.179228,
    hourly: [
      "temperature_2m",
      "precipitation_probability",
      "precipitation",
      "wind_speed_10m",
    ],
    timezone: "GMT",
    forecast_days: 1,
  };
  const url = "https://api.open-meteo.com/v1/forecast";
  const responses = await fetchWeatherApi(url, params);

  // Helper function to form time ranges
  const range = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

  // Process first location. Add a for-loop for multiple locations or weather models
  const response = responses[0];

  // Attributes for timezone and location
  const utcOffsetSeconds = response.utcOffsetSeconds();

  const hourly = response.hourly()!;

  // Note: The order of weather variables in the URL query and the indices below need to match!
  const weatherData = {
    hourly: {
      time: range(
        Number(hourly.time()),
        Number(hourly.timeEnd()),
        hourly.interval()
      ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
      temperature2m: hourly.variables(0)!.valuesArray()!,
      precipitationProbability: hourly.variables(1)!.valuesArray()!,
      precipitation: hourly.variables(2)!.valuesArray()!,
      windSpeed10m: hourly.variables(3)!.valuesArray()!,
    },
  };
  return weatherData;
};
export const Weather = ({ filters }: { filters: Tag[] }) => {
  const [weatherData, setWeatherData] = useState<unknown>(null);
  const [currentWeather, setCurrentWeather] = useState<unknown>(null);

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  useEffect(() => {
    getWeatherData().then((data) => {
      setWeatherData(data);
    });
  }, []);
  useEffect(() => {
    if (weatherData) {
      setCurrentWeather({
        time: weatherData.hourly.time[12],
        temperature2m: weatherData.hourly.temperature2m[12],
        precipitationProbability:
          weatherData.hourly.precipitationProbability[12],
        precipitation: weatherData.hourly.precipitation[12],
        windSpeed10m: weatherData.hourly.windSpeed10m[12],
      });
    }
  }, [weatherData]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  if (!currentWeather) {
    return <div>Loading...</div>;
  }
  const TooWindy = () => {
    if (filters.includes("elevation")) {
      return (
        <>
          <AirIcon
            className="text-red-600 hover:text-red-900"
            onClick={handleClick}
          />
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Typography sx={{ p: 2 }}>
              High Winds can cause previously handled slopes to be more
              difficult
            </Typography>
          </Popover>
        </>
      );
    }

    return null;
  };

  return (
    <div className="inline">
      <p className="inline p-2">
        <ThermostatIcon />
        {Math.round(currentWeather.temperature2m)}°C
      </p>
      <p className="inline p-2">
        <WaterDropIcon />
        {Math.round(currentWeather.precipitationProbability)}%
      </p>
      <p className="inline p-2">
        {TooWindy() ? <TooWindy /> : <AirIcon />}
        {Math.round(currentWeather.windSpeed10m)}km/h
      </p>
    </div>
  );
};
