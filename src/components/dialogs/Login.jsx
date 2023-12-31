import { Mail } from "@mui/icons-material";
import LockIcon from "@mui/icons-material/Lock";
import CloseIcon from "@mui/icons-material/Close";
import GOOGLE_IMAGE from "../../assets/icons/google32.png";
import FACEBOOK_IMAGE from "../../assets/icons/facebook32.png";
import APPLE_IMAGE from "../../assets/icons/apple32.png";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  FormControlLabel,
  IconButton,
  Slide,
  Typography,
} from "@mui/material";
import { forwardRef, useState } from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import SocialButton from "../buttons/SocialButton";
import { useSelector, useDispatch } from "react-redux";
import { ADD_USER } from "../../redux/Types/Types";
import "./dialog.css";
import LoginInput from "../inputs/LoginInput";

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
  const handleClose = () => setOpenLogin(false);

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
                style={{ marginTop: "12px", display: 'flex', alignItems: 'center' }}
              >
                Not a member yet?{" "}
                <Button
                  // to=""
                  onClick={() => {
                    setOpenSignup(true);
                    setOpenLogin(false);
                  }}
                  style={{
                    color: "#023d65",
                    textDecoration: "underline",
                    fontSize: '15px',
                    fontWeight: "bold",
                    textTransform: 'capitalize',
                  }}
                >
                  Sign up
                </Button>
              </Typography>
            </DialogActions>
          </div>
        </div>
        
      </Box>
    </Dialog>
  );
};

export default Login;
