export type Customer = {
  Id: number
  Name: string
  Address: string
  PhoneNo: string
  IsActive: boolean
  PaymentRcv:number
  PendingPayment:number
  CustomerOrders:[
    {
        Id:number
        ItemName:string
        ItemQuantity:number
        SetPrice:number
        YourBill:number
    }
  ]

}
export const initialCustomer: Customer = {
  Id: 0,
  Name: '',
  Address: '',
  PhoneNo: '',
  IsActive: false,
  PaymentRcv: 0,
  PendingPayment: 0,
  CustomerOrders: [
    {
      Id:0,
      ItemName:'',
      ItemQuantity:0,
      SetPrice:0,
      YourBill:0
  }
  ]
}
