import { FormControl, FormHelperText, TextField } from "@mui/material";

const CreateInput = ({ ...props }) => {
  return (
    <FormControl sx={{ marginY: "4px" }}>
      <TextField size="small" {...props} />
    </FormControl>
  );
};

export default CreateInput;
