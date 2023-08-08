import { Avatar, Box, Card, IconButton, Typography } from "@mui/material";
import SignupInput from "../components/inputs/SignupInput";
import PrimaryButton from "../components/buttons/PrimaryButton";
import PROFILE_PIC from "../assets/profile/profilePic01.png";
import "./screens.css";
import { Edit, KeyboardArrowDown } from "@mui/icons-material";
import { Option, Select, selectClasses } from "@mui/joy";

const EditProfile = () => {
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
          Edit Profile
        </Typography>
        <div style={{ alignSelf: "center", height: "200px" }}>
          <img
            src={PROFILE_PIC}
            height="200px"
            width="200px"
            style={{ borderRadius: "50%" }}
          />
          <IconButton
            sx={{
              backgroundColor: "#023d65",
              margin: "-90px 0 0 150px",
              "&:hover": { backgroundColor: "#023d65" },
            }}
          >
            <Edit sx={{ color: "#fff" }} />
          </IconButton>
        </div>
        <SignupInput
          type="text"
          sx={{
            backgroundColor: "#f8f8f8",
            borderRadius: "8px",
            border: "1px solid transparent",
            "&:focus": { border: "1px solid #023D65", outline: "none" },
          }}
          placeholder="Enter your first name"
          label="First Name"
        />
        <SignupInput
          type="text"
          sx={{
            backgroundColor: "#f8f8f8",
            borderRadius: "8px",
            border: "1px solid transparent",
            "&:focus": { border: "1px solid #023D65", outline: "none" },
          }}
          placeholder="Enter your last name"
          label="Last Name"
        />

        <SignupInput
          type="text"
          sx={{
            backgroundColor: "#f8f8f8",
            borderRadius: "8px",
            border: "1px solid transparent",
            marginTop: "0px",
            
            "&:focus": { border: "1px solid #023D65", outline: "none" },
          }}
          placeholder="Enter zip code"
          label="Zip Code"
        />
        <label htmlFor="" className="profile-lbl">Relationship with Alcohol</label>
        <Select
          placeholder="relationship with alcohol"
          variant="plain"
          indicator={<KeyboardArrowDown />}
          sx={{
            backgroundColor: "#f8f8f8",
            borderRadius: "8px",
            border: "1px solid transparent",
            marginTop: "0px",
            marginBottom: "30px",
            "&:focus": { border: "1px solid #023D65", outline: "none" },
          }}
        >
          <Option value="option one">Option One</Option>
          <Option value="option two">Option Two</Option>
          <Option value="option three">Option Three</Option>
          <Option value="option four">Option Four</Option>
          <Option value="option five">Option Five</Option>
          <Option value="option six">Option Six</Option>
          <Option value="option seven">Option Seven</Option>
        </Select>

        <PrimaryButton
          sx={{
            width: "100%",
            textTransform: "capitalize",
            marginBottom: "20px",
          }}
        >
          Save
        </PrimaryButton>
      </Box>
    </Card>
  );
};

export default EditProfile;
