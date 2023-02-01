export type Item = {
  Id: number;
  ItemName: string;
  CostOfItem: number;
  TotalQuantity: number;
  TotalAmount: number;
};

export const initialItem: Item = {
  Id: 0,
  ItemName: "",
  CostOfItem: 0,
  TotalQuantity: 0,
  TotalAmount: 0,
};
