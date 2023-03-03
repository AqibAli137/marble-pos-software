export type Item = {
  Id: number;
  ItemName: string;
  CostOfItem: number;
  RealItemCost:number
  TotalQuantity: number;
  TotalAmount: number;
  TypeOfItem:string
};

export const initialItem: Item = {
  Id: 0,
  ItemName: "",
  CostOfItem: 0,
  RealItemCost: 0,
  TotalQuantity: 0,
  TotalAmount: 0,
  TypeOfItem: ""
};


