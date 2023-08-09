import { Box, Button, Dialog, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Search from "../inputs/Search";
import PrimaryButton from "../buttons/PrimaryButton";
import FilterButton from "../buttons/FilterButton";

const VenueDialog = ({ openDialog, setOpenDialog }) => {
  const handleClose = () => {
    setOpenDialog(false);
  };
  return (
    <Dialog
      open={openDialog}
      //   TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      scroll="paper"
      PaperProps={{
        sx: {
          borderRadius: "10px",
          //   display: "flex",
          //   flexDirection: "column",
          height: "560px",
          maxWidth: "500px",
          overflowX: "hidden",
        },
      }}
    >
      <div
        style={{
          position: "sticky",
          top: "0",
          display: "flex",
          flexDirection: "column",
          zIndex: '1'
        }}
      >
        <div
          style={{
            height: "127px",
            width: "650px",
            alignSelf: "center",
            backgroundColor: "#023d65",
            borderBottomLeftRadius: "70%",
            borderBottomRightRadius: "70%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            color: "#fff",
          }}
        >
          <div
            style={{
              width: "390px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" fontWeight={600} sx={{ color: "#fff" }}>
              Category
            </Typography>
            <Button style={{ textDecoration: "underline", color: '#fff', textTransform: 'capitalize' }} disableRipple>reset</Button>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: '100%',
            marginTop: "-35px",
            justifyContent: 'center'
          }}
        >
          <Search
            sx={{
              height: "40px",
              backgroundColor: "#fff",
              color: "#555555",
              borderRadius: "5px",
              boxShadow: "0px 3px 6px #00000029",
              "&:hover": {
                backgroundColor: "#fff",
              },
            }}
            ph="Madrid, Paris, London"
          />
        </div>
        <IconButton
          sx={{
            width: "fit-content",
            position: "absolute",
            top: 10,
            right: 10,
          }}
          onClick={handleClose}
        >
          <CloseIcon sx={{ textAlign: "right", color: "#fff" }} />
        </IconButton>
      </div>
      <Box sx={{ padding: '20px 40px 0px 40px' }}>
        <Typography variant="h6" fontWeight={600}>
          Distance
        </Typography>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'}}>
          <FilterButton>2 miles</FilterButton>
          <FilterButton>5 miles</FilterButton>
          <FilterButton>10 miles</FilterButton>
          <FilterButton>Anywhere</FilterButton>
        </div>
      </Box>
      <Box sx={{ padding: '20px 40px 0px 40px' }}>
        <Typography variant="h6" fontWeight={600}>
          Alcohol Type
        </Typography>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>
          <FilterButton>Alcohol Free</FilterButton>
          <FilterButton>Mixed Company</FilterButton>
        </div>
      </Box>
      <Box sx={{ padding: '20px 40px 0px 40px' }}>
        <Typography variant="h6" fontWeight={600}>
          Vibe (type)
        </Typography>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'}}>
          <FilterButton>Activity</FilterButton>
          <FilterButton>Social</FilterButton>
          <FilterButton>Dance</FilterButton>
          <FilterButton>Food</FilterButton>
          <FilterButton>Bev</FilterButton>
          <FilterButton>Sports</FilterButton>
          <FilterButton>Educational</FilterButton>
        </div>
      </Box>
      <Box sx={{ padding: '20px 40px 0px 40px' }}>
        <Typography variant="h6" fontWeight={600}>
          Event Size
        </Typography>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'}}>
          <FilterButton>1-10</FilterButton>
          <FilterButton>10-25</FilterButton>
          <FilterButton>25-50</FilterButton>
          <FilterButton>50-100</FilterButton>
          <FilterButton>100+</FilterButton>
        </div>
      </Box>
      <div
        style={{
          position: "sticky",
          bottom: "0",
          height: "84px",
          width: "500px",
          display: "flex",
          backgroundColor: "#fff",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          boxShadow: "0px -3px 6px #00000029",
        }}
      >
        <PrimaryButton
          sx={{
            height: "60px",
            width: "500px",
            fontWeight: "500",
            fontSize: "16px",
          }}
        >
          Apply filters
        </PrimaryButton>
      </div>
    </Dialog>
  );
};

export default VenueDialog;
