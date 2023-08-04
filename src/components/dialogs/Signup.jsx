import {
  Box,
  Checkbox,
  Dialog,
  DialogActions,
  FormControlLabel,
  IconButton,
  Slide,
  Typography,
} from "@mui/material";
import LoginInput from "../inputs/LoginInput";
import PrimaryButton from "../buttons/PrimaryButton";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link } from "react-router-dom";
import { LocationOn, Mail } from "@mui/icons-material";
import { forwardRef } from "react";
import SignupInput from "../inputs/SignupInput";
import CheckBox from "../inputs/CheckBox";
import ReCaptcha from "../inputs/ReCaptcha";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Signup = ({ openSignup, setOpenSignup, setOpenLogin }) => {
  const handleBack = () => {
    setOpenSignup(false);
    setOpenLogin(true);
  };
  const handleClose = () => {
    setOpenSignup(false);
    setOpenLogin(false);
  };
  return (
    <Dialog
      open={openSignup}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      scroll="body"
      PaperProps={{ sx: { borderRadius: "20px" } }}
    >
      <Box sx={{ padding: 5, width: 500 }}>
        <div>
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
        </div>
        <div className="bg-image">
          <IconButton
            sx={{
              width: "fit-content",
              position: "absolute",
              top: 35,
              left: 20,
            }}
            onClick={handleBack}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "700",
              textAlign: "center",
              fontFamily: "Helvetica",
              marginBottom: "20px",
            }}
          >
            Sign up
          </Typography>
          <SignupInput
            type="text"
            variant="outlined"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            label="Full Name"
            placeholder="Enter Your Full Name"
            required
          />
          <SignupInput
            type="email"
            variant="outlined"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Email Address"
            label="Email Address"
            helperText="We'll use your email address to send you updates"
            required
          />
          <SignupInput
            type="password"
            variant="outlined"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            label="Password"
            required
          />
          <SignupInput
            type="text"
            variant="outlined"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            startDecorator={<LocationOn sx={{ color: "#023d65" }} />}
            placeholder="Location"
            label="Location"
            helperText="We'll use your location to show Meetup events near you."
            required
          />
          <CheckBox
            type="checkbox"
            heading="Age"
            label="I'm 18 years of age or older"
          />
          <ReCaptcha label="I'm not a robot" />
          <PrimaryButton
            sx={{
              marginTop: "10px",
              color: "red",
            }}
            size={"large"}
            // onClick={handleSignin}
          >
            Sign Up
          </PrimaryButton>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <DialogActions sx={{ alignSelf: "center" }}>
              <Typography
                variant="body2"
                color="#505050"
                style={{ marginTop: "10px" }}
              >
                Already a member?{" "}
                <button
                  onClick={() => {
                    setOpenSignup(false);
                    setOpenLogin(true);
                  }}
                  style={{
                    color: "#023d65",
                    textDecoration: "underline",
                    fontWeight: "700",
                  }}
                >
                  Login
                </button>
              </Typography>
            </DialogActions>
          </div>
        </div>
      </Box>
    </Dialog>
  );
};

export default Signup;
