import { Card, CardContent, Typography } from '@mui/material';

const  Khatacard=()=> {
  return (
    <div className='my-3 row d-flex justify-content-center align-item-center '>
        <Card sx={{width:"90%"}} style={{fontFamily:"'Noto Nastaliq Urdu', serif"}}>
      <CardContent className='d-flex flex-row-reverse align-items-center'>
        <Typography className='mx-2' gutterBottom variant="h6" component="div" style={{fontFamily:"'Noto Nastaliq Urdu', serif"}}>
       : ٹوٹل رقم 
        </Typography>
        <Typography className='mx-2' variant="body2" color="text.secondary">
           1000
        </Typography>
      </CardContent>
      <CardContent className='d-flex flex-row-reverse align-items-center'>
        <Typography className='mx-2' gutterBottom variant="h6" component="div" style={{fontFamily:"'Noto Nastaliq Urdu', serif"}}>
        : وصول رقم
        </Typography>
        <Typography className='mx-2' variant="body2" color="text.secondary">
         500
        </Typography>
      </CardContent>
      <CardContent className='d-flex flex-row-reverse align-items-center'>
        <Typography className='mx-2' gutterBottom variant="h6" component="div" style={{fontFamily:"'Noto Nastaliq Urdu', serif"}}>
        :بقایا رقم
        </Typography>
        <Typography className='mx-2' variant="body2" color="text.secondary">
           500
        </Typography>
      </CardContent>
      <CardContent className='d-flex flex-row-reverse align-items-center'>
        <Typography className='mx-2' gutterBottom variant="h6" component="div" style={{fontFamily:"'Noto Nastaliq Urdu', serif"}}>
       : رعایت
        </Typography>
        <Typography className='mx-2' variant="body2" color="text.secondary">
          0
        </Typography>
      </CardContent>
      <CardContent className='d-flex flex-row-reverse align-items-center'>
        <Typography className='mx-2' gutterBottom variant="h6" component="div" style={{fontFamily:"'Noto Nastaliq Urdu', serif"}}>
       : بچت	
        </Typography>
        <Typography className='mx-2' variant="body2" color="text.secondary">
          0
        </Typography>
      </CardContent>
      
    </Card>
    </div>
    
  );
}
export default Khatacard;