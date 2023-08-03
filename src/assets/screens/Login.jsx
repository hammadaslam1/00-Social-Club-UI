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
  p: 2,
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
                style={{ zIndex: "-1", position: "absolute", height: '250px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
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
                sx={{ backgroundColor: "#f5f5f5", marginY: "10px" }}
                placeholder="enter your password"
              />
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-around",
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
              <Button sx={{borderRadius: '8px', backgroundColor: '#023d65', width: '240px', alignSelf: 'center', color: '#fff', fontWeight: '700'}} size={"large"}>Login</Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Login;
