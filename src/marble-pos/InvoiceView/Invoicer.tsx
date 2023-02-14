import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { OrderTableColumns } from "../ColumnData";
import IconButton from "@mui/material/IconButton";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import Checkbox from "@mui/material/Checkbox";
import { useReactToPrint } from "react-to-print";
import './invoicer.css'
import Component from "./Component";
const Invoicer = () => {
  let OrderListState = useSelector((store: RootState) => store.sale);
  const [saleItem, setSaleItem] = useState([] as any);
  const [amountInTable, setAmountInTable] = useState(false);
  const [headerShow, setHeaderShow] = useState(false);

  const dataToPrintRef = React.useRef<HTMLInputElement>(null);
  useEffect(() => {
    setSaleItem(OrderListState.orderList);
  }, [OrderListState.orderList]);
  useEffect(() => {
    setSaleItem(OrderListState.orderList);
  }, []);
  useEffect(() => {
    setSaleItem(OrderListState.orderList);
  }, [OrderListState.orderList]);
  const handlePrint = useReactToPrint({
    content: () => dataToPrintRef.current!,
  });

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <>
    
    <div className="row urdu my-5" >
     
      <div ref={dataToPrintRef}>
        
        <Component/>
        {/* <div className="row">
        <table>
          <thead>
            <tr>
              <th>Quantity</th>
              <th>Details</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Product 1</td>
              <td>Lorem ipsum dolor sit amet</td>
              <td>$10.00</td>
              <td>2</td>
              <td>$20.00</td>
            </tr>
            <tr>
              <td>Product 2</td>
              <td>Consectetur adipiscing elit</td>
              <td>$20.00</td>
              <td>1</td>
              <td>$20.00</td>
            </tr>
            <tr>
              <td>Product 3</td>
              <td>Sed do eiusmod tempor incididunt</td>
              <td>$30.00</td>
              <td>3</td>
              <td>$90.00</td>
            </tr>
          </tbody>
        </table>
        </div> */}
      </div>
    </div>
      <div className="d-flex justify-content-between px-3">
        <div className="mt-2">
          <span>With Amount</span>
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
      </>
  );
};

export default Invoicer;
