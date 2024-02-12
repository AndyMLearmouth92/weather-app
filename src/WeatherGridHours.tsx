import Box from '@mui/material/Box';
import { DataGrid, type GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { Current, Forecast, Location } from './ApiInterface';

interface WeatherGridHoursProps {
  location: Location;
  forecast: Forecast;
}

export const WeatherGridHours: React.FC<WeatherGridHoursProps> = ({
  location,
  forecast,
}) => {
  const rowsData = forecast.forecastday[0].hour.map((hour, index) => ({
    id: index + 1,
    col1: hour.time.split(' ')[1],
    col2: hour.condition.text,
    col3: hour.temp_c,
    col4: hour.feelslike_c,
    col5: hour.windchill_c,
    col6: hour.wind_mph,
    col7: hour.precip_mm,
    col8: hour.chance_of_rain,
    col9: hour.vis_miles,
    col10: hour.humidity,
    col11: hour.uv,
  }));

  const columns = [
    'Time',
    'Condition',
    'Temperature',
    'Feels like',
    'Windchill',
    'Wind',
    'Rain',
    'Chance of rain',
    'Visibility',
    'Humidity',
    'UV',
  ];

  const gridColDefs: GridColDef[] = columns.map((header, index) => ({
    field: `col${index + 1}`,
    headerName: header,
    width: header === 'Condition' ? 150 : 100,
    headerClassName: 'header',
    headerAlign: 'center',
    align: 'center',
  }));

  return (
    <div>
      <h1>
        The Weather in {location.name} on {forecast.forecastday[0].date} is:
      </h1>
      <Box
        sx={{
          '& .header': {
            backgroundColor: 'rgba(255, 7, 0, 0.55)',
          },
        }}
      >
        <DataGrid rows={rowsData} columns={gridColDefs} />
      </Box>
    </div>
  );
};
