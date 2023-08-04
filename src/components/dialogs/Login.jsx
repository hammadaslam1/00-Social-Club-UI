import { Mail } from "@mui/icons-material";
import LockIcon from "@mui/icons-material/Lock";
import CloseIcon from "@mui/icons-material/Close";
import { Input } from "@mui/joy";
import GOOGLE_IMAGE from "../../assets/icons/google32.png";
import FACEBOOK_IMAGE from "../../assets/icons/facebook32.png";
import APPLE_IMAGE from "../../assets/icons/apple32.png";
import {
  Backdrop,
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fade,
  FormControlLabel,
  IconButton,
  Modal,
  Slide,
  Typography,
} from "@mui/material";
import { forwardRef, useState } from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../buttons/PrimaryButton";
import SocialButton from "../buttons/SocialButton";
import { useSelector, useDispatch } from "react-redux";
import { ADD_USER } from "../../redux/Types/Types";
import "./dialog.css";
import LoginInput from "../inputs/LoginInput";
import Signup from "./Signup";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Login = ({ openLogin, setOpenLogin, openSignup, setOpenSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.UserReducer.user);
  const dispatch = useDispatch();
  const handleSignin = () => {
    console.log(user);
    if (email && password) {
      dispatch({
        type: ADD_USER,
        payload: true,
      });
      handleClose();
      console.log(user);
    }
  };
  // const styles = {
  //   borderRadius: "8px",
  //   backgroundColor: "#023d65",
  //   width: "140px",
  //   fontWeight: "700",
  //   color: "#fff",
  //   "&:hover": {
  //     backgroundColor: "#f5f5f5",
  //   },
  // };
  const handleClose = () => setOpenLogin(false);

  {
    /* <Modal
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
        <IconButton
          sx={{
            width: "fit-content",
            position: "absolute",
            top: "0",
            right: "0",
          }}
          onClick={handleClose}
        >
          <CloseIcon sx={{ textAlign: "right" }} />
        </IconButton>
        <div className="bg-image">
          <Typography
            variant="h5"
            sx={{
              fontWeight: "700",
              textAlign: "center",
              fontFamily: "Helvetica",
              marginBottom: "20px",
            }}
          >
            Login
          </Typography>
          <Input
            variant="plain"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            startDecorator={<Mail sx={{ color: "#023d65" }} />}
            
            placeholder="example@email.com"
          />
          <Input
            variant="plain"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            startDecorator={<LockIcon sx={{ color: "#023d65" }} />}
            sx={{ backgroundColor: "#f5f5f5", marginTop: "10px" }}
            placeholder="Password"
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
              sx={{ "& .MuiFormControlLabel-label": { fontSize: 14 } }}
              control={<Checkbox size="small" defaultChecked />}
              label="Keep me signed in"
            />
            <a
              href="/"
              style={{ color: "#1492E6", textDecoration: "none" }}
            >
              Forget Password
            </a>
          </div>
          <PrimaryButton
            sx={{
              marginTop: "10px",
              color: "red",
            }}
            size={"large"}
            onClick={handleSignin}
          >
            Login
          </PrimaryButton>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "15px",
            }}
          >
            <div
              style={{
                borderBottom: "1px solid #707070",
                width: "170px",
                height: "0px",
              }}
            ></div>
            <div>or</div>
            <div
              style={{
                borderBottom: "1px solid #707070",
                width: "170px",
                height: "0px",
              }}
            ></div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <SocialButton size={"large"}>
              <img
                src={GOOGLE_IMAGE}
                width="20px"
                style={{ marginRight: "10px" }}
              />{" "}
              Sign Up using Google
            </SocialButton>
            <SocialButton size={"large"}>
              <img
                src={FACEBOOK_IMAGE}
                width="20px"
                style={{ marginRight: "10px" }}
              />{" "}
              Log In using Facebook
            </SocialButton>
            <SocialButton>
              <img
                src={APPLE_IMAGE}
                width="20px"
                style={{ marginRight: "10px" }}
              />{" "}
              Log In using Apple
            </SocialButton>
            <Typography
              variant="body2"
              color="#505050"
              style={{ alignSelf: "center", marginTop: "10px" }}
            >
              Not a member yet?{" "}
              <Link
                to=""
                style={{
                  color: "#023d65",
                  textDecoration: "underline",
                  fontWeight: "700",
                }}
              >
                Sign up
              </Link>
            </Typography>
          </div>
        </div>
      </Box>
    </Fade>
  </Modal> */
  }
  return (
    <Dialog
      open={openLogin}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      scroll="body"
      PaperProps={{ sx: { borderRadius: "20px" } }}
    >
      <Box sx={{ padding: 5, width: 500 }}>
        <IconButton
          sx={{
            width: "fit-content",
            position: "absolute",
            top: 10,
            right: 10,
          }}
          onClick={handleClose}
        >
          <CloseIcon sx={{ textAlign: "right" }} />
        </IconButton>
        <div className="bg-image">
          <Typography
            variant="h5"
            sx={{
              fontWeight: "700",
              textAlign: "center",
              fontFamily: "Helvetica",
              marginBottom: "20px",
            }}
          >
            Login
          </Typography>
          <LoginInput
            variant="plain"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            startDecorator={<Mail sx={{ color: "#023d65" }} />}
            placeholder="example@email.com"
          />
          <LoginInput
            variant="plain"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            startDecorator={<LockIcon sx={{ color: "#023d65" }} />}
            placeholder="Password"
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
              sx={{ "& .MuiFormControlLabel-label": { fontSize: 14 } }}
              control={<Checkbox size="small" defaultChecked />}
              label="Keep me signed in"
            />
            <a href="/" style={{ color: "#1492E6", textDecoration: "none" }}>
              Forget Password
            </a>
          </div>
          <PrimaryButton
            sx={{
              marginTop: "10px",
            }}
            size={"large"}
            onClick={handleSignin}
          >
            Login
          </PrimaryButton>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "15px",
            }}
          >
            <div
              style={{
                borderBottom: "1px solid #707070",
                width: "170px",
                height: "0px",
              }}
            ></div>
            <div>or</div>
            <div
              style={{
                borderBottom: "1px solid #707070",
                width: "170px",
                height: "0px",
              }}
            ></div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <SocialButton size={"large"}>
              <img
                src={GOOGLE_IMAGE}
                width="20px"
                style={{ marginRight: "10px" }}
              />{" "}
              Sign Up using Google
            </SocialButton>
            <SocialButton size={"large"}>
              <img
                src={FACEBOOK_IMAGE}
                width="20px"
                style={{ marginRight: "10px" }}
              />{" "}
              Log In using Facebook
            </SocialButton>
            <SocialButton>
              <img
                src={APPLE_IMAGE}
                width="20px"
                style={{ marginRight: "10px" }}
              />{" "}
              Log In using Apple
            </SocialButton>
            <DialogActions sx={{ alignSelf: "center" }}>
              <Typography
                variant="body2"
                color="#505050"
                style={{ marginTop: "10px" }}
              >
                Not a member yet?{" "}
                <button
                  // to=""
                  onClick={() => {
                    setOpenSignup(true);
                    setOpenLogin(false);
                  }}
                  style={{
                    color: "#023d65",
                    textDecoration: "underline",
                    fontWeight: "700",
                  }}
                >
                  Sign up
                </button>
              </Typography>
            </DialogActions>
          </div>
        </div>
        
      </Box>
    </Dialog>
  );
};

export default Login;
