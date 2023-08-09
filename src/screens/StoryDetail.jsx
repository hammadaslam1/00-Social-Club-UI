import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import DETAIL_IMAGE from "../assets/images/detail01.png";
import COMMENT_IMAGE from "../assets/comments/comment01.png";
import PrimaryButton from "../components/buttons/PrimaryButton";
import LoginInput from "../components/inputs/LoginInput";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useState } from "react";
import "./screens.css";

const StoryDetail = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Card className="create-main" elevation={false}>
      <Box className="details-box">
        <div style={{ padding: "15px 15px 0 15px" }}>
          <CardMedia component="img" image={DETAIL_IMAGE} alt="" />
        </div>
        <CardContent>
          <div style={{ paddingLeft: "40px" }}>
            <Typography
              sx={{
                color: "#000",
                
                fontWeight: "700",
                fontSize: "19px",
                width: "600px",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been
            </Typography>
          </div>
          <div style={{ width: "550px", margin: "20px auto" }}>
            <Typography variant="h6" color="#023d65" fontFamily="Krona One">
              By Janvi
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "#404040", margin: "10px", display: "block" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchang...
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "#404040", margin: "10px", display: "block" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchang...
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "#404040", margin: "10px", display: "block" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchang...
            </Typography>
            <Button
              style={{
                textDecoration: "underline",
                color: "#393939",
                fontWeight: "700",
                fontSize: "12px",
                display: "flex",
                width: "fit-content",
                marginLeft: "15px",
                marginBottom: "30px",
                alignItems: "center",
                justifyContent: "space-between",
                textTransform: 'capitalize',
                "&:hover":{
                  backgroundColor: 'transparent'
                }
              }}
              disableRipple
              onClick={() => {
                setExpanded(!expanded);
              }}
            >
              <span>06 Comments</span>{" "}
              {expanded ? <BsChevronUp /> : <BsChevronDown />}
            </Button>
          </div>
          {expanded
            ? new Array(4).fill(0).map((i) => (
                <div
                  style={{
                    width: "600px",
                    margin: "auto",
                    display: "flex",

                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "30px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      color: "#404040",
                      display: "grid",
                      gridTemplateColumns: "repeat(8, 2fr)",
                      gap: "10px",
                    }}
                  >
                    <div>
                      <img src={COMMENT_IMAGE} width="40px" />
                    </div>

                    <div
                      style={{
                        marginLeft: "10px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        gridColumn: "2/8",
                      }}
                    >
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                          sx={{ fontSize: "10px", fontWeight: "600" }}
                        >
                          Emilly Blunt
                        </Typography>
                        <Typography sx={{ fontSize: "7px" }}>
                          December 4, 2017 at 3:12 pm
                        </Typography>
                      </div>
                      <Typography sx={{ fontSize: "9px" }}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </Typography>
                    </div>
                  </div>
                  <PrimaryButton
                    size="small"
                    sx={{
                      width: "30px",
                      borderRadius: "2px",
                      fontSize: "10px",
                      fontWeight: "normal",
                      "&:hover": {
                        backgroundColor: "#023d65",
                        color: "#f5fadf",
                      },
                    }}
                  >
                    Reply
                  </PrimaryButton>
                </div>
              ))
            : ""}

          <Box sx={{ width: "430px", margin: "auto" }}>
            <Typography
              fontSize="20px"
              fontWeight={700}
              sx={{ marginBottom: "30px" }}
            >
              Post Comments
            </Typography>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="">Full Name</label>
              <LoginInput placeholder="Name" sx={{fontsize:'14px'}} />
              <label htmlFor="">Email Address</label>
              <LoginInput placeholder="Enter your email address" sx={{fontsize:'14px'}} />
              <label htmlFor="">Subject</label>
              <LoginInput placeholder="Subject" sx={{fontsize:'14px'}} />
              <label htmlFor="">How can we help?</label>
              <LoginInput placeholder="Enter your message" sx={{fontsize:'14px'}} />
              <PrimaryButton sx={{width: '100%', margin: '20px 0'}}>Submit</PrimaryButton>
            </div>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};

export default StoryDetail;
