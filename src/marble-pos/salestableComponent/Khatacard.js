import { Card, CardContent, Typography } from '@mui/material';

function  Khatacard() {
  return (
    <div className='my-3 row d-flex justify-content-center align-item-center'>
        <Card sx={{width:"90%"}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Total Amount
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rs. 1000
        </Typography>
      </CardContent>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Received Amount
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rs. 500
        </Typography>
      </CardContent>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Remaining Amount
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rs. 500
        </Typography>
      </CardContent>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Compliance
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Yes
        </Typography>
      </CardContent>
    </Card>
    </div>
    
  );
}
export default Khatacard;