import React, { useEffect, useRef, useState } from "react";
import { Table } from "react-bootstrap";
import { useReactToPrint } from "react-to-print";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import axios from "axios";
import {
  UpdateAllOrders,
  UpdateGatePassOrders,
  UpdateSelectedOrders,
} from "../../@features/Orders/OrdersSlice";
// import "./invoicer.css";

const GatePass = (prop: { gatPassNumber: string }) => {
  const Number = prop.gatPassNumber;

  let GatPassState = useSelector((store: RootState) => store.GatPass);
  let CustomerState = useSelector((store: RootState) => store.Customer);
  let OrdersState = useSelector((store: RootState) => store.Orders);
  let ItemState = useSelector((store: RootState) => store.Item);

  // const [gatPassOrders, setGatPassOrders] = useState([] as any);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    let gatPassOrders = OrdersState.SelectedOrders.filter(
      (item: any) => item.gatePassNumber === Number
    );
    UpdateGatePassOrders(gatPassOrders);
    console.log(OrdersState.SelectedOrders);
    console.log("ok");
  }, []);

  const dataToPrintRef = useRef<HTMLInputElement>(null);
  const [amountInTable, setAmountInTable] = useState(true);
  const [GatPassInPrint, setGatPassInPrint] = useState(true);

  const handlePrint = useReactToPrint({
    content: () => dataToPrintRef.current!,
  });

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className="">
      <div ref={dataToPrintRef} className="container urdu fs-6 bg-white my-3 borders">
        <div className="pb-1">
          <div>
            <div style={{ background: "#d9ede1" }} className="row">
              {GatPassInPrint && (
                <div className="gatepass text-center pt-3">
                  <p className="fs-6">?????? ??????</p>
                </div>
              )}
              <div className="coxl-12 text-center">
                <h3 className="my-3">
                  <span>
                    ?????????? ?????????? ???????? ??????????????
                    <span className="fs-6">?????? ???????? ???? ???? ?????? ??????????????</span>
                  </span>
                </h3>
              </div>
              <div className="col-12 text-center">
                <h6 className="my-3">
                  <span className="fs6">
                    <p className="mb-3">
                      ?????????? ?????? ???? ?????? ???? ??????????, ??????????, ??????, ???????? ?????? ???? ?????????? ???? ???????? ???????????? ????????????
                      ??????
                    </p>
                    <br />
                    <span>???????? ????????-03016428683</span>
                  </span>
                </h6>
              </div>
            </div>
          </div>
          <div>
            <div className="row">
              <div style={{ background: "#d9ede1" }} className="col-12 text-center my-3 p-3">
                <p style={{ fontSize: "16px" }}>
                  {/* <span> ?????????? :{new Date().toLocaleString() + ""}</span> &nbsp;&nbsp;&nbsp;&nbsp; */}
                  <span className="name"> ?????? ???????????? : :</span>
                  <span> {CustomerState.NewOrderCustomer.name} </span>&nbsp;&nbsp;&nbsp;&nbsp;
                  <span> {CustomerState.NewOrderCustomer.address}</span>&nbsp;&nbsp;&nbsp;&nbsp; .
                  <span>???????????? ????????-{CustomerState.NewOrderCustomer.phoneNo}</span>
                </p>
              </div>
            </div>
          </div>
          <table className="table table-bordered">
            <thead>
              <tr className="fs-6 text-center">
                {amountInTable && <th>?????? </th>}
                {amountInTable && <th>?????? </th>}
                <th>?????????? </th>
                <th>?????? ?????? </th>
                <th> ??????????</th>
              </tr>
            </thead>
            <tbody>
              {OrdersState.SelectedOrders.map(
                (item: any, index: any) =>
                  item.gatePassNumber === prop.gatPassNumber && (
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
                      {/* <td>
                  <p>{item.itemQuantity}</p>
                </td> */}
                      <td>
                        <div className="d-flex justify-content-between">
                          <div
                            style={{ maxWidth: "max-content", minWidth: "max-content" }}
                            className="bg-white text-center"
                          >
                            {ItemState.ListOfItems.map(
                              (itemRecord: any, index: any) =>
                                itemRecord.id === item.itemId && (
                                  <span key={index}>{itemRecord.typeOfItem}</span>
                                )
                            )}
                          </div>
                          {/* <span>-</span> */}
                          <p>{item.itemQuantity}</p>
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
                          {item.itemName}
                        </div>
                      </td>
                      <td>
                        <p>{item.orderDate}</p>
                      </td>
                    </tr>
                  )
              )}
              {/* Add more rows here */}
            </tbody>
          </table>
        </div>
        <div className="d-flex align-items-end mt-5">
          <span className="mt-5">?????????? ????????????????????????????????????????</span>
        </div>
      </div>
      <div className="d-flex justify-content-between px-3">
        <div className="mt-2">
          <span>???????? ?????? ????</span>
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
          <span className="urdu main">???????? ???? ??????</span>
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
        {ItemState.SelectedItem.id > 0 && CustomerState.NewOrderCustomer.id && (
          <IconButton
            onClick={handlePrint}
            style={{
              color: "#2d709f",
            }}
          >
            <LocalPrintshopIcon fontSize="large" />
          </IconButton>
        )}
      </div>
    </div>
  );
};

export default GatePass;
