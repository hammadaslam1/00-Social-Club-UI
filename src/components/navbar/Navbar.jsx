import scLogo01 from "../../assets/logos/scLogo01.png";
import Search from "../inputs/Search";
import { AppBar, Avatar, Button, Toolbar } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { CREATE_EVENT, EVENTS, STORIES, VENUES } from "../../routes/Routes";
import SecondaryButton from "../buttons/SecondaryButton";
import Login from "../dialogs/Login";
import { useState } from "react";
import { useSelector } from "react-redux";
import Signup from "../dialogs/Signup";

const Navbar = () => {
  const user = useSelector((state) => state.UserReducer.user);
  const navigate = useNavigate()
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
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  const [create, setCreate] = useState(false)

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
          <Button style={{ padding: "0" }}>
            <Link to={VENUES} style={links}>
              Venues
            </Link>
          </Button>
          <Button style={{ padding: "0" }}>
            <Link to={EVENTS} style={links}>
              Events
            </Link>
          </Button>
          <Button style={{ padding: "0", marginRight: "20px" }}>
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
                  onClick={()=>{
                    setCreate(true)
                    navigate(CREATE_EVENT)
                  }}
                />
              ) : (
                ""
              )}
              <Avatar />
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
