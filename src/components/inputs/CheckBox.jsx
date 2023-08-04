import { Input } from "@mui/joy";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@mui/material";

const CheckBox = ({ ...props }) => {
  return (
    <FormControl>
      <FormLabel
        sx={{ color: "#000", fontSize: "14px", marginBottom: "2px" }}
        required
      >
        {props.heading}
      </FormLabel>
      <FormControlLabel
        sx={{ "& .MuiFormControlLabel-label": { fontSize: 14 } }}
        control={<Checkbox size="small" />}
        {...props}
      />
    </FormControl>
  );
};

export default CheckBox;
