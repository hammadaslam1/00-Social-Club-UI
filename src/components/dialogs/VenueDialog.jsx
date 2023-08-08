import { Box, Dialog, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Search from "../inputs/Search";
import PrimaryButton from '../buttons/PrimaryButton'

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
            <button style={{ textDecoration: "underline" }}>reset</button>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(10, 1fr)",
            marginTop: "-35px",
          }}
        >
          <Search
            sx={{
              gridColumn: "2/10",
              height: "40px",
              backgroundColor: "#fff",
              color: "#555555",
              borderRadius: "5px",
              boxShadow: "0px 3px 6px #00000029",
              marginLeft: "0",
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
      <div>asdf</div>
      <Box sx={{ padding: 5 }}></Box>
      <div
        style={{
          position: "sticky",
          bottom: "0",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            height: "84px",
            display: "flex",
            backgroundColor: 'red',
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
            <PrimaryButton sx={{height: '60px', width: '500px', fontWeight: '600'}}>Apply filters</PrimaryButton>
        </div>
      </div>
    </Dialog>
  );
};

export default VenueDialog;
