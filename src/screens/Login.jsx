import { Mail } from "@mui/icons-material";
import LockIcon from "@mui/icons-material/Lock";
import CloseIcon from "@mui/icons-material/Close";
import { Input } from "@mui/joy";
import scBack01 from "../background image/scBack01.png";
import {
  Backdrop,
  Box,
  Button,
  Checkbox,
  Fade,
  FormControlLabel,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useSpring, animated } from "@react-spring/web";
import PropTypes from "prop-types";

import { cloneElement, forwardRef, useState } from "react";
import { Link } from "react-router-dom";

const Fader = forwardRef(function Fade(props, ref) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {cloneElement(children, { onClick })}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool,
  onClick: PropTypes.any,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  ownerState: PropTypes.any,
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "#fff",
  borderRadius: "20px",
  boxShadow: 24,
  p: 3,
  px: 6,
  textAlign: "right",
};

const Login = ({ open, setOpen }) => {
    const styles = {
        borderRadius: "8px",
        backgroundColor: "#023d65",
        width: "140px",
        fontWeight: "700",
        color: "#fff",
        "&:hover": {
          backgroundColor: "#f5f5f5",
        },
      };
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        aria-labelledby="login-page"
        aria-describedby="login-page"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <IconButton sx={{ width: "fit-content" }} onClick={handleClose}>
              <CloseIcon sx={{ textAlign: "right" }} />
            </IconButton>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img
                src={scBack01}
                style={{ zIndex: "-1", position: "absolute", height: '350px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "700",
                  textAlign: "center",
                  fontFamily: "Helvetica",
                  marginBottom: "10px",
                }}
              >
                Login
              </Typography>
              <Input
                variant="plain"
                type="email"
                startDecorator={<Mail sx={{ color: "#023d65" }} />}
                sx={{ backgroundColor: "#f5f5f5", marginY: "10px" }}
                placeholder="example@email.com"
              />
              <Input
                variant="plain"
                type="password"
                startDecorator={<LockIcon sx={{ color: "#023d65" }} />}
                sx={{ backgroundColor: "#f5f5f5", marginTop: "10px" }}
                placeholder="enter your password"
              />
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Keep me signed in"
                />
                <a
                  href="/"
                  style={{ color: "#1492E6", textDecoration: "none" }}
                >
                  Forget Password
                </a>
              </div>
              <Button sx={{borderRadius: '8px', backgroundColor: '#023d65', width: '240px', alignSelf: 'center', color: '#fff', fontWeight: '700', marginTop: '10px'}} size={"large"} children={'Login'}/>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px'}}>
                    <div style={{borderBottom: '1px solid #707070', width: '200px', height: '0px'}}></div>
                    <div>or</div>
                    <div style={{borderBottom: '1px solid #707070', width: '200px', height: '0px'}}></div>
              </div>
              <Button sx={{borderRadius: '8px', backgroundColor: '#fff', color: '#000', fontWeight: '600', boxShadow: '1px 3px 5px 2px #00000029', marginY: '10px', fontSize: '14px'}} size={"large"} children={'Sign Up using Google'} />
              <Button sx={{borderRadius: '8px', backgroundColor: '#fff', color: '#000', fontWeight: '600', boxShadow: '1px 3px 5px 2px #00000029', marginY: '10px', fontSize: '14px'}} size={"large"} children={'Sign Up using Facebook'} />
              <Button sx={{borderRadius: '8px', backgroundColor: '#fff', color: '#000', fontWeight: '600', boxShadow: '1px 3px 5px 2px #00000029', marginY: '10px', fontSize: '14px'}} size={"large"} children={'Sign Up using Apple'} />
              <Typography>Not a member yet? <Link to=''>Sign up</Link></Typography>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Login;
