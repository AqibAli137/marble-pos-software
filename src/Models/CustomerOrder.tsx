export type CustomerOrder = {
  Id: number;
  ItemId: number;
  CustomerId: number;
  ItemName: string;
  ItemQuantity: number;
  OrderDate: string;
  SetPrice: number;
  Yourbill: number;
  GatePassNumber: string;
  Profit: number;
};

export const initialCustomerOrder: CustomerOrder = {
  Id: 0,
  ItemId: 0,
  CustomerId: 0,
  ItemQuantity: 0,
  SetPrice: 0,
  Yourbill: 0,
  Profit: 0,
  ItemName: "",
  OrderDate: "",
  GatePassNumber: "",
};
