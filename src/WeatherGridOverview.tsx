import Box from "@mui/material/Box";
import { DataGrid, type GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { type Current, Forecast, Location } from "./ApiInterface";

interface WeatherGridDayOneProps {
  location: Location;
  forecast: Forecast;
  current: Current;
}

export const WeatherGridOverview: React.FC<WeatherGridDayOneProps> = ({
  location,
  forecast,
}) => {
  // let weatherD1 = forecast?.forecastday[0];
  // let weatherD2 = forecast?.forecastday[1];
  // let weatherD3 = forecast?.forecastday[2];

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
    width: header === "Condition" ? 150 : 115,
    headerClassName: "header",
    headerAlign: "center",
    align: "center",
  }));

  console.log(gridColDefs);

  return (
    <div>
      <h1>The Weather in {location?.name} is:</h1>
      <Box
        sx={{
          "& .header": {
            backgroundColor: "rgba(255, 7, 0, 0.55)",
          },
        }}
      >
        <DataGrid rows={rowsData} columns={gridColDefs} hideFooter />
      </Box>
    </div>
  );
};
