export type Customer = {
  Id: number
  Name: string
  Address: string
  PhoneNo: string
  IsActive: boolean
  PaymentRcv:number
  PendingPayment:number
  TotalBill:number
  Discount: number
  ProfitFromCustomer: number
}
export const initialCustomer: Customer = {
  Id: 0,
  Name: '',
  Address: '',
  PhoneNo: '',
  IsActive: false,
  PaymentRcv: 0,
  PendingPayment: 0,
  TotalBill: 0,
  Discount: 0,
  ProfitFromCustomer: 0
}
