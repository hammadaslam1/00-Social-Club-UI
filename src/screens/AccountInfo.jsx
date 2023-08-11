import { KeyboardArrowDown } from "@mui/icons-material";
import {
  Box,
  Card,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Typography,
} from "@mui/material";
import SignupInput from "../components/inputs/SignupInput";
import PrimaryButton from "../components/buttons/PrimaryButton";
import { Option, Select } from "@mui/joy";
import { useSelector } from "react-redux";
import { HOME } from "../routes/Routes";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const inputStyles = {
  backgroundColor: "#f8f8f8",
  borderRadius: "8px",
  border: "1px solid transparent",
  "&:focus": { border: "1px solid #023D65", outline: "none" },
}

const AccountInfo = () => {
  const user = useSelector(state=>state.UserReducer.user)
  const navigate = useNavigate()
  useEffect(() => {
    if (!user) {
      navigate(HOME);
    }
  }, user);
  return (
    <Card className="create-main" elevation={false}>
      <Box className="edit-box">
        <Typography
          variant="h5"
          sx={{
            fontWeight: "700",
            fontFamily: "Helvetica",
            marginBottom: "20px",
          }}
        >
          Account Information
        </Typography>

        <SignupInput
          type="text"
          sx={inputStyles}
          placeholder="Enter your first name"
          label="First Name"
        />
        <SignupInput
          type="text"
          sx={inputStyles}
          placeholder="Enter your last name"
          label="Last Name"
        />

        <SignupInput
          type="text"
          sx={{
            backgroundColor: "#f8f8f8",
            borderRadius: "8px",
            border: "1px solid transparent",
            // marginTop: "0px",
            "&:focus": { border: "1px solid #023D65", outline: "none" },
          }}
          placeholder="Enter zip code"
          label="Zip Code"
        />
        <label htmlFor="" className="profile-lbl">
          Relationship with Alcohol
        </label>
        <Select
          placeholder="relationship with alcohol"
          variant="plain"
          indicator={<KeyboardArrowDown />}
          sx={{
            backgroundColor: "#f8f8f8",
            borderRadius: "8px",
            border: "1px solid transparent",
            marginTop: "0px",
            "&:focus": { border: "1px solid #023D65", outline: "none" },
          }}
        >
          <Option value=""> --relationship with alcohol-- </Option>
          <Option value="option one">Option One</Option>
          <Option value="option two">Option Two</Option>
          <Option value="option three">Option Three</Option>
          <Option value="option four">Option Four</Option>
          <Option value="option five">Option Five</Option>
          <Option value="option six">Option Six</Option>
          <Option value="option seven">Option Seven</Option>
        </Select>
        {/* <label htmlFor="">Gender</label> */}
        <FormLabel
            sx={{ color: "#707070", fontSize: "14px", marginBottom: "2px" }}
          >
            Gender
          </FormLabel>
        <div
        className="checks"
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <FormControlLabel
              sx={{ "& .MuiFormControlLabel-label": { fontSize: 14 } }}
              control={<Checkbox size="medium" sx={{ color: "#023d65" }} />}
              label="Male"
            />
            <FormControlLabel
              sx={{ "& .MuiFormControlLabel-label": { fontSize: 14 } }}
              control={<Checkbox size="medium" sx={{ color: "#023d65" }} />}
              label="Female"
            />
        </div>
        <FormControl>
          <FormLabel
            sx={{ color: "#707070", fontSize: "14px", marginBottom: "2px" }}
          >
            Relationship with alcohol
          </FormLabel>
          <div
          className="checks"
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <FormControlLabel
              sx={{ "& .MuiFormControlLabel-label": { fontSize: 14 } }}
              control={<Checkbox size="medium" sx={{ color: "#023d65" }} />}
              label="Events near me"
            />
            <FormControlLabel
              sx={{ "& .MuiFormControlLabel-label": { fontSize: 14 } }}
              control={<Checkbox size="medium" sx={{ color: "#023d65" }} />}
              label="Host Event"
            />
            <FormControlLabel
              sx={{ "& .MuiFormControlLabel-label": { fontSize: 14 } }}
              control={<Checkbox size="medium" sx={{ color: "#023d65" }} />}
              label="Date Night"
            />
            <FormControlLabel
              sx={{ "& .MuiFormControlLabel-label": { fontSize: 14 } }}
              control={<Checkbox size="medium" sx={{ color: "#023d65" }} />}
              label="Find groups near me"
            />
          </div>
        </FormControl>
        <PrimaryButton
          sx={{
            width: "100%",
            textTransform: "capitalize",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          Save
        </PrimaryButton>
      </Box>
    </Card>
  );
};

export default AccountInfo;
