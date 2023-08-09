import { Box, Card } from "@mui/material";
import DESC_IMAGE from '../assets/event/description02.png'
import MAP_IMAGE from '../assets/event/map02.png'

const EventDescription = () => {
    return ( 
        <Card className="create-main" sx={{padding: '20px'}}>
            <Box>
                <div style={{
                    height: '60vh',
                    backgroundImage: `url(${DESC_IMAGE})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'contain'
                }}></div>
            </Box>
        </Card>
     );
}
 
export default EventDescription;