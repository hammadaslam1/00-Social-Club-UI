import scLogo01 from "../../assets/logos/scLogo01.png";
import PROFILE_PIC from "../../assets/profile/profilePic03.png";
import "./navbar.css";
import { TbLogin, TbLogout } from "react-icons/tb";
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
import {
  ACCOUNT_INFO,
  CREATE_EVENT,
  EDIT_PROFILE,
  EVENTS,
  HOME,
  MY_EVENTS,
  STORIES,
  VENUES,
} from "../../routes/Routes";
import SecondaryButton from "../buttons/SecondaryButton";
import Login from "../dialogs/Login";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Signup from "../dialogs/Signup";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PrimaryButton from "../buttons/PrimaryButton";
import { ADD_USER } from "../../redux/Types/Types";

const Navbar = () => {
  const user = useSelector((state) => state.UserReducer.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const links = {
    color: "#fff",
    textDecoration: "none",
    textTransform: "capitalize",
    padding: "23px",
    fontWeight: "700",
    "&:hover": {
      backgroundColor: "#fff2",
    },
  };

  const menuStyles = {
    textAlign: "left",
    textTransform: "capitalize",
    color: "#023d65",
    width: "100%",
    fontSize: "16px",
    fontWeight: "bold",
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
      className="xs:px-[5px] sm:px-[10px] md:px-[20px] w-full"
      position="sticky"
      sx={{
        backgroundColor: "#023d65",
        top: "0",
        left: "0",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", padding: "7px" }}>
          <img src={scLogo01} className="w-[120px] sm:w-[150px]" />
          <div className="hidden md:flex">
            <Search sx={{ marginLeft: 2, width: '30ch' }} />
          </div>
        </div>
        <div className="flex justify-around items-center font-['Helvetica'] ">
          <div className=" hidden lg:flex justify-around items-center font-['Helvetica'] ">
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
          </div>
          {!user ? (
            <div className="flex justify-around items-center">
              <div className=" hidden lg:flex justify-around items-center font-['Helvetica'] ">
                <SecondaryButton children="Login" onClick={handleLogin} />
              </div>
              <div className=" flex lg:hidden justify-around items-center font-['Helvetica'] ">
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  endIcon={
                    !open ? (
                      <KeyboardArrowDownIcon sx={{ color: "#fff" }} />
                    ) : (
                      <KeyboardArrowUpIcon sx={{ color: "#fff" }} />
                    )
                  }
                  onClick={handleClick}
                  disableRipple={true}
                >
                  <Avatar sx={{ width: 52, height: 52 }} />
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <div className="menu-div">
                    <Button
                      sx={menuStyles}
                      size="small"
                      onClick={() => {
                        setCreate(false);
                        setAnchorEl(null);
                        navigate(VENUES);
                      }}
                    >
                      Venues
                    </Button>
                    <Button
                      sx={menuStyles}
                      size="small"
                      onClick={() => {
                        setCreate(false);
                        setAnchorEl(null);
                        navigate(EVENTS);
                      }}
                    >
                      Events
                    </Button>
                    <Button
                      onClick={() => {
                        setAnchorEl(null);
                        navigate(STORIES);
                        setCreate(false);
                      }}
                      sx={menuStyles}
                      size="small"
                    >
                      Stories
                    </Button>
                    <Button
                      onClick={() => {
                        handleLogin();
                        setAnchorEl(null);
                      }}
                      sx={menuStyles}
                      startIcon={<TbLogin />}
                      size="small"
                    >
                      Login
                    </Button>
                  </div>
                </Menu>
              </div>
            </div>
          ) : (
            <>
              {!create ? (
                <div className="hidden sm:flex">
                  <SecondaryButton
                    children="Create Event"
                    sx={{ marginRight: "25px", width: "160px" }}
                    onClick={() => {
                      setCreate(true);
                      navigate(CREATE_EVENT);
                    }}
                  />
                </div>
              ) : (
                ""
              )}
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                endIcon={
                  !open ? (
                    <KeyboardArrowDownIcon sx={{ color: "#fff" }} />
                  ) : (
                    <KeyboardArrowUpIcon sx={{ color: "#fff" }} />
                  )
                }
                onClick={handleClick}
                disableRipple={true}
              >
                <Avatar src={PROFILE_PIC} sx={{ width: 52, height: 52 }} />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <div className="menu-div">
                  <div className="menu-avatar">
                    <Avatar
                      src={PROFILE_PIC}
                      sx={{ marginLeft: "20px", width: 52, height: 52 }}
                    />
                    <div className="menu-profile">
                      <Typography
                        fontSize={15}
                        fontWeight={600}
                        color={"#023d65"}
                      >
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
                        onClick={() => {
                          setCreate(false);
                          setAnchorEl(null);
                          navigate(EDIT_PROFILE);
                        }}
                      >
                        Edit Profile
                      </PrimaryButton>
                    </div>
                  </div>
                  <Button
                    sx={menuStyles}
                    size="small"
                    onClick={() => {
                      setCreate(false);
                      setAnchorEl(null);
                      navigate(ACCOUNT_INFO);
                    }}
                  >
                    Account Information
                  </Button>
                  <Button
                    sx={menuStyles}
                    size="small"
                    onClick={() => {
                      setCreate(false);
                      setAnchorEl(null);
                      navigate(MY_EVENTS);
                    }}
                  >
                    My Event
                  </Button>
                  {!create ? (
                    <div className="sm:hidden">
                      <Button
                        sx={menuStyles}
                        size="small"
                        onClick={() => {
                          setCreate(true);
                          setAnchorEl(null);
                          navigate(CREATE_EVENT);
                        }}
                      >
                        Create Event
                      </Button>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="lg:hidden">
                    <Button
                      sx={menuStyles}
                      size="small"
                      onClick={() => {
                        setCreate(false);
                        setAnchorEl(null);
                        navigate(VENUES);
                      }}
                    >
                      Venues
                    </Button>
                    <Button
                      sx={menuStyles}
                      size="small"
                      onClick={() => {
                        setCreate(false);
                        setAnchorEl(null);
                        navigate(EVENTS);
                      }}
                    >
                      Events
                    </Button>
                    <Button
                      onClick={() => {
                        setAnchorEl(null);
                        navigate(STORIES);
                        setCreate(false);
                      }}
                      sx={menuStyles}
                      size="small"
                    >
                      Stories
                    </Button>
                  </div>
                  <Button sx={menuStyles} size="small">
                    Help
                  </Button>
                  <Button
                    sx={menuStyles}
                    size="small"
                    startIcon={<TbLogout />}
                    onClick={() => {
                      dispatch({
                        type: ADD_USER,
                        payload: false,
                      });
                      navigate(HOME);
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
