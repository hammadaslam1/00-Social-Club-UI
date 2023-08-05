import { Box, Button, Card, Typography } from "@mui/material";
import { LocationOn, Upload } from "@mui/icons-material";
import PrimaryButton from "../components/buttons/PrimaryButton";
import CreateInput from "../components/inputs/CreateInput";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { HOME } from "../routes/Routes";
import { useEffect, useState } from "react";
import CheckBox from "../components/inputs/CheckBox";
import "./screens.css";

const CreateEvent = () => {
  const navigate = useNavigate();
  const [price, setPrice] = useState(false);
  const user = useSelector((state) => state.UserReducer.user);
  // useEffect(()=>{
  //   if (!user) {
  //     navigate(HOME);
  //   }
  // }, user)

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
            marginBottom: "20px",
          }}
        >
          Add external event URLs
        </PrimaryButton>
        <Typography variant="subtitle1" fontWeight={700}>
          Upload Image
        </Typography>
        <div className="draganddrop">
          <div className="drop-body">
            <Button className="drag-btn" sx={{padding: '50px', color: 'gray'}} size="large" disableRipple={true}>
              <Upload fontSize="large" />
              <div>
                <Typography variant="h6">Click to Upload</Typography>
                <Typography variant="body2" color="gray">
                  or just drag and drop
                </Typography>
              </div>
            </Button>
          </div>
        </div>
        <Typography variant="subtitle1" fontWeight={700}>
          Event Tags
        </Typography>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "1px 10px",
            marginBottom: "20px",
          }}
        >
          <CreateInput
            placeholder="Add search keywords to your event"
            sx={{ gridColumn: "1/5", marginY: "unset" }}
          />
          <PrimaryButton
            sx={{
              width: "unset",
              fontWeight: "500",
              borderRadius: "5px",
              gridColumn: "5/6",
              alignSelf: "stretch",
            }}
          >
            Add
          </PrimaryButton>
          <Typography variant="caption text">0/10 tags</Typography>
          <Typography
            variant="caption text"
            sx={{ gridColumn: "4/5", textAlign: "right" }}
          >
            0/25
          </Typography>
        </div>
        <Typography variant="subtitle1" fontWeight={700}>
          Event Paid or Free?
        </Typography>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1px 5px",
            marginBottom: "20px",
          }}
        >
          <CheckBox
            label="The Event is Paid"
            sx={{
              fontWeight: "600",
              // backgroundColor: "#f5fadf",
              borderRadius: "5px",
              padding: "5px",
              width: '100%'
            }}
            onChange={()=>setPrice(!price)}
            />
          <CheckBox
            label="The Event is Free"
            sx={{
              fontWeight: "600",
              // backgroundColor: "#f5fadf",
              borderRadius: "5px",
              padding: "5px",
              width: '100%'
            }}
          />
          <div style={{height: '10px'}}>

              {price?
              <Typography sx={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>Ticket Price <span>$100</span></Typography>
              :''}
              </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1px 5px",
            marginBottom: "20px",
            marginTop: "20px",

          }}
        >
          <PrimaryButton
            sx={{
              backgroundColor: "#fff",
              color: "#023d65",
              border: "1px solid #023d65",
              width: "100%",
              "&:hover": { backgroundColor: "#023d65", color: "#fff" },
            }}
          >
            Cancel
          </PrimaryButton>
          <PrimaryButton sx={{ border: "1px solid #023d65", width: "100%" }}>
            Publish
          </PrimaryButton>
        </div>
      </Box>
    </Card>
  );
};

export default CreateEvent;
