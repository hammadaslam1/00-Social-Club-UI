import { Input } from "@mui/joy";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@mui/material";

const CheckBox = ({sx={}, ...props }) => {
  return (
    <FormControl>
      <FormLabel
        sx={{ color: "#000", fontSize: "14px", marginBottom: "2px" }}
      >
        {props.heading}
      </FormLabel>
      <FormControlLabel
        sx={{ "& .MuiFormControlLabel-label": { fontSize: 14, ...sx }, ...sx }}
        control={<Checkbox size="small" />}
        {...props}
      />
    </FormControl>
  );
};

export default CheckBox;
