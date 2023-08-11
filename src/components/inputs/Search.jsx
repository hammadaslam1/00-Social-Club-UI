import { InputBase, alpha, styled } from "@mui/material";
import { FiSearch } from "react-icons/fi";

const Search = ({ sx = {}, ph = "", ...props }) => {
  const SearchBar = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    
    // width: "100%",
    // [theme.breakpoints.up("sm")]: {
    //   marginLeft: theme.spacing(0),
    //   width: "auto",
    // },
    // [theme.breakpoints.up("md")]: {
    //   marginLeft: theme.spacing(0),
    //   width: "auto",
    // },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 1.5),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1.5, 1, 1.5, 1),
      paddingLeft: `calc(1em + ${theme.spacing(3)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      height: '100%',
      
      // [theme.breakpoints.up("md")]: {
      //   width: "30ch",
      //   "&:focus": {
      //     width: "30ch",
      //   },
      // },
    },
  }));
  return (
    <SearchBar
      sx={{
        // height: "50%",
        backgroundColor: "#00000039",
        color: "white",
        borderRadius: "5px",
        alignItems: "center",
        ...sx,
      }}
    >
      <SearchIconWrapper>
        <FiSearch fontSize={props.fontSize} />
      </SearchIconWrapper>
      <StyledInputBase
        sx={{ fontSize: "13px", width: '100%', }}
        placeholder={ph ? ph : "Search for 'New Events'"}
        inputProps={{ "aria-label": "search" }}
      />
    </SearchBar>
  );
};

export default Search;
