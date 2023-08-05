import { FormControl, FormHelperText, TextField } from "@mui/material";

const CreateInput = ({sx={}, ...props }) => {
  return (
    <FormControl sx={{ marginY: "4px", ...sx }}>
      <TextField size="small" {...props} />
    </FormControl>
  );
};

export default CreateInput;
