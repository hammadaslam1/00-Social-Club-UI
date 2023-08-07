import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import DETAIL_IMAGE from "../assets/images/detail01.png";

const StoryDetail = () => {
  return (
    <Card className="create-main" elevation={false}>
      <Box className="details-box">
        <div style={{ padding: "15px 15px 0 15px" }}>
          <CardMedia component="img" image={DETAIL_IMAGE} alt="" />
        </div>
        <CardContent>
          <Typography variant="h6" sx={{ color: "#404040", fontWeight: '700', fontSize: '21px', width: '600px' }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </Typography>
          <Typography variant="caption" sx={{ color: "#404040" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchang...
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default StoryDetail;
