import { Box, Card, IconButton, Switch, Typography } from '@mui/material';
import './screens.css'
import Search from '../components/inputs/Search';
import TuneIcon from '@mui/icons-material/Tune';
import VENUE_IMAGE from '../assets/images/venueImage01.png'

const Venues = () => {
    const dates = ['Friday, march 10', 'Saturday, March 11', 'Tuesday, March 14', 'Thursday, March 16', 'Sunday, March 19']
    return (
        <Card className="create-main" elevation={false}>
            <Box className="create-box" sx={{ width: '600px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 2fr)', gap: '5px 5px', alignItems: 'center' }}>
                    <Search ph='Search for "keywords"' sx={{ gridColumn: '1/10', height: '90%', backgroundColor: '#f8f8f8', borderRadius: '5px', border: '1px solid #E1E1E1', color: '#808080', "&:hover": { backgroundColor: '#f8f8f8', borderRadius: '5px', border: '1px solid #E1E1E1', } }} />
                    <IconButton size='large' sx={{ gridColumn: '10/11' }} disableRipple><TuneIcon /></IconButton>
                    <Typography variant='body2' sx={{ gridColumn: '1/10', textAlign: 'right' }}>Suggested Events</Typography>
                    <Switch />
                </div>
                {new Array(5).fill(0).map((e, i) => (
                    <>
                        <Typography variant='h5'>{dates[i]}</Typography>
                        <div style={{ borderBottom: '1px solid #707070', padding: '5px' }}></div>
                        <img src={VENUE_IMAGE} />
                    </>
                ))}
            </Box>
        </Card>
    );
};

export default Venues;
