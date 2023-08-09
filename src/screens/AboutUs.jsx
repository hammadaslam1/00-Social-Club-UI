import { Box, Typography } from "@mui/material";
import PARTY_IMAGE from "../assets/images/eventImage02.png";
import "./screens.css";

const AboutUs = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Box className="about-header">
        <Typography fontSize="36px">About us</Typography>
      </Box>
      <Box className="about-body">
        <div className="root">
          <div style={{ height: "117px" }}>
            <img
              src={PARTY_IMAGE}
              width="360px"
              style={{
                boxShadow: "0px 15px 20px #0000006E",
                borderRadius: "10px",
              }}
            />
          </div>
          <div
            className="trapezoid"
            style={{ height: "100%", width: "360px" }}
          ></div>
        </div>
        <div style={{ width: "380px", marginTop: "-60px" }}>
          <Typography
            fontSize="36px"
            fontWeight={700}
            color="#023d65"
            sx={{ marginBottom: "20px" }}
          >
            Who we are?
          </Typography>
          <Typography fontSize="12px" color="#333333">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
        </div>
      </Box>
      <Box className="about-body-mid">
        <div className="root">
          <div style={{ marginTop: "-30px", marginLeft: "-20px" }}>
            <img
              src={PARTY_IMAGE}
              width="400px"
              style={{
                borderRadius: "5px",
                boxShadow: "25px 25px 0 0px #ffffff29",
              }}
            />
          </div>
        </div>
        <div style={{ width: "380px", marginTop: "-80px" }}>
          <Typography
            fontSize="36px"
            fontWeight={700}
            sx={{ marginBottom: "20px" }}
          >
            Title
          </Typography>
          <Typography fontSize="12px">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
        </div>
      </Box>
      <Box className="about-body">
        <div style={{ width: "380px", marginTop: "-60px" }}>
          <Typography
            fontSize="36px"
            fontWeight={700}
            color="#023d65"
            sx={{ marginBottom: "20px" }}
          >
            Our mission
          </Typography>
          <Typography fontSize="12px" color="#333333">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
        </div>
        <div className="root">
          <div style={{ height: "117px" }}>
            <img
              src={PARTY_IMAGE}
              width="360px"
              style={{
                boxShadow: "0px 15px 20px #0000006E",
                borderRadius: "10px",
              }}
            />
          </div>
          <div
            className="trapezoid"
            style={{ height: "100%", width: "360px" }}
          ></div>
        </div>
      </Box>
    </div>
  );
};

export default AboutUs;
