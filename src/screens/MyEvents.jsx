import { Box, Card, Divider, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";
import HOST_IMAGE from "../assets/images/hostImage01.png";
import EVENT_IMAGE from "../assets/images/eventImage01.png";
import PROFILE_PIC from "../assets/profile/profilePic03.png";
import { LocationOn } from "@mui/icons-material";
import { IoPeople } from "react-icons/io5";
import "./screens.css";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, backgroundColor: "#f6f5f7" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const MyEvents = () => {
  const [value, setValue] = useState(0);

  const dates = ["Friday, March 10", "Saturday, March 11"];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Card className="create-main events" elevation={false}>
      <Typography variant="h4" fontWeight={600}>
        Profile
      </Typography>
      <div style={{ padding: "20px", lineHeight: "0px", marginBottom: "20px" }}>
        <img src={PROFILE_PIC} width="80px" />
        <Typography variant="h5" fontWeight={600}>
          Ms. Janvi
        </Typography>
        <Typography>Member Since March 2023</Typography>
        <Typography variant="caption" color="#404040">
          <LocationOn sx={{ color: "#023d65" }} fontSize="small" /> Los Angeles
        </Typography>
        <Typography variant="caption" sx={{ display: "flex" }}>
          <IoPeople color="#808080" fontSize="medium" />{" "}
          <span style={{ color: "#404040", marginLeft: "8px" }}>
            Attended 0 Events
          </span>
        </Typography>
      </div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab
              label="Events to be Host"
              {...a11yProps(0)}
              sx={{
                textTransform: "capitalize",
                borderColor: "#023d65",
                borderRadius: "9px 9px 0 0",
                color: "#404040",
                "&:focus": {
                  fontWeight: "600",
                  color: "#000",
                  backgroundColor: "#f6f5f7",
                },
              }}
            />
            <Tab
              label="Events to be Attend"
              {...a11yProps(1)}
              sx={{
                textTransform: "capitalize",
                borderColor: "#023d65",
                borderRadius: "9px 9px 0 0",
                color: "#404040",
                "&:focus": {
                  fontWeight: "600",
                  color: "#000",
                  backgroundColor: "#f6f5f7",
                },
              }}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          {new Array(2).fill(0).map((e, i) => (
            <>
              <div
                style={{
                  marginBottom: "40px",
                  display: "flex",
                  color: "#404040",
                }}
              >
                <img src={HOST_IMAGE} width="180px" />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    marginLeft: "10px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <Typography
                      variant="caption"
                      fontWeight={600}
                      color="#023d65"
                    >
                      {dates[i]}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="#404040"
                      fontWeight={600}
                    >
                      Event Heading
                    </Typography>
                    <Typography variant="caption" color="#404040">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Typography>
                  </div>
                  <Typography variant="caption" color="#404040">
                    9 attendees
                  </Typography>
                  <Divider />
                </div>
              </div>
            </>
          ))}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          {new Array(2).fill(0).map((e, i) => (
            <>
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
                    <Typography
                      variant="caption"
                      fontWeight={600}
                      color="#023d65"
                    >
                      {dates[i]}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="#404040"
                      fontWeight={600}
                    >
                      Event Heading
                    </Typography>
                    <Typography variant="caption" color="#404040">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Typography>
                  </div>
                  <Typography variant="caption" color="#404040">
                    9 attendees
                  </Typography>
                  <Divider />
                </div>
              </div>
            </>
          ))}
        </CustomTabPanel>
      </Box>
    </Card>
  );
};

export default MyEvents;
