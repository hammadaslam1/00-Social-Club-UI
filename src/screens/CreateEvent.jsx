import {
  Box,
  Card,
  IconButton,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import "./screens.css";
import SignupInput from "../components/inputs/SignupInput";
import { LocationOn, Upload } from "@mui/icons-material";
import PrimaryButton from "../components/buttons/PrimaryButton";
import CreateInput from "../components/inputs/CreateInput";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { HOME } from "../routes/Routes";

const CreateEvent = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.UserReducer.user);
  
  if (user) {
    return (
      <Card className="create-main" elevation={false}>
        <Box className="create-box">
          <Typography
            variant="h4"
            sx={{
              fontWeight: "700",
              fontFamily: "Helvetica",
              marginBottom: "30px",
            }}
          >
            Create New Event
          </Typography>
          <CreateInput
            type="text"
            sx={{
              backgroundColor: "#f8f8f8",
              borderRadius: "8px",
              border: "1px solid transparent",
              marginBottom: "10px",
              "&:focus": { border: "1px solid #023D65", outline: "none" },
            }}
            placeholder="Host One"
            label="Host Name"
          />
          <CreateInput
            type="text"
            sx={{
              backgroundColor: "#f8f8f8",
              borderRadius: "8px",
              border: "1px solid transparent",
              marginBottom: "10px",
              "&:focus": { border: "1px solid #023D65", outline: "none" },
            }}
            placeholder="Enter your email address"
            label="Email Address"
          />
          <CreateInput
            type="text"
            sx={{
              backgroundColor: "#f8f8f8",
              borderRadius: "8px",
              border: "1px solid transparent",
              marginBottom: "10px",
              "&:focus": { border: "1px solid #023D65", outline: "none" },
            }}
            endDecorator={<LocationOn sx={{ color: "#023d65" }} />}
            placeholder="Enter your location"
            label="Event Location"
          />
          <CreateInput
            type="text"
            sx={{
              backgroundColor: "#f8f8f8",
              borderRadius: "8px",
              border: "1px solid transparent",
              marginBottom: "10px",
              "&:focus": { border: "1px solid #023D65", outline: "none" },
            }}
            placeholder="Event Name"
            label="Event Title"
          />
          <CreateInput
            type="text"
            sx={{
              backgroundColor: "#f8f8f8",
              borderRadius: "8px",
              // height: '140px',
              border: "1px solid transparent",
              marginBottom: "10px",
              "&:focus": { border: "1px solid #023D65", outline: "none" },
            }}
            placeholder="Write short description of your event..."
            label="Event Short Description"
            multiline
            rows={4}
          />
          <CreateInput
            type="text"
            sx={{
              backgroundColor: "#f8f8f8",
              borderRadius: "8px",
              // height: '140px',
              border: "1px solid transparent",
              marginBottom: "10px",
              "&:focus": { border: "1px solid #023D65", outline: "none" },
            }}
            placeholder="Write long description of your event..."
            label="Event Long Description"
            multiline
            minRows={4}
            maxRows={10}
          />
          <PrimaryButton
            sx={{
              fontWeight: "500",
              alignSelf: "left",
              borderRadius: "5px",
              marginBottom: "10px",
            }}
          >
            Add external event URLs
          </PrimaryButton>

          <div className="draganddrop">
            <div className="drop-body">
              <IconButton size="large">
                <Upload fontSize="large" />
              </IconButton>
              <div>
                <Typography variant="h6">Click to Upload</Typography>
                <Typography variant="body2" color="gray">
                  or just drag and drop
                </Typography>
              </div>
            </div>
          </div>

          {/* <div style={{ display: "flex", width: '100%' }}>
          <SignupInput label="Event Tags" sx={{ width: '80%' }} />
          <PrimaryButton
            sx={{
              fontWeight: "500",
              borderRadius: "5px",
              width: "20%",
              marginBottom: "8px",
              alignSelf: "flex-end",
            //   flex: '1'
            }}
          >
            Add
          </PrimaryButton>
        </div> */}
        </Box>
      </Card>
    );
  } else {
    navigate(HOME);
  }
};

export default CreateEvent;
