import scLogo01 from "../../assets/logos/scLogo01.png";
import "./navbar.css";
import { TbLogin } from "react-icons/tb";
import Search from "../inputs/Search";
import {
  AppBar,
  Avatar,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { CREATE_EVENT, EDIT_PROFILE, EVENTS, MY_EVENTS, STORIES, VENUES } from "../../routes/Routes";
import SecondaryButton from "../buttons/SecondaryButton";
import Login from "../dialogs/Login";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Signup from "../dialogs/Signup";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PrimaryButton from "../buttons/PrimaryButton";
import { ADD_USER } from "../../redux/Types/Types";

const Navbar = () => {
  const user = useSelector((state) => state.UserReducer.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(user);
  const links = {
    color: "#fff",
    textDecoration: "none",
    padding: "23px",
    fontWeight: "700",
    "&:hover": {
      backgroundColor: "#fff2",
    },
  };
  const [openLogin, setOpenLogin] = useState(true);
  const [openSignup, setOpenSignup] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [create, setCreate] = useState(false);

  const handleLogin = () => {
    if (!user) {
      setOpenLogin(true);
    }
  };
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#023d65",
        width: "100%",

        top: "0",
        left: "0",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
        <div className="" style={{ display: "flex", alignItems: "center" }}>
          <img src={scLogo01} width="160px" />
          <Search />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            fontFamily: "Helvetica",
          }}
        >
          <Button
            style={{ padding: "0" }}
            onClick={() => {
              setCreate(false);
            }}
          >
            <Link to={VENUES} style={links}>
              Venues
            </Link>
          </Button>
          <Button
            style={{ padding: "0" }}
            onClick={() => {
              setCreate(false);
            }}
          >
            <Link to={EVENTS} style={links}>
              Events
            </Link>
          </Button>
          <Button
            style={{ padding: "0", marginRight: "20px" }}
            onClick={() => {
              setCreate(false);
            }}
          >
            <Link to={STORIES} style={links}>
              Stories
            </Link>
          </Button>
          {!user ? (
            <SecondaryButton children="Login" onClick={handleLogin} />
          ) : (
            <>
              {!create ? (
                <SecondaryButton
                  children="Create Event"
                  sx={{ marginRight: "25px", width: "160px" }}
                  onClick={() => {
                    setCreate(true);
                    navigate(CREATE_EVENT);
                  }}
                />
              ) : (
                ""
              )}
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon sx={{ color: "#f5fadf" }} />}
                disableRipple={true}
              >
                <Avatar />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                // sx={{ width: "200px" }}
              >
                <div className="menu-div">
                  <div className="menu-avatar">
                    <Avatar sx={{ marginLeft: "20px" }} />
                    <div className="menu-profile">
                      <Typography fontSize={14} fontWeight={600}>
                        Ms. Janvi
                      </Typography>
                      <PrimaryButton
                        size="small"
                        sx={{
                          width: "fit-content",
                          textTransform: "capitalize",
                          fontSize: "10px",
                          borderRadius: "4px",
                          fontWeight: "500",
                        }}
                        onClick={()=>{
                          setAnchorEl(null);
                          navigate(EDIT_PROFILE);
                        }}
                      >
                        Edit Profile
                      </PrimaryButton>
                    </div>
                  </div>
                  <Button
                    sx={{
                      textTransform: "capitalize",
                      color: "black",
                      textAlign: "left",
                    }}
                    size="small"
                    onClick={()=>{
                      setAnchorEl(null);
                      navigate(MY_EVENTS)
                    }}
                  >
                    My Event
                  </Button>
                  <Button
                    sx={{
                      textTransform: "capitalize",
                      color: "black",
                      textAlign: "left",
                    }}
                    size="small"
                  >
                    Help
                  </Button>
                  <Button
                    sx={{
                      textTransform: "capitalize",
                      color: "black",
                      textAlign: "left",
                    }}
                    size="small"
                    startIcon={<TbLogin />}
                    onClick={() => {
                      dispatch({
                        type: ADD_USER,
                        payload: false,
                      });
                    }}
                  >
                    Logout
                  </Button>
                </div>
              </Menu>
            </>
          )}
        </div>
      </Toolbar>
      {openLogin ? (
        <Login
          openLogin={openLogin}
          setOpenLogin={setOpenLogin}
          openSignup={openSignup}
          setOpenSignup={setOpenSignup}
        />
      ) : (
        ""
      )}
      {openSignup ? (
        <Signup
          openSignup={openSignup}
          setOpenSignup={setOpenSignup}
          openLogin={openLogin}
          setOpenLogin={setOpenLogin}
        />
      ) : (
        ""
      )}
    </AppBar>
  );
};

export default Navbar;
