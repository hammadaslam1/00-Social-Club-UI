import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import HEADING_IMAGE from "../assets/logos/footerLogo01.png";
import STORIES_HEAD from "../assets/images/storiesHead01.png";
import STORIES_BODY from "../assets/images/storyBody01.png";
import { RiCalendarTodoFill } from "react-icons/ri";
import { STORY_DETAIL } from "../routes/Routes";
import { useNavigate } from "react-router-dom";
import "./screens.css";

const Stories = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ margin: "50px 80px" }}>
      <div className="story-head">
        {new Array(2).fill(0).map((i) => (
          <Card
            sx={{
              boxShadow: "0px 3px 30px #0000001F",
              borderRadius: "20px",
              justifySelf: "center",
              alignSelf: "center",
              maxWidth: "600px",
              minWidth: "300px",
            }}
            elevation={0}
            key={i}
          >
            <CardActionArea>
              <div style={{ padding: "15px 15px 0 15px" }}>
                <CardMedia component="img" image={STORIES_HEAD} alt="" />
              </div>
              <CardContent>
                <Typography variant="h6" fontWeight={600} sx={{ color: "#023d65" }}>
                  Stories
                </Typography>
                <Typography variant="h6" fontWeight={600} sx={{ color: "#404040" }}>
                  Lorem Ipsum is simply dummy text of
                </Typography>
                <Typography variant="caption" sx={{ color: "#404040" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchang...
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
        <Box
          sx={{
            gridColumn: "1/3",
            backgroundColor: "#023d65",
            border: "1px solid #707070",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <div>
            <Typography variant="h4" fontWeight={600} sx={{ color: "#fff" }}>
              Heading
            </Typography>
            <Typography variant="h6" fontWeight={600} sx={{ color: "#f5fadf" }}>
              Find an event near you
            </Typography>
          </div>
          <img
            src={HEADING_IMAGE}
            width="120px"
            style={{ alignSelf: "center" }}
          />
        </Box>
      </div>
      <div className="story-body">
        {new Array(8).fill(0).map((i) => (
          <Card
            sx={{
              boxShadow: "0px 3px 30px #0000001F",
              borderRadius: "20px",
              maxWidth: "350px",
              minWidth: "300px",
              margin: "20px",
            }}
            elevation={0}
            key={i}
          >
            <CardActionArea>
              <div style={{ padding: "10px 10px 0 10px" }}>
                <CardMedia component="img" image={STORIES_BODY} alt="" />
              </div>
              <CardContent>
                <Typography variant="body1" fontWeight={600} sx={{ color: "#404040" }}>
                  Lorem Ipsum is simply dummy text of the printing typesetting
                  industry.
                </Typography>
                <Typography variant="caption" color="#404040">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to
                </Typography>
              </CardContent>
            </CardActionArea>
            <div
              style={{
                width: "90%",
                margin: "auto",
                borderBottom: "1px solid #d0d0d0",
              }}
            ></div>
            <CardActions
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography sx={{ display: "flex" }} fontSize="12px">
                <RiCalendarTodoFill fontSize="16px" /> 03 April, 2018
              </Typography>
              <Button
                size="small"
                onClick={() => {
                  navigate(STORY_DETAIL);
                }}
                sx={{ textTransform: "capitalize" }}
                disableRipple
              >
                Read more
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </Box>
  );
};

export default Stories;
