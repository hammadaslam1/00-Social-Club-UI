import { Input } from "@mui/joy";

const LoginInput = ({ ...props }) => {
  return (
    <Input
      variant="plain"
      sx={{ backgroundColor: "#f5f5f5", marginY: "10px" }}
      {...props}
    />
  );
};

export default LoginInput;
