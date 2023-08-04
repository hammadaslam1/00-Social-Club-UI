import { Box, Card, Input, Typography } from "@mui/material";
import "./screens.css";
import SignupInput from "../components/inputs/SignupInput";
import { LocationOn } from "@mui/icons-material";
import PrimaryButton from "../components/buttons/PrimaryButton";

const CreateEvent = () => {
  return (
    <Card className="create-main" elevation={false}>
      <Box className="create-box">
        <Typography
          variant="h4"
          sx={{
            fontWeight: "700",
            fontFamily: "Helvetica",
          }}
        >
          Create New Event
        </Typography>
        <SignupInput
          type="text"
          variant="plain"
          sx={{
            backgroundColor: "#f8f8f8",
            borderRadius: "8px",
            border: "1px solid transparent",
            "&:focus": { border: "1px solid #023D65", outline: "none" },
          }}
          placeholder="Host One"
          label="Host Name"
        />
        <SignupInput
          type="text"
          variant="plain"
          sx={{
            backgroundColor: "#f8f8f8",
            borderRadius: "8px",
            border: "1px solid transparent",
            "&:focus": { border: "1px solid #023D65", outline: "none" },
          }}
          placeholder="Enter your email address"
          label="Email Address"
        />
        <SignupInput
          type="text"
          variant="plain"
          sx={{
            backgroundColor: "#f8f8f8",
            borderRadius: "8px",
            border: "1px solid transparent",
            "&:focus": { border: "1px solid #023D65", outline: "none" },
          }}
          endDecorator={<LocationOn sx={{ color: "#023d65" }} />}
          placeholder="Enter your location"
          label="Event Location"
        />
        <SignupInput
          type="text"
          variant="plain"
          sx={{
            backgroundColor: "#f8f8f8",
            borderRadius: "8px",
            border: "1px solid transparent",
            "&:focus": { border: "1px solid #023D65", outline: "none" },
          }}
          placeholder="Event Name"
          label="Event Title"
        />
        <SignupInput
          type="text"
          variant="plain"
          sx={{
            backgroundColor: "#f8f8f8",
            borderRadius: "8px",
            // height: '140px',
            border: "1px solid transparent",
            "&:focus": { border: "1px solid #023D65", outline: "none" },
          }}
          placeholder="Write short description of your event..."
          label="Event Short Description"
          multiline
          rows={4}
        />
        <SignupInput
          type="text"
          variant="plain"
          sx={{
            backgroundColor: "#f8f8f8",
            borderRadius: "8px",
            // height: '140px',
            border: "1px solid transparent",
            "&:focus": { border: "1px solid #023D65", outline: "none" },
          }}
          placeholder="Write long description of your event..."
          label="Event Long Description"
          multiline
          rows={4}
        />
        <PrimaryButton sx={{fontWeight: '500', alignSelf: 'left', borderRadius: '5px'}}>Add external event URLs</PrimaryButton>
        {/* <Input type="file" /> */}
        <div>
            <SignupInput label='Event Tags' />
        </div>
      </Box>
    </Card>
  );
};

export default CreateEvent;
