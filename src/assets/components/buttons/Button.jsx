import { Button } from "@mui/material";
import Login from "../../screens/Login";
import { useState } from "react";

const Buttons = ({...props}) => {
  
  
  return (
      <Button sx={props.sx} size={props.size} onClick={props.function}>
      {props.children}
    </Button>
    
  );
};

export default Buttons;
