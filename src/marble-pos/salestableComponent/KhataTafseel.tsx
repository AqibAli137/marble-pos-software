import React, { useEffect, useRef, useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";
import { RootState } from "../../store";
import Khatacard from "./Khatacard";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import '../../app.css'

const KhataTafseel = () => {
  let saleState = useSelector((store: RootState) => store.sale);
  const [newSaleItem,setNewSaleItem]=useState(saleState.orderList)

  useEffect(() => {
    setNewSaleItem(saleState.orderList)
  }, [saleState.orderList]);
  
  const oldData = [
    {
      OrderDate: "08/6/2022, 11am",
      ItemName: "item 1",
      ItemQuantity: 354,
      SetPrice: 87,
      YourBill: 78698,
    },
    {
      OrderDate: "09/1/2022, 7pm",
      ItemName: "item 2",
      ItemQuantity: 54,
      SetPrice: 57,
      YourBill: 56960,
    },
    {
      OrderDate: "11/9/2022, 5pm",
      ItemName: "item 1",
      ItemQuantity: 78,
      SetPrice: 45,
      YourBill: 95680,
    },
  ];

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
    <div className="container urdu fs-6 bg-white my-3 border" ref={dataToPrintRef}>
      <div className="" >
        <div className="gatepass text-center p-4  ">
          <h1 className="fs-3">کھاتہ تفصیل</h1>
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
                  <p className="mb-3">  . ہمارے ہاں ہر قسم کی ماربل اور گرینائٹ دستیاب ہیں </p>
                  <p>موبائل نمبر-03016428683</p>
                </span>
              </h6>
            </div>
          </div>
        </div>
        <div>
          <div className="row">
            <div style={{ background: "#d9ede1" }} className="col-12 text-center my-3 p-3">
              <span className="name"> نام خریدار </span>
              <span> آفریدی صاحب </span>
              <span> فیصل آباد </span>. <span>موبائل نمبر-03016428683</span>
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
            {oldData.map((i) => (
              <tr className="">
                <td>
                  <p>{i.OrderDate}</p>
                </td>
                {amountInTable && <td>
                  <p>{i.YourBill}</p>
                </td>}
                {amountInTable && <td>
                  <p>{i.SetPrice}</p>
                </td>}
                <td>
                  <p>{i.ItemQuantity}</p>
                </td>
                <td>
                  <p>{i.ItemName}</p>
                </td>
              </tr>
            ))}
            {newSaleItem.map((i : any) => (
              <tr className="">
                <td>
                  <p>{new Date().toLocaleString() + ""}</p>
                </td>
                {amountInTable && <td>
                  <p>{i.YourBill}</p>
                </td>}
                {amountInTable && <td>
                  <p>{i.SetPrice}</p>
                </td>}
                <td>
                  <p>{i.ItemQuantity}</p>
                </td>
                <td>
                  <p>{i.ItemName}</p>
                </td>
              </tr>
            ))}
            {/* Add more rows here */}
          </tbody>
        </table>
        <Khatacard />
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

export default KhataTafseel;
