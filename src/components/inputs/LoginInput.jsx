import { Input } from "@mui/joy";

const LoginInput = ({sx={}, ...props }) => {
  return (
    <Input
      variant="plain"
      sx={{ backgroundColor: "#f8f8f8", marginY: "10px", borderRadius: '8px', ...sx }}
      {...props}
    />
  );
};

export default LoginInput;
