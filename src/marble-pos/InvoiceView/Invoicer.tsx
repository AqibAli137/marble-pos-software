import React, { useEffect, useState, useRef } from "react";
import { Table } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { OrderTableColumns } from "../ColumnData";
import IconButton from "@mui/material/IconButton";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import Checkbox from "@mui/material/Checkbox";
import { useReactToPrint } from "react-to-print";
import "./invoicer.css";
import marbleheader from "../../assets/Bills/Fauget.png";
import Headnumbers from "../../assets/Bills/Add a heading.png";

const Invoicer = () => {
  let OrderListState = useSelector((store: RootState) => store.sale);
  const [saleItem, setSaleItem] = useState([] as any);
  const [amountInTable, setAmountInTable] = useState(true);
  const [headerShow, setHeaderShow] = useState(false);
  const [total, setTotal] = useState(0);

  const dataToPrintRef = useRef<HTMLInputElement>(null);

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
    <>
      <div className="row urdu my-5">
        <div ref={dataToPrintRef}>
          <div className="container">
            <div className="card">
              <div className="row">
                <img src={marbleheader} alt="" style={{ width: "100%" }} />
              </div>
              <div className="card-body">
                <div className="row mb-4">
                  <div className="col-sm-6">
                    <h6 className="mb-3">From:</h6>
                    <div>
                      <strong>Naveed Akhtar</strong>
                    </div>
                    <div>Kamoke</div>
                    <div>Full Address here</div>
                    <div>Phone: +92301-6428683</div>
                  </div>

                  <div className="col-sm-6">
                    <h6 className="mb-3">To:</h6>
                    <div>
                      <strong>Arbaz Ahmad</strong>
                    </div>
                    <div>Address : Muridke</div>
                    <div>Full Address here</div>
                    <div>Phone: +92306-321****</div>
                  </div>
                </div>

                <div className="table-responsive-sm">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Item Name</th>
                        {amountInTable && <th className="right">Unit Cost</th>}
                        <th className="center">Quantity</th>
                        {amountInTable && <th className="right">Bill</th>}
                      </tr>
                    </thead>
                    <tbody>
                      {saleItem.map((item: any) => (
                        <tr>
                          <td>{new Date().toLocaleString() + ""}</td>
                          <td>{item.ItemName}</td>
                          <td>{item.ItemQuantity}</td>
                          {amountInTable && <td>{item.SetPrice}</td>}
                          {amountInTable && <td>{item.YourBill}</td>}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-sm-5"></div>

                  <div className="col-lg-4 col-sm-5 ml-auto">
                    <table className="table table-clear">
                      <tbody>
                        <tr>
                          <td className="left">
                            <strong>Total</strong>
                          </td>
                          <td className="right">
                            <strong>{total}</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="row">
                <img src={Headnumbers} alt="" style={{ width: "100%" }} />
              </div>
            </div>
          </div>
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
    </>
  );
};

export default Invoicer;
