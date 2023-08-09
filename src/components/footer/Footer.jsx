import { Box, Button, ButtonGroup, Toolbar, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./footer.css";
import { Link, useNavigate } from "react-router-dom";
import { ABOUT_US, CONTACT_US, HOME, PRIVACY } from "../../routes/Routes";
import FOOTER_IMAGE from "../../assets/logos/footerLogo01.png";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        backgroundColor: "#023d65",
        width: "100%",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
        <div className="footer-image">
          <img src={FOOTER_IMAGE} style={{cursor: 'pointer'}} onClick={()=>{
            navigate(HOME)
          }} />
        </div>
        <div className="footer-div">
          <ButtonGroup
            variant="plain"
            className="btn-group"
            aria-label="text button group"
          >
            <Button
              sx={{ textTransform: "capitalize", fontSize: "20px" }}
              onClick={() => {
                navigate(ABOUT_US);
              }}
              disableRipple
            >
              About us
            </Button>
            <div className="line"></div>
            <Button
              sx={{ textTransform: "capitalize", fontSize: "20px" }}
              onClick={() => {
                navigate(CONTACT_US);
              }}
              disableRipple
            >
              Contact us
            </Button>
            <div className="line"></div>
            <Button disableRipple>
              <InstagramIcon fontSize="medium" />
            </Button>
          </ButtonGroup>
          <Typography variant="subtitle1" fontWeight={500}>
            By signing up, you agree to <Link to={PRIVACY}>Terms of Service</Link>,{" "}
            <Link to={PRIVACY}>Privacy Policy</Link>, and <Link to={PRIVACY}>Cookie Policy</Link>,
          </Typography>
          <Typography variant="subtitle1" fontWeight={500}>
            Copyright@Lorem Ipsum is simply dummy tex
          </Typography>
        </div>
      </Toolbar>
    </Box>
  );
};

export default Footer;
