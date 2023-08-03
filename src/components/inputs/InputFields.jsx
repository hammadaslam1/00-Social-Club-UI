import { Input, TextField } from "@mui/material";

const InputField = ({ ...props }) => {
  return <TextField size="small" startDecorator={props.startDecorator} type={props.type} sx={props.sx} />;
};

export default InputField;
