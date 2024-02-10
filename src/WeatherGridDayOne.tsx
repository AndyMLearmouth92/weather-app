import Box from "@mui/material/Box";
import { DataGrid, type GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { Current, Forecast, Location } from "./ApiInterface";

interface WeatherGridDayOneProps {
  location: Location;
  current: Current;
  forecast: Forecast;
}

export const WeatherGridDayOne: React.FC<WeatherGridDayOneProps> = ({
  location,
  current,
  forecast,
}) => {
  console.log(location, current, forecast);

  let weatherD1 = forecast.forecastday[0];
  let weatherD2 = forecast.forecastday[1];
  let weatherD3 = forecast.forecastday[2];

  const rowsData = forecast.forecastday.map((day, index) => ({
    id: index + 1,
    col1: day.date.split("-").reverse().join("-"),
    col2: day.day.condition.text,
    col3: day.day.mintemp_c,
    col4: day.day.avgtemp_c,
    col5: day.day.maxtemp_c,
    col6: day.day.maxwind_mph,
    col7: day.day.totalprecip_mm,
    col8: day.day.daily_chance_of_rain,
    col9: day.day.avgvis_miles,
    col10: day.day.uv,
  }));

  const rows: GridRowsProp = [
    { id: 1, col1: weatherD1.date, col2: `${current.temp_c}°C` },
    {
      id: 2,
      col1: weatherD2.date,
      col2: `${current.feelslike_c}°C`,
    },
    {
      id: 3,
      col1: weatherD3.date,
      col2: current.condition.text,
    },
    // {
    //   id: 4,
    //   col1: "Precipitation",
    //   col2: `${current.precip_mm} mm`,
    //   //Andy to look at why this is not accurate
    // },
    // { id: 5, col1: "Wind speed", col2: `${current.wind_mph} mph` },
    // { id: 6, col1: "Wind direction", col2: current.wind_dir },
    // { id: 7, col1: "Gust", col2: `${current.gust_mph} mph` },
    // {
    //   id: 8,
    //   col1: "Humidity",
    //   col2: current.humidity,
    // },
    // {
    //   id: 9,
    //   col1: "Visibility",
    //   col2: `${current.vis_miles} miles `,
    // },
    // {
    //   id: 10,
    //   col1: "UV",
    //   col2: current.uv,
    // },
    // { id: 11, col1: "Sunset", col2: astroData.sunset },
    // { id: 12, col1: "Moon phase", col2: astroData.moon_phase },
  ];

  const columns = [
    "Date",
    "Condition",
    "Min Temp",
    "Average Temp",
    "Max Temp",
    "Max Wind",
    "Rain",
    "Chance of rain",
    "Visibility",
    "UV",
  ];

  const gridColDefs: GridColDef[] = columns.map((header, index) => ({
    field: `col${index + 1}`,
    headerName: header,
    width: header === "Condition" ? 150 : 125,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    align: "center",
  }));

  console.log(gridColDefs);

  return (
    <div>
      <h1>The Weather in {location.name} is:</h1>
      <Box
        sx={{
          "& .super-app-theme--header": {
            backgroundColor: "rgba(255, 7, 0, 0.55)",
          },
        }}
      >
        <DataGrid rows={rowsData} columns={gridColDefs} />
      </Box>
    </div>
  );
};
