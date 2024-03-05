import { Box } from "@mui/material";
import { Search } from "./Search";

interface LocationInformationProps {
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

export const LocationInformation: React.FC<LocationInformationProps> = ({
  setLocation,
}) => {
  return (
    <div>
      <Search setLocation={setLocation} />
      <Box />
    </div>
  );
};
