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
        sx={{ color: "#000", fontSize: "16px", fontWeight: '600', marginBottom: "2px" }}
      >
        {props.heading}
      </FormLabel>
      <FormControlLabel
        sx={{ "& .MuiFormControlLabel-label": { fontSize: 14, ...sx }, ...sx }}
        control={<Checkbox size={props.size?props.size:"small"} sx={{ color: "#023d65" }} />}
        {...props}
      />
    </FormControl>
  );
};

export default CheckBox;
