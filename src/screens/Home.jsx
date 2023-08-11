import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import PrimaryButton from "../components/buttons/PrimaryButton";
import SLIDE_IMAGE_1 from "../assets/slides/slide01.png";
import SLIDE_IMAGE_2 from "../assets/slides/slide02.png";
import SLIDE_IMAGE_3 from "../assets/slides/slide03.png";
import SLIDE_IMAGE_4 from "../assets/slides/slide04.png";
import SLIDE_LOGO from "../assets/slides/slideLogo02.png";
import SLIDE_ICON from "../assets/slides/slideIcon02.png";
import FOOTER_IMAGE from "../assets/slides/homeFooter02.png";
import EVENT_IMAGE from "../assets/images/eventImage02.png";
import Carousel from "react-material-ui-carousel";
import {
  ArrowBack,
  ArrowForward,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";
import { CREATE_EVENT, EVENT_DESC } from "../routes/Routes";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.UserReducer.user);
  const navigate = useNavigate();
  const slides = [SLIDE_IMAGE_1, SLIDE_IMAGE_2, SLIDE_IMAGE_3, SLIDE_IMAGE_4];
  const events = [EVENT_IMAGE, SLIDE_IMAGE_2];
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Carousel
        NextIcon={<ArrowForward />}
        PrevIcon={<ArrowBack />}
        navButtonsProps={{
          style: {
            backgroundColor: "#fff",
            opacity: 1,
            borderRadius: "50%",
            color: "#023d65",
            "&:hover": {
              backgroundColor: "#023d65",
              color: "#fff",
              opacity: 1,
            },
          },
        }}
        navButtonsWrapperProps={{
          style: {
            bottom: 10,
            top: "unset",
          },
        }}
        indicatorIconButtonProps={{
          style: {
            bottom: 60,
            zIndex: 1,
            left: 550,
            width: "12px",
            height: "12px",
            color: "transparent",
            border: "1px solid #fff",
            margin: "2px",
          },
        }}
        indicatorContainerProps={{
          style: {
            backgroundColor: "#fff",
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            width: "15px",
            height: "15px",
            color: "#fff",
            border: "1px solid #fff",
          },
        }}
      >
        {slides?.map((data, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100vh",
              backgroundImage: `url(${data})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "95vh",
              }}
            >
              <div style={{ flex: 1, padding: "90px" }}>
                <Typography
                  fontSize="32pt"
                  color="#fff"
                  sx={{ marginBottom: "20px", fontFamily: "Krona One" }}
                >
                  Let's Connect with the Alcohol Free World Outside your Door
                </Typography>
                <PrimaryButton
                  disabled={user ? false : true}
                  onClick={() => {
                    navigate(CREATE_EVENT);
                  }}
                  sx={{
                    marginTop: "30px",
                    fontFamily: "Krona One",
                    fontWeight: "normal",
                  }}
                >
                  Create New Event
                </PrimaryButton>
              </div>
              <div
                style={{
                  flex: 1,
                  padding: "20px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img src={SLIDE_LOGO} width="200px" />
              </div>
            </div>
            <img
              src={SLIDE_ICON}
              width="48px"
              style={{ margin: "auto 20px 20px auto" }}
            />
          </Box>
        ))}
      </Carousel>
      <div style={{ backgroundColor: "#fff" }}>
        <Typography
          variant="h4"
          // fontWeight={600}
          color={"#404040"}
          textAlign={"center"}
          marginTop="20px"
          fontFamily="Krona One"
        >
          Events and Experiences
        </Typography>
        <Carousel
          NextIcon={<ChevronRight />}
          PrevIcon={<ChevronLeft />}
          navButtonsProps={{
            style: {
              backgroundColor: "#fff",
              opacity: 1,
              borderRadius: "50%",
              color: "#616161",
              boxShadow: "5px 10px 20px #00000029",
              "&:hover": {
                backgroundColor: "#023d65",
                color: "#fff",
                opacity: 1,
              },
            },
          }}
          navButtonsWrapperProps={{
            style: {
              bottom: 10,
              top: "unset",
            },
          }}
          indicatorIconButtonProps={{
            style: {
              bottom: "unset",
              top: -440,
              zIndex: 5,
              width: "60px",
              height: "4px",
              backgroundColor: "#f5fadf",
              color: "transparent",
              borderRadius: "10px",
            },
          }}
          indicatorContainerProps={{
            style: {
              width: "fit-content",
              bottom: "unset",
              margin: "auto",
              marginTop: "-40px",
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            },
          }}
          activeIndicatorIconButtonProps={{
            style: {
              width: "70px",
              borderRadius: "10px",
              backgroundColor: "#023d65",
              height: "6px",
              border: "none",
            },
          }}
        >
          {events.map((dataj, j) => (
            <div className="home-event-body">
              {new Array(3).fill(0).map((datai, i) => (
                <Card
                  sx={{
                    boxShadow: "0px 3px 30px #0000001F",
                    borderRadius: "20px",
                  }}
                  onClick={() => {
                    navigate(EVENT_DESC);
                  }}
                  elevation={0}
                  key={i}
                >
                  <CardActionArea className="action-area">
                    <div style={{ padding: "15px 15px 0 15px" }}>
                      <div className="parent">
                        <div
                          className="child"
                          style={{
                            backgroundImage: `url(${dataj})`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        margin: "6px 22px 0 22px",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        fontSize="15px"
                        fontWeight={600}
                        color="#023d65"
                      >
                        Feb 21, 23
                      </Typography>
                      <Typography
                        fontSize="15px"
                        fontWeight={600}
                        color="#023d65"
                      >
                        Join
                      </Typography>
                    </div>
                    <CardContent>
                      <Typography
                        variant="h6"
                        sx={{ color: "#404040", fontWeight: 600 }}
                      >
                        Event Heading
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Lorem ipsum dolor sit amet, consetetur sadip sci elitr,
                        sed diam nonumy eirmod tem por invidunt ut labore et
                        dolore magna aliquyam erat, seddia voluptua. At vero eos
                        et accusam et justo duo dolores et ea rebum. Stet clita
                        kasd
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
            </div>
          ))}
        </Carousel>
      </div>
      <div style={{ marginTop: "40px" }}>
        <Typography
          variant="h4"
          color={"#404040"}
          fontFamily="Krona One"
          textAlign={"center"}
        >
          Stories
        </Typography>
        <Carousel
          NextIcon={<ChevronRight />}
          PrevIcon={<ChevronLeft />}
          navButtonsProps={{
            style: {
              backgroundColor: "#fff",
              opacity: 1,
              borderRadius: "50%",
              color: "#616161",
              boxShadow: "5px 10px 20px #00000029",
              "&:hover": {
                backgroundColor: "#023d65",
                color: "#fff",
                opacity: 1,
              },
            },
          }}
          navButtonsWrapperProps={{
            style: {
              bottom: 10,
              top: "unset",
            },
          }}
          indicatorIconButtonProps={{
            style: {
              bottom: "unset",
              top: -440,
              zIndex: 5,
              width: "60px",
              height: "4px",
              backgroundColor: "#f5fadf",
              color: "transparent",
              borderRadius: "10px",
            },
          }}
          indicatorContainerProps={{
            style: {
              width: "fit-content",
              bottom: "unset",
              margin: "auto",
              marginTop: "-40px",
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            },
          }}
          activeIndicatorIconButtonProps={{
            style: {
              width: "70px",
              borderRadius: "10px",
              backgroundColor: "#023d65",
              height: "6px",
              border: "none",
            },
          }}
        >
          {events.map((dataj, j) => (
            <div className="home-event-body">
              {new Array(3).fill(0).map((datai, i) => (
                <Card
                  sx={{
                    boxShadow: "0px 3px 30px #0000001F",
                    borderRadius: "20px",
                  }}
                  elevation={0}
                  key={i}
                >
                  <CardActionArea className="action-area">
                    <div style={{ padding: "15px 15px 0 15px" }}>
                      <div className="parent">
                        <div
                          className="child"
                          style={{
                            backgroundImage: `url(${dataj})`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <CardContent>
                      <Typography
                        variant="h6"
                        sx={{ color: "#404040", fontWeight: 600 }}
                      >
                        Story Title
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Lorem ipsum dolor sit amet, consetetur sadip sci elitr,
                        sed diam nonumy.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <div style={{ padding: "10px" }}>
                        <PrimaryButton
                          sx={{
                            width: "190px",
                            fontWeight: "500",
                            fontFamily: "Krona One",
                          }}
                        >
                          Read More
                        </PrimaryButton>
                      </div>
                    </CardActions>
                  </CardActionArea>
                </Card>
              ))}
            </div>
          ))}
        </Carousel>
      </div>
      <div
        style={{
          marginTop: "30px",
          height: "60vh",
          backgroundImage: `url(${FOOTER_IMAGE})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center",
        }}
      >
        <div style={{ padding: "20px" }}>
          <Typography variant="h3" color="#f3f3f3" fontFamily="Krona One">
            Our Mission
          </Typography>
        </div>
        <Carousel
          indicatorIconButtonProps={{
            style: {
              bottom: "unset",
              top: -160,
              zIndex: 5,
              width: "60px",
              height: "4px",
              backgroundColor: "#f5fadf",
              color: "transparent",
              borderRadius: "10px",
            },
          }}
          indicatorContainerProps={{
            style: {
              width: "fit-content",
              bottom: "unset",
              margin: "auto",
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            },
          }}
          activeIndicatorIconButtonProps={{
            style: {
              width: "70px",
              borderRadius: "10px",
              backgroundColor: "#023d65",
              height: "6px",
              border: "none",
            },
          }}
          navButtonsAlwaysInvisible
        >
          {new Array(3).fill(0).map((data, i) => (
            <div
              style={{
                padding: "10px 100px",
                margin: "20px",
                color: "#f3f3f3",
                zIndex: 2,
              }}
            >
              <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic
              </Typography>
              <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic
              </Typography>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
