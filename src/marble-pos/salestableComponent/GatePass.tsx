import React, { useEffect, useRef, useState } from "react";
import { Table } from "react-bootstrap";
import { useReactToPrint } from "react-to-print";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import axios from "axios";
import { UpdateAllOrders, UpdateGatePassOrders, UpdateSelectedOrders } from "../../@features/Orders/OrdersSlice";
// import "./invoicer.css";

const GatePass = (prop: { gatPassNumber: string }) => {
  const Number = prop.gatPassNumber;

  let GatPassState = useSelector((store: RootState) => store.GatPass);
  let CustomerState = useSelector((store: RootState) => store.Customer);
  let OrdersState = useSelector((store: RootState) => store.Orders);

  // const [gatPassOrders, setGatPassOrders] = useState([] as any);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {

    let gatPassOrders= OrdersState.SelectedOrders.filter(
      (item: any) => item.gatePassNumber === Number
      )
      UpdateGatePassOrders(gatPassOrders);
      console.log(OrdersState.SelectedOrders);
      console.log('ok');
      
      
    }, []);

    // axios.get("https://localhost:7005/api/CustomerOrder").then((res) => {
    //   dispatch(UpdateAllOrders(res.data));
    //   let gatPassOrders = res.data.filter(
    //     (item: any) => item.gatePassNumber === Number && item.customerId===CustomerState.NewOrderCustomer.id
    //   );
    //   console.log(Number);
      
    //   console.log(gatPassOrders);
    //   let gatPassOrders=OrdersState.SelectedOrders.filter(
    //     (item: any) => item.gatePassNumber === Number
    //   )
    //   UpdateSelectedOrders(gatPassOrders);
    //   setGatPassOrders(gatPassOrders)
    // });
  // const [list, setList] = useState(OrdersState.SelectedOrders);
  // useEffect(() => {
  //   console.log(OrdersState.SelectedOrders);
  //   setList(OrdersState.SelectedOrders);
  // }, []);

  const dataToPrintRef = useRef<HTMLInputElement>(null);
  const [amountInTable, setAmountInTable] = useState(true);

  const handlePrint = useReactToPrint({
    content: () => dataToPrintRef.current!,
  });

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className="">
      <div ref={dataToPrintRef} className="container urdu fs-6 bg-white my-3 borders">
        <div className="pb-1">
          <div className="gatepass text-center p-3  ">
            <h3 className="fs-5">گیٹ پاس</h3>
          </div>
          <div>
            <div style={{ background: "#d9ede1" }} className="row">
              <div className="coxl-12 text-center">
                <h3 className="my-3">
                  <span>
                    سبحان ماربل اینڈ گرینائٹ <span className="fs-6">جی ٹی روڈ کاموکی</span>
                  </span>
                </h3>
              </div>
              <div className="col-12 text-center">
                <h6 className="my-3">
                  <span className="fs6">
                    . ہمارے ہاں ہر قسم کی ماربل اور گرینائٹ کی وسیع ورا ٘ ٹی دستیاب ہیں .
                    <span>موبائل نمبر-03016428683</span>
                  </span>
                </h6>
              </div>
            </div>
          </div>
          <div>
            <div className="row">
              <div style={{ background: "#d9ede1" }} className="col-12 text-center my-3 p-3">
                <p style={{ fontSize: "16px" }}>
                  {/* <span> تاریخ :{new Date().toLocaleString() + ""}</span> &nbsp;&nbsp;&nbsp;&nbsp; */}
                  <span className="name"> نام خریدار : :</span>
                  <span> {CustomerState.NewOrderCustomer.name} </span>&nbsp;&nbsp;&nbsp;&nbsp;
                  <span> {CustomerState.NewOrderCustomer.address}</span>&nbsp;&nbsp;&nbsp;&nbsp; .
                  <span>موبائل نمبر-{CustomerState.NewOrderCustomer.phoneNo}</span>
                </p>
              </div>
            </div>
          </div>
          <table className="table table-bordered">
            <thead>
              <tr className="fs-6 text-center">
                {amountInTable && <th>رقم </th>}
                {amountInTable && <th>ریٹ </th>}
                <th>تعداد </th>
                <th>نام جنس </th>
                <th> تاریخ</th>
              </tr>
            </thead>
            <tbody>
              {OrdersState.SelectedOrders.map((item:any,index:any)=>(
                item.gatePassNumber === prop.gatPassNumber &&
                <tr className="text-center" key={index}>
                {amountInTable && (
                  <td>
                    <p>{item.yourbill}</p>
                  </td>
                )}
                {amountInTable && (
                  <td>
                    <p>{item.setPrice}</p>
                  </td>
                )}
                <td>
                  <p>{item.itemQuantity}</p>
                </td>
                <td>
                  <p>{item.itemName}</p>
                </td>
                <td>
                  <p>{item.orderDate}</p>
                </td>
              </tr>
              ))}
              {/* Add more rows here */}
            </tbody>
          </table>
        </div>
      </div>
      <div className="d-flex justify-content-between px-3">
        <div className="mt-2">
          <span>WithOut Amount</span>
          {/* <input type="checkbox" defaultChecked={this.state.chkbox} onChange={this.handleChangeChk} /> */}
          <Checkbox
            {...label}
            onChange={() => setAmountInTable(!amountInTable)}
            style={{
              backgroundColor: "#2d705f",
              marginLeft: "5px",
            }}
          />
        </div>
        <IconButton
          onClick={handlePrint}
          style={{
            color: "#2d709f",
          }}
        >
          <LocalPrintshopIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
};

export default GatePass;
