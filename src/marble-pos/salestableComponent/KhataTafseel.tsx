import React, { useEffect, useRef, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";
import { AppDispatch, RootState } from "../../store";
import Khatacard from "./Khatacard";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import "../../app.css";
import { UpdateProfitShow } from "../../@features/Customer/CustomerSlice";

const KhataTafseel = () => {
  let saleState = useSelector((store: RootState) => store.sale);
  let NewCustomerState = useSelector((store: RootState) => store.Customer);
  let OrdersState = useSelector((store: RootState) => store.Orders);
  let ItemState = useSelector((store: RootState) => store.Item);

  const dataToPrintRef = useRef<HTMLInputElement>(null);
  const [amountInTable, setAmountInTable] = useState(true);
  const dispatch = useDispatch<AppDispatch>();

  const [withOutProfit, setWithOutProfit] = useState(true);

  let OrderListState = useSelector((store: RootState) => store.sale);

  const handlePrint = useReactToPrint({
    content: () => dataToPrintRef.current!,
  });

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className="">
      <div className="container urdu fs-6 bg-white my-3 border" ref={dataToPrintRef}>
        <div className="">
          <div className="gatepass text-center p-3  ">
            <h3 className="fs-5">کھاتہ تفصیل</h3>
          </div>
          <div>
            <div style={{ background: "#d9ede1" }} className="row">
              <div className="coxl-12 text-center">
                <h3 className="my-3">
                  <span>
                    سبحان ماربل اینڈ گرینائٹ <span className="fs-6">خأن ٹاون جی ٹی روڈ کامونکی</span>
                  </span>
                </h3>
              </div>
              <div className="col-12 text-center">
                <h6 className="my-3">
                  {" "}
                  <span className="fs6">
                    <p className="mb-3"> ہمارے ہاں ہر قسم کا ماربل, بارڈر, پٹی, پھول اور گر ینائٹ کی تمام ورائٹی دستیاب ہے۔  </p>
                    <p>نوید اختر-03016428683</p>
                  </span>
                </h6>
              </div>
            </div>
          </div>
          <div>
            <div className="row">
              <div style={{ background: "#d9ede1" }} className="col-12 text-center my-3 p-3">
                <span className="name"> نام خریدار : </span>
                <span> {NewCustomerState.NewOrderCustomer.name} </span>
                <span> {NewCustomerState.NewOrderCustomer.address} </span>{" "}
                <span>موبائل نمبر-{NewCustomerState.NewOrderCustomer.phoneNo}</span>
              </div>
            </div>
          </div>
          <table className="table table-bordered">
            <thead>
              <tr className="fs-6 text-center">
                <th> تاریخ</th>
                {amountInTable && <th>رقم </th>}
                {amountInTable && <th>ریٹ </th>}
                <th>تعداد </th>
                <th>نام جنس </th>
              </tr>
            </thead>
            <tbody>
              {OrdersState.SelectedOrders.map((i: any) => (
                <tr className="">
                  <td>
                    <p>{i.orderDate}</p>
                  </td>
                  {amountInTable && (
                    <td>
                      <p>{i.yourbill}</p>
                    </td>
                  )}
                  {amountInTable && (
                    <td>
                      <p>{i.setPrice}</p>
                    </td>
                  )}
                  <td>
                    <div className="d-flex justify-content-between">
                      <div
                        style={{ maxWidth: "max-content", minWidth: "max-content" }}
                        className="bg-white text-center"
                      >
                        {ItemState.ListOfItems.map(
                          (itemRecord: any, index: any) =>
                            itemRecord.id === i.itemId && (
                              <span key={index}>{itemRecord.typeOfItem}</span>
                            )
                        )}
                      </div>
                      {/* <span>-</span> */}
                      <p> {i.itemQuantity}</p>
                    </div>
                  </td>
                  <td className="text-center">
                    <div
                      className="form-control text-center w-100 border-0"
                      style={{
                        maxWidth: "120px",
                        minWidth: "180px",
                        overflow: "hidden",
                        alignItems: "center",
                      }}
                      contentEditable="true"
                    >
                      {i.itemName}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Khatacard />
        </div>
        
      </div>
      <div className="d-flex justify-content-between p-3">
        <div className="mt-2">
          <span className="urdu main">بغیر ریٹ کے</span>
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
          <span className="urdu main">بغیر بچت کے</span>

          {/* <input type="checkbox" defaultChecked={this.state.chkbox} onChange={this.handleChangeChk} /> */}
          <Checkbox
            {...label}
            onChange={() => dispatch(UpdateProfitShow(!NewCustomerState.WithOutProfit))}
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

export default KhataTafseel;
