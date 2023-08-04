import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";
import "./inputs.css";
import CAPTCHA_ICON from "../../assets/icons/recaptcha.png";

const ReCaptcha = ({ ...props }) => {
  return (
    <Box className="recaptcha-box">
      <div className="recaptcha-div">
        <FormControlLabel
          sx={{ "& .MuiFormControlLabel-label": { fontSize: 14 } }}
          control={<Checkbox size="large" />}
          {...props}
        />
        <div style={{display: 'flex', flexDirection: 'column'}}>
        <img src={CAPTCHA_ICON} width='120px' />
        <Typography sx={{ fontSize: '10px', textAlign: 'center'}}>Privacy - Terms</Typography>
        </div>
      </div>
      {/* <ReCAPTCHA sitekey="Your client site key" /> */}
    </Box>
  );
};

export default ReCaptcha;
