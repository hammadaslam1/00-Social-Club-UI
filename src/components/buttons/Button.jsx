import { Button } from "@mui/material";

const Buttons = ({...props}) => {
  
  
  return (
      <Button sx={props.sx} size={props.size} onClick={props.onClick}>
      {props.children}
    </Button>
    
  );
};

export default Buttons;
