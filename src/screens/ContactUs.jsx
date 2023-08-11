import { Box, Card, Typography } from "@mui/material";
import PrimaryButton from "../components/buttons/PrimaryButton";
import SignupInput from "../components/inputs/SignupInput";
import CreateInput from "../components/inputs/CreateInput";

const ContactUs = () => {
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
          What can we do for you?
        </Typography>
        <SignupInput
          type="text"
          sx={{
            backgroundColor: "#f8f8f8",
            borderRadius: "8px",
            border: "1px solid transparent",
            marginBottom: "20px",
            "&:focus": { border: "1px solid #023D65", outline: "none" },
          }}
          placeholder="Name"
          label="Full Name"
        />
        <SignupInput
          type="text"
          sx={{
            backgroundColor: "#f8f8f8",
            borderRadius: "8px",
            border: "1px solid transparent",
            marginBottom: "20px",
            "&:focus": { border: "1px solid #023D65", outline: "none" },
          }}
          placeholder="Enter your email address"
          label="Email Address"
        />

        <SignupInput
          type="text"
          sx={{
            backgroundColor: "#f8f8f8",
            borderRadius: "8px",
            border: "1px solid transparent",
            marginBottom: "30px",
            "&:focus": { border: "1px solid #023D65", outline: "none" },
          }}
          placeholder="Write short description of your event..."
          label="How can we help?"
          multiline
          rows={5}
        />

        <PrimaryButton sx={{ width: "100%", textTransform: "capitalize" }}>
          Submit
        </PrimaryButton>
      </Box>
    </Card>
  );
};

export default ContactUs;
