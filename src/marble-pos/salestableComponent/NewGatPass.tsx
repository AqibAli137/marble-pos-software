import React, { useEffect, useRef, useState } from "react";
import { Table } from "react-bootstrap";
import { useReactToPrint } from "react-to-print";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import axios from "axios";
import { CustomerOrder } from "../../Models/CustomerOrder";
// import "./invoicer.css";

const NewGatePass = () => {
  const dataToPrintRef = useRef<HTMLInputElement>(null);
  const [amountInTable, setAmountInTable] = useState(true);
  let OrderListState = useSelector((store: RootState) => store.sale);
  let NewCustomerState = useSelector((store: RootState) => store.Customer);
  let ItemState = useSelector((store: RootState) => store.Item);

  const [saleItem, setSaleItem] = useState([] as any);
  const [EditName, setEditName] = useState("empty");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setSaleItem(OrderListState.orderList);
  }, [OrderListState.orderList]);
  useEffect(() => {
    setSaleItem(OrderListState.orderList);
  }, []);

  const handlePrint = useReactToPrint({
    content: () => dataToPrintRef.current!,
  });

  const handleApi = () => {
    axios
      .post(
        `https://localhost:7005/api/CustomerOrder/NewOrder/${NewCustomerState.NewOrderCustomer.id}`,
        OrderListState.orderList
      )
      .then((res) => {});
    // console.log(OrderListState.orderList);
    // console.log(NewCustomerState.NewOrderCustomer.id);
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className="">
      <div ref={dataToPrintRef} className="container urdu fs-6 bg-white my-3 borders">
        <div className="pb-1">
          <div>
            <div style={{ background: "#d9ede1" }} className="row">
              <div className="gatepass text-center pt-3">
                <p className="fs-6">گیٹ پاس</p>
              </div>
              <div className="coxl-12 text-center">
                <h3 className="my-3">
                  <span>
                    سبحان ماربل اینڈ گرینائٹ{" "}
                    <span className="fs-6">خأن ٹاون جی ٹی روڈ کامونکی</span>
                  </span>
                </h3>
              </div>
              <div className="col-12 text-center">
                <h6 className="my-3">
                  <span className="fs-6">
                    <p className="mb-3">
                      ہمارے ہاں ہر قسم کا ماربل, بارڈر, پٹی, پھول اور گر ینائٹ کی تمام ورائٹی دستیاب
                      ہے۔
                    </p>
                    <br />
                    <span>نوید اختر-03016428683</span>
                  </span>
                </h6>
              </div>
            </div>
          </div>
          <div>
            <div className="row">
              <div style={{ background: "#d9ede1" }} className="col-12 text-center my-3 p-3">
                <p style={{ fontSize: "12px" }}>
                  {/* <span> تاریخ :{new Date().toLocaleString() + ""}</span> &nbsp;&nbsp;&nbsp;&nbsp; */}
                  <span className="name"> نام خریدار : :</span>
                  <span> {NewCustomerState.NewOrderCustomer.name} </span>&nbsp;&nbsp;&nbsp;&nbsp;
                  {/* <span> : </span> */}
                  <span> {NewCustomerState.NewOrderCustomer.address}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                  .<span>موبائل نمبر-{NewCustomerState.NewOrderCustomer.phoneNo}</span>
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
              {saleItem.map((item: any) => (
                <tr>
                  {amountInTable && <td>{item.YourBill}</td>}
                  {amountInTable && <td>{item.SetPrice}</td>}
                  <td>
                    <div className="d-flex justify-content-between">
                      <div
                        style={{ maxWidth: "max-content", minWidth: "max-content" }}
                        className="bg-white text-center"
                      >
                        {ItemState.ListOfItems.map(
                          (itemRecord: any, index: any) =>
                            itemRecord.id === item.ItemId && (
                              <span key={index}>{itemRecord.typeOfItem}</span>
                            )
                        )}
                      </div>
                      {/* <span>-</span> */}
                      <p>{item.ItemQuantity}</p>
                    </div>
                  </td>
                  <td className="text-center">
                    <div
                      className="form-control text-center w-100 border-0"
                      style={{
                        maxWidth: "200px",
                        minWidth: "200px",
                        overflow: "hidden",
                        alignItems: "center",
                      }}
                      contentEditable="true"
                    >
                      {item.ItemName}
                    </div>
                  </td>
                  <td>{new Date().toLocaleString() + ""}</td>
                </tr>
              ))}
              {/* Add more rows here */}
            </tbody>
          </table>
        </div>
        <div
          className="d-flex align-items-end mt-5"
        >
          <span className="mt-5">دستخط ۔۔۔۔۔۔۔۔۔۔۔۔۔۔۔۔۔۔۔۔</span>
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
          onClick={() => {
            handleApi();
            handlePrint();
          }}
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

export default NewGatePass;
