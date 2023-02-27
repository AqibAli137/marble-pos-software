export type GatePass ={
    Id: number;
    CustomerId: number;
    GatePassDate: string;
    GatePassNo: string;
  }


  export const initialGatePass: GatePass={
      Id: 0,
      CustomerId: 0,
      GatePassDate: "",
      GatePassNo: ""
  }