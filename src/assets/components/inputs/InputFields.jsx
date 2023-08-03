import { Input, TextField } from '@mui/material';

const InputField = (props ) => {
    
    return ( 
        <TextField variant="plain" type="password" inputProps={props} />
     );
}
 
export default InputField;