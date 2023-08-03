import { Button } from "@mui/material";

const PrimaryButton = ({ ...props }) => {
  return (
    <Button
      sx={{
        borderRadius: "8px",
        fontWeight: "700",
        backgroundColor: "#fff",
        width: "140px",
        color: "#023d65",
        "&:hover": { backgroundColor: "#f5fadf" },
      }}
      {...props}
    >
      {props.children}
    </Button>
  );
};

export default PrimaryButton;
