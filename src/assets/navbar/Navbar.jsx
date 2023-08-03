import scLogo01 from "../logos/scLogo01.png";
import Search from "../components/inputs/Search";
import { AppBar, Button, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import { EVENTS, STORIES, VENUES } from "../components/routes/Routes";
import Buttons from "../components/buttons/Button";
import Login from "../screens/Login";
import { useState } from "react";

const Navbar = () => {
  const links = {
    color: "#fff",
    textDecoration: "none",
    padding: "23px",
    fontWeight: "700",
    "&:hover": {
      backgroundColor: "#fff2",
    },
  };
  const [open, setOpen] = useState(false);
  const handleLogin = () => {
    setOpen(true);
  };
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#023d65",
        width: "100%",

        top: "0",
        left: "0",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
        <div className="" style={{ display: "flex", alignItems: "center" }}>
          <img src={scLogo01} height="50px" />
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
          <Button style={{ padding: "0" }}>
            <Link to={STORIES} style={links}>
              Stories
            </Link>
          </Button>
          <Buttons
            children="Login"
            function={handleLogin}
            sx={{
              borderRadius: "8px",
              backgroundColor: "#fff",
              width: "140px",
              fontWeight: "700",
              color: "#023d65",
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
            // size={'medium'}
          />
          {open ? <Login open={open} setOpen={setOpen} /> : ""}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
