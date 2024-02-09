import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { type WeatherData } from './ApiInterface';
export const WeatherGrid = ({ location, current, forecast }: WeatherData) => {
  console.log(location, current, forecast);

  let astroData = forecast.forecastday[0].astro;

  const rows: GridRowsProp = [
    { id: 1, col1: 'Temp', col2: `${current.temp_c}°C` },
    { id: 2, col1: 'Temp feels like', col2: `${current.feelslike_c}°C` },
    {
      id: 3,
      col1: 'Condition',
      col2: current.condition.text,
    },
    {
      id: 4,
      col1: 'Precipitation',
      col2: `${current.precip_mm} mm`,
      //Andy to look at why this is not accurate
    },
    { id: 5, col1: 'Wind speed', col2: `${current.wind_mph} mph` },
    { id: 6, col1: 'Wind direction', col2: current.wind_dir },
    { id: 7, col1: 'Gust', col2: `${current.gust_mph} mph` },
    {
      id: 8,
      col1: 'Humidity',
      col2: current.humidity,
    },
    {
      id: 9,
      col1: 'Visibility',
      col2: `${current.vis_miles} miles `,
    },
    {
      id: 10,
      col1: 'UV',
      col2: current.uv,
    },
    { id: 11, col1: 'Sunset', col2: astroData.sunset },
    { id: 12, col1: 'Moon phase', col2: astroData.moon_phase },
  ];

  const columns: GridColDef[] = [
    { field: 'col1', headerName: 'Information', width: 150 },
    { field: 'col2', headerName: 'Current', width: 150 },
    { field: 'col3', headerName: 'Column 2' },
    { field: 'col4', headerName: 'Column 3' },
  ];

  return (
    <div>
      <h1>The Weather in {location.name} is:</h1>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};
