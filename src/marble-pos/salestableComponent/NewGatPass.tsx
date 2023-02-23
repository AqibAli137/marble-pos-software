import React, { useEffect, useRef, useState } from "react";
import { Table } from "react-bootstrap";
import { useReactToPrint } from "react-to-print";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
// import "./invoicer.css";

const NewGatePass = () => {
  const dataToPrintRef = useRef<HTMLInputElement>(null);
  const [amountInTable, setAmountInTable] = useState(true);
  let OrderListState = useSelector((store: RootState) => store.sale);
  const [saleItem, setSaleItem] = useState([] as any);
  const [headerShow, setHeaderShow] = useState(false);
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

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className="">
      <div ref={dataToPrintRef} className="container urdu fs-6 bg-white my-3 borders">
        <div className="pb-1">
          <div className="gatepass text-center p-4  ">
            <h1 className="fs-3">گیٹ پاس</h1>
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
                  {" "}
                  <span className="fs6">
                    {" "}
                    ہمارے ہاں ہر قسم کی ماربل اور گرینائٹ دستیاب ہیں . <span>موبائل نمبر-03016428683</span>
                  </span>
                </h6>
              </div>
            </div>
          </div>
          <div>
            <div className="row">
              <div style={{ background: "#d9ede1" }} className="col-12 text-center my-3 p-3">
                <p style={{ fontSize: "12px" }}>
                  {" "}
                  <span> تاریخ :١٢/١٢/٢٠٢٢</span> &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="name"> نام خریدار :</span>
                  <span> آفریدی صاحب </span>&nbsp;&nbsp;&nbsp;&nbsp;
                  <span> فیصل آباد </span>&nbsp;&nbsp;&nbsp;&nbsp; .{" "}
                  <span>موبائل نمبر-03016428683</span>
                </p>
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
              {saleItem.map((item: any) => (
                <tr>
                  <td>{new Date().toLocaleString() + ""}</td>
                  {amountInTable && <td>{item.YourBill}</td>}
                  {amountInTable && <td>{item.SetPrice}</td>}
                  <td>{item.ItemQuantity}</td>
                  <td>{item.ItemName}</td>
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

export default NewGatePass;
