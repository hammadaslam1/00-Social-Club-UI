import { Box, Card, IconButton, Switch, Typography } from "@mui/material";
import "./screens.css";
import Search from "../components/inputs/Search";
import TuneIcon from "@mui/icons-material/Tune";
import EVENT_IMAGE from "../assets/images/eventImage01.png";
import VenueDialog from "../components/dialogs/VenueDialog";
import { useState } from "react";

const Events = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const dates = [
    "Friday, march 10",
    "Saturday, March 11",
    "Tuesday, March 14",
    "Thursday, March 16",
    "Sunday, March 19",
  ];
  return (
    <Card className="create-main" elevation={false}>
      <Box className="create-box" sx={{ width: "600px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(10, 2fr)",
            gap: "5px 5px",
            alignItems: "center",
          }}
        >
          <Search
            ph='Search for "keywords"'
            sx={{
              gridColumn: "1/10",
              height: "90%",
              backgroundColor: "#f8f8f8",
              borderRadius: "5px",
              border: "1px solid #E1E1E1",
              color: "#808080",
              "&:hover": {
                backgroundColor: "#f8f8f8",
                borderRadius: "5px",
                border: "1px solid #E1E1E1",
              },
            }}
          />
          <IconButton
            size="large"
            sx={{ gridColumn: "10/11" }}
            onClick={() => {
              setOpenDialog(true);
            }}
            disableRipple
          >
            <TuneIcon />
          </IconButton>
          <Typography
            variant="body2"
            sx={{ gridColumn: "1/10", textAlign: "right" }}
          >
            Suggested Events
          </Typography>
          <Switch />
        </div>
        {new Array(5).fill(0).map((e, i) => (
          <>
            <Typography variant="h5" fontWeight={600} sx={{ color: "#515151" }}>
              {dates[i]}
            </Typography>
            <div
              style={{
                borderBottom: "1px solid #707070",
                padding: "10px",
                marginBottom: "10px",
              }}
            ></div>
            <div
              style={{
                marginBottom: "40px",
                display: "flex",
                color: "#404040",
              }}
            >
              <img src={EVENT_IMAGE} width="180px" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  marginLeft: "10px",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="body1" fontWeight={600}>Event Heading</Typography>
                  <Typography variant="caption">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Typography>
                </div>
                <Typography variant="caption">9 attendees</Typography>
              </div>
            </div>
          </>
        ))}
        {openDialog ? (
          <VenueDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />
        ) : (
          ""
        )}
      </Box>
    </Card>
  );
};

export default Events;
