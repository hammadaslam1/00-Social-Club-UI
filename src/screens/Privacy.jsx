import { Box, Card, Typography } from "@mui/material";
import BACK_IMAGE from "../assets/backgroundImage/scBack02.png";
import './screens.css'

const Privacy = () => {
  return (
    <Card className="create-main" sx={{ padding: "20px", marginX: "100px", boxShadow: '0px 3px 30px #0000001F' }}>
      <Box
        sx={{
          height: "80vh",
          backgroundImage: `url(${BACK_IMAGE})`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          border: "1px solid #023d65",
          padding: "20px",
          overflowY: 'scroll'
        }}
      >
        <Typography
          variant="h3"
          textAlign="center"
          fontWeight={600}
          letterSpacing={1.5}
          marginBottom='40px'
        >
          Privacy Policy
        </Typography>
        <Typography fontSize="16px" marginTop="10px" lineHeight={1.2}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet,
        </Typography>
        <Typography fontSize="16px" marginTop="10px" lineHeight={1.2}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet,
        </Typography>
        <Typography fontSize="16px" marginTop="10px" lineHeight={1.2}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore
        </Typography>
        <ul style={{width: '80%', margin: 'auto', listStyle: 'disc'}}>
          {new Array(6).fill(0).map((i) => (
            <li>
              <Typography fontSize="16px" marginTop="10px" lineHeight={1.2}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed
              </Typography>
            </li>
          ))}
        </ul>
      </Box>
    </Card>
  );
};

export default Privacy;
