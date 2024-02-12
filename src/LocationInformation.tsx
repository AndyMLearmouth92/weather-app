import { Box } from '@mui/material';
import { Search } from './Search';

interface LocationInformationProps {
  setInput: React.Dispatch<React.SetStateAction<String | undefined>>;
  input: React.SetStateAction<String | undefined>;
}

export const LocationInformation: React.FC<LocationInformationProps> = ({
  setInput,
  input,
}) => {
  return (
    <div>
      <Search setInput={setInput} input={input} />
      <Box />
    </div>
  );
};
