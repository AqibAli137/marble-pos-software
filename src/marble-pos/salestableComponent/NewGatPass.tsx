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
import { BASE_URL } from "../../@features/Constents";
// import "./invoicer.css";
import subhanLogo from "../../assets/sm-assets/sm-logo2.jpg";

const NewGatePass = () => {
  const dataToPrintRef = useRef<HTMLInputElement>(null);
  const [amountInTable, setAmountInTable] = useState(true);
  const [GatPassInPrint, setGatPassInPrint] = useState(true);
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
        `${BASE_URL}/api/CustomerOrder/NewOrder/${NewCustomerState.NewOrderCustomer.id}`,
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
              {GatPassInPrint && (
                <div className="gatepass text-center pt-3">
                  <p className="fs-6">گیٹ پاس</p>
                </div>
              )}
              <div className="col-12 text-center">
                <h1 className="my-3">
                  <span>
                    <img
                      alt="Logo"
                      style={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "100%",
                        marginRight: "30px",
                      }}
                      src={subhanLogo}
                    />
                  </span>
                  <span>سبحان ماربل اینڈ گرینائٹ</span>
                </h1>
              </div>
              <div className="col-12 text-center urdu">
                <span className="fs-6">
                  نزد انمول سی این جی۔خان ٹاٶن جی ٹی روڑ کامونکی <span>نوید اختر-03016428683</span>
                </span>
              </div>
              <div className="col-12 text-center mt-3" style={{ backgroundColor: "#bbd6b8" }}>
                <h5 className="my-3">
                  <span className="fs6">
                    ہمارے ہاں ہر قسم کا ماربل, بارڈر, پٹی, پھول اور گر ینائٹ کی تمام ورائٹی دستیاب
                    ہے۔
                    {/* <span>نوید اختر-03016428683</span> */}
                  </span>
                </h5>
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
                  {amountInTable && (
                    <td className="p-0 py-2 m-0 px-2 text-center">{item.YourBill}</td>
                  )}
                  {amountInTable && (
                    <td className="p-0 py-2 m-0 px-2 text-center">{item.SetPrice}</td>
                  )}
                  <td className="p-0 py-2 m-0 text-center px-2">
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
                  <td className="p-0 py-2 m-0 text-center">
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
                  <td className="p-0 py-2 m-0 text-center px-2">
                    {new Date().toLocaleString() + ""}
                  </td>
                </tr>
              ))}
              {/* Add more rows here */}
            </tbody>
          </table>
        </div>
        <div className="d-flex align-items-end mt-5">
          <span className="mt-5">دستخط ۔۔۔۔۔۔۔۔۔۔۔۔۔۔۔۔۔۔۔۔</span>
        </div>
      </div>
      <div className="d-flex justify-content-between px-3 urdu">
        <div className="mt-2">
          <span>بغیر ریٹ کے</span>
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
        <div className="mt-2">
          <span className="urdu main">رسید کے لیے</span>
          {/* <input type="checkbox" defaultChecked={this.state.chkbox} onChange={this.handleChangeChk} /> */}
          <Checkbox
            {...label}
            onChange={() => setGatPassInPrint(!GatPassInPrint)}
            style={{
              backgroundColor: "#2d705f",
              marginLeft: "5px",
            }}
          />
        </div>
        <div className="">
          {ItemState.SelectedItem.id > 0 && NewCustomerState.NewOrderCustomer.id && (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default NewGatePass;
