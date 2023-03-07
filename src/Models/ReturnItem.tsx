export type ReturnItem = {
    id: number;
    itemId: number;
    customerId: number;
    returnQuantity: number;
    returnPrice: number;
    totalAmount: number;
    returnDate?: string;
  }
  export const initialCustomer: ReturnItem = {
      id: 0,
      itemId: 0,
      customerId: 0,
      returnQuantity: 0,
      returnPrice: 0,
      totalAmount: 0,
      returnDate:''
  }