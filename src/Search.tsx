import { TextField } from '@mui/material';

interface SearchProps {
  setInput: React.Dispatch<React.SetStateAction<String | undefined>>;
  input: React.SetStateAction<String | undefined>;
}

export const Search: React.FC<SearchProps> = ({ setInput, input }) => {
  return (
    <div>
      <h2>Search a location for the weather:</h2>
      <TextField
        id="outlined-controlled"
        label="Location..."
        value={input}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setInput(event.target.value);
        }}
      />
    </div>
  );
};
