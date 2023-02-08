import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { OrderTableColumns } from "../ColumnData";
import IconButton from "@mui/material/IconButton";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import Checkbox from "@mui/material/Checkbox";
import { useReactToPrint } from "react-to-print";

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
    <div className="row">
      <div style={{ backgroundColor: "rgba(0, 128, 0, 0.164)" }} className="row p-3">
        <h3 className="text-center">Order print</h3>
      </div>
      <div ref={dataToPrintRef}>
        <div className="row">
          <div style={{ backgroundColor: "rgba(21, 79, 189, 0.53)" }} className="row p-3">
            <span className="text-center">
              <h3>سبحان ماربل اور گرے نائٹ</h3>
            </span>
            <span className="text-center">
              ہر قِسم کے ماربل اینڈ گرینائٹ کی ویسی ورائٹی دستیا ب ہے
            </span>
            <span className="d-flex justify-content-center mt-3">
              <div className="d-flex justify-content-center">
              <h4> 03016428683 </h4>
              <h4 className="mx-2">#</h4>
              <h4>نوید احمد</h4>
              </div>
            </span>
            <div className="d-flex justify-content-end">
              <div
                className="text-white text-bold rounded-4 mb-2"
                style={{ backgroundColor: "rgba(230, 21, 52, 0.85)", maxWidth: "max-content" }}
              >
                <span className="mx-3">شو روم:</span>
                <span>نزد پی-ایس-او پمپ خان ٹاؤن جی ٹی روڈ کاموکی</span>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <div
                className="text-white text-bold rounded-4"
                style={{ backgroundColor: "rgba(0, 77, 105, 1)", maxWidth: "max-content" }}
              >
                <span className="mx-3">فیکٹری:</span>
                <span>گاؤں پرانا گھنیا مغرب کی طرف</span>
              </div>
            </div>
          </div>
        </div>
        <table className="w-100 table-row-dashed table-row-gray-300 align-middle gs-0 gy-4 table-responsive">
          <thead>
            <tr className="" style={{ borderBottom: "1pt solid black" }}>
              <th className="text-center pb-2">Date</th>
              <th className="text-center pb-2">Name</th>
              <th className="text-center pb-2">Quantity</th>
              {amountInTable && (
                <>
                  <th className="text-center pb-2">Price</th>
                  <th className="text-center pb-2">Bill</th>
                </>
              )}
            </tr>
          </thead>

          <tbody>
            {saleItem.map((item: any, index: number) => (
              <tr className="tr" key={index}>
                <td>
                  <span className=" text-center d-block">{new Date().toLocaleString()}</span>
                </td>
                <td>
                  <span className=" text-center d-block">{item.ItemName}</span>
                </td>
                <td>
                  <span className=" text-center d-block">{item.ItemQuantity}</span>
                </td>
                {amountInTable && (
                  <>
                    <td>
                      <span className=" text-center d-block">{item.SetPrice}</span>
                    </td>
                    <td>
                      <span className="text-center d-block">{item.YourBill}</span>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-white py-3 text-center gradientStyle">
          <div className="d-flex justify-content-center position-relative" style={{ top: "-16px" }}>
            <div className=" text-center text-white position-absolute clipiPath px-4 py-1">
              PROUDLY SERVED
            </div>
          </div>
          <p className="mt-5">
            • Created By : Naveed Ahmad • Phone Number # 03016428683 <br />• Email # abc@gmail.com •
            Company : Subhan Marble
          </p>
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
    </div>
  );
};

export default Invoicer;
