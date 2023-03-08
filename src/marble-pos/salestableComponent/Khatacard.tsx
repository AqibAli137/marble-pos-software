import { Card, CardContent, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const  Khatacard=()=> {

  
  let NewCustomerState = useSelector((store: RootState) => store.Customer);

  return (
    <div className='mb-2 row d-flex justify-content-center align-item-center '>
        <Card sx={{width:"90%"}} style={{fontFamily:"'Noto Nastaliq Urdu', serif"}}>
      <CardContent className='d-flex flex-row-reverse align-items-center'>
        <Typography className='mx-2' gutterBottom variant="h6" component="div" style={{fontFamily:"'Noto Nastaliq Urdu', serif"}}>
       : ٹوٹل رقم 
        </Typography>
        <Typography className='mx-2' variant="body2" color="text.secondary">
        {NewCustomerState.NewOrderCustomer.totalBill}
        </Typography>
      </CardContent>
      <CardContent className='d-flex flex-row-reverse align-items-center'>
        <Typography className='mx-2' gutterBottom variant="h6" component="div" style={{fontFamily:"'Noto Nastaliq Urdu', serif"}}>
        : وصول رقم
        </Typography>
        <Typography className='mx-2' variant="body2" color="text.secondary">
        {NewCustomerState.NewOrderCustomer.paymentRcv}
        </Typography>
      </CardContent>
      <CardContent className='d-flex flex-row-reverse align-items-center'>
        <Typography className='mx-2' gutterBottom variant="h6" component="div" style={{fontFamily:"'Noto Nastaliq Urdu', serif"}}>
        :بقایا رقم
        </Typography>
        <Typography className='mx-2' variant="body2" color="text.secondary">
        {NewCustomerState.NewOrderCustomer.pendingPayment}
        </Typography>
      </CardContent>
      <CardContent className='d-flex flex-row-reverse align-items-center'>
        <Typography className='mx-2' gutterBottom variant="h6" component="div" style={{fontFamily:"'Noto Nastaliq Urdu', serif"}}>
       : رعایت
        </Typography>
        <Typography className='mx-2' variant="body2" color="text.secondary">
        {NewCustomerState.NewOrderCustomer.discount}
        {console.log(NewCustomerState.NewOrderCustomer)
        }
        </Typography>
      </CardContent>
      {NewCustomerState.WithOutProfit && <CardContent className='d-flex flex-row-reverse align-items-center'>
        <Typography className='mx-2' gutterBottom variant="h6" component="div" style={{fontFamily:"'Noto Nastaliq Urdu', serif"}}>
       : بچت	
        </Typography>
        <Typography className='mx-2' variant="body2" color="text.secondary">
        {NewCustomerState.NewOrderCustomer.profitFromCustomer}
        </Typography>
      </CardContent>}
      <div
          className="d-flex align-items-end"
        >
          <span className="mt-2">دستخط ۔۔۔۔۔۔۔۔۔۔۔۔۔۔۔۔۔۔۔۔</span>
        </div>
    </Card>
    </div>
    
  );
}
export default Khatacard;