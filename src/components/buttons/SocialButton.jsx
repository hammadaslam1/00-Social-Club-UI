import { Button } from "@mui/material";

const SocialButton = ({sx={}, ...props }) => {
  return (
    <Button
      sx={{
        ...sx,
        borderRadius: "8px",
        fontWeight: "700",
        backgroundColor: "#fff",
        color: "#000",
        boxShadow: '1px 3px 5px 2px #00000029',
        marginY: '10px',
        fontSize: '14px',
        "&:hover": { backgroundColor: "#f5fadf" },
      }}
      {...props}
    >
      {props.children}
    </Button>
  );
};

export default SocialButton;
