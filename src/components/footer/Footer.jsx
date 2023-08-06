import { Box, Button, ButtonGroup, Toolbar, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import "./footer.css";
import { useNavigate } from "react-router-dom";
import { CONTACT_US } from '../../routes/Routes'
import BACK_IMAGE from '../../assets/backgroundImage/scBack01.png'

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
        
        <div className="footer-div">
          <ButtonGroup variant="plain" className="btn-group" aria-label="text button group">
            <Button sx={{textTransform: 'capitalize', fontSize: '20px'}} disableRipple>About us</Button>
            <div className="line"></div>
            <Button sx={{textTransform: 'capitalize', fontSize: '20px'}} onClick={()=>{
                navigate(CONTACT_US);
            }} disableRipple>Contact us</Button>
            <div className="line"></div>
            <Button  disableRipple><InstagramIcon fontSize="medium"/></Button>
          </ButtonGroup>
          <Typography variant="subtitle1" fontWeight={500}>
            By signing up, you agree to <a href="">Terms of Service</a>,{" "}
            <a href="">Privacy Policy</a>, and <a href="">Cookie Policy</a>,
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
