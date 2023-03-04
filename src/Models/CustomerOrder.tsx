export type CustomerOrder = {
  Id: number;
  ItemId: number;
  CustomerId: number;
  ItemName: string;
  ItemQuantity: number;
  OrderDate: string;
  SetPrice: number;
  YourBill: number;
  GatePassNumber: string;
  Profit: number;
};

export const initialCustomerOrder: CustomerOrder = {
  Id: 0,
  ItemId: 0,
  CustomerId: 0,
  ItemQuantity: 0,
  SetPrice: 0,
  YourBill: 0,
  Profit: 0,
  ItemName: "",
  OrderDate: "",
  GatePassNumber: "",
};
