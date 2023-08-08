import { Button } from "@mui/material";

const FilterButton = ({sx={}, ...props}) => {
    return ( 
        <Button
      sx={{
        borderRadius: "0px",
        border: '1px solid #707070',
        fontWeight: "700",
        backgroundColor: "#fff",
        // width: "140px",
        color: "#023d65",
        textTransform: 'capitalize',
        "&:focus": { backgroundColor: "#023d65", color: '#fff', border: '1px solid #023d65', },
        ...sx,
      }}
      {...props}
    >
      {props.children}
    </Button>
     );
}
 
export default FilterButton;