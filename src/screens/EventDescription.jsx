import { Box, Card, Typography } from "@mui/material";
import DESC_IMAGE from "../assets/event/description02.png";
import PROFILE_PIC from "../assets/profile/profilePic04.png";
import MAP_IMAGE from "../assets/event/map02.png";
import { LocationOn, WatchLater } from "@mui/icons-material";
import PrimaryButton from "../components/buttons/PrimaryButton";

const EventDescription = () => {
  return (
    <Card className="create-main" sx={{ padding: "20px" }}>
      <Box>
        <div
          style={{
            height: "65vh",
            // width: '100%',
            backgroundImage: `url(${DESC_IMAGE})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        ></div>
      </Box>
      <Typography variant="h4" fontFamily="Krona One">
        Event Description
      </Typography>
      <Typography
        variant="caption"
        maxWidth={750}
        color="#707070"
        lineHeight={1.5}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into.
      </Typography>
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "20px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <WatchLater fontSize="medium" />
          <div
            style={{ display: "flex", flexDirection: "column", margin: "10px" }}
          >
            <Typography
              variant="caption"
              fontFamily="Krona One"
              color="#3d3d3d"
            >
              Thursday, 23 Feb,2023 at 07:00 pm to
            </Typography>
            <Typography
              variant="caption"
              fontFamily="Krona One"
              color="#3d3d3d"
            >
              Thursday, 23 Feb,2023 at 09:00 pm EST
            </Typography>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <LocationOn fontSize="medium" />
          <div
            style={{ display: "flex", flexDirection: "column", margin: "10px" }}
          >
            <Typography fontSize="16px" fontFamily="Krona One" color="#3d3d3d">
              Ophelia Lounge NYC
            </Typography>
            <Typography
              variant="caption"
              fontFamily="Krona One"
              color="#3d3d3d"
            >
              3 Mitchell PI 26th Floor - New Your, NY
            </Typography>
          </div>
        </div>
      </div>
      <Card
        sx={{
          boxShadow: "0px 3px 20px #0000000F",
          display: "flex",
          flexDirection: "column",
          width: "230px",
          padding: "20px",
          alignItems: "center",
        }}
        elevation={0}
      >
        <img src={PROFILE_PIC} width="85px" height="85px" />
        <Typography fontSize="10px" fontFamily="Krona One" color="#6a6a6a">
          Host by
        </Typography>
        <Typography fontSize="18px" fontFamily="Krona One" color="#6a6a6a">
          Ms. Janvi
        </Typography>
        <PrimaryButton
          sx={{
            width: "200px",
            borderRadius: "5px",
            fontWeight: "normal",
            fontSize: "16px",
            fontFamily: "Krona One",
            marginTop: "10px",
            "&:hover": {
              backgroundColor: "#023d65",
            },
          }}
          disableRipple
        >
          RSVP
        </PrimaryButton>
      </Card>
      <Typography
        variant="caption"
        maxWidth={750}
        marginTop="20px"
        lineHeight={1.5}
        color="#707070"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Typography>
      <Typography
        variant="caption"
        maxWidth={750}
        marginTop="20px"
        lineHeight={1.5}
        color="#707070"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Typography>
      <div style={{ marginTop: "20px" }}>
        <PrimaryButton
          sx={{
            backgroundColor: "#CEB089",
            fontWeight: "normal",
            width: "fit-content",
            margin: "5px",
            borderRadius: "5px",
            paddingX: "20px",
            "&:hover": {
              backgroundColor: "#CEB089",
            },
          }}
          disableRipple
          >
          Distance
        </PrimaryButton>
        <PrimaryButton
          sx={{
            backgroundColor: "#CEB089",
            fontWeight: "normal",
            width: "fit-content",
            margin: "5px",
            borderRadius: "5px",
            paddingX: "20px",
            "&:hover": {
              backgroundColor: "#CEB089",
            },
          }}
          disableRipple
          >
          Sport
        </PrimaryButton>
        <PrimaryButton
          sx={{
            backgroundColor: "#CEB089",
            fontWeight: "normal",
            width: "fit-content",
            margin: "5px",
            borderRadius: "5px",
            paddingX: "20px",
            "&:hover": {
              backgroundColor: "#CEB089",
            },
          }}
          disableRipple
        >
          Mixed
        </PrimaryButton>
      </div>
      <Box>
        <div
          style={{
            height: "40vh",
            backgroundImage: `url(${MAP_IMAGE})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            borderRadius: "10px",
            marginBottom: "20px",
            marginTop: "40px",
          }}
        ></div>
      </Box>
    </Card>
  );
};

export default EventDescription;
