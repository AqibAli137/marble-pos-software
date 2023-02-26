import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import FirstTable from "./TodoList/FirstTable";
import IconButton from "@mui/material/IconButton";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { AppDispatch, RootState } from "../store";
import { updateOrderList } from "../@features/SaleItems/SaleItemSlice";
import "../app.css";
import { useReactToPrint } from "react-to-print";
import GatePass from "./salestableComponent/GatePass";
import KhataTafseel from "./salestableComponent/KhataTafseel";
import NewGatePass from "./salestableComponent/NewGatPass";

const items = [
  { ItemName: "سنی سرمئی", CostOfItem: 50, TotalQuantity: 500, TotalAmount: 50 * 500 },
  { ItemName: "بادل", CostOfItem: 60, TotalQuantity: 320, TotalAmount: 60 * 320 },
  { ItemName: "سکیٹنگ", CostOfItem: 90, TotalQuantity: 150333, TotalAmount: 90 * 150 },
  { ItemName: "ٹویٹرا", CostOfItem: 60, TotalQuantity: 450, TotalAmount: 60 * 450 },
  { ItemName: "کالا ماربل", CostOfItem: 150, TotalQuantity: 850, TotalAmount: 150 * 850 },
];

const SaleDashboard = () => {
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const [SelectQuantity, setSelectQuantity] = useState(1);
  const [SelectPrice, setSelectPrice] = useState(60);
  const [yourBill, setYourBill] = useState(60);
  const [selectItemCost, setSelectItemCost] = useState(60);
  const [stockPrice, setStockPrice] = useState(500 * 50);

  const [profit, setProfit] = useState(10);
  const [saleItem, setSaleItem] = useState([] as any);
  const [ItemAddSpanShow, setItemAddSpanShow] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  let saleState = useSelector((store: RootState) => store.sale);

  useEffect(() => {
    setYourBill(SelectQuantity * SelectPrice);
    setProfit(SelectQuantity * SelectPrice - selectedItem.CostOfItem * SelectQuantity);
  }, [SelectQuantity, SelectPrice]);

  const ChangeDropdown = (val: any) => {
    const selectedItem = items.find((item) => item.ItemName === val);
    setSelectedItem(selectedItem as any);
    setYourBill(60);
    setSelectPrice(60);
    setSelectQuantity(1);
    // setSelectItemCost();
  };
  useEffect(() => {
    setStockPrice(selectedItem.CostOfItem * selectedItem.TotalQuantity);
    setProfit(SelectPrice - selectedItem.CostOfItem);
  }, [selectedItem]);
  const newSaleItem = {
    ItemName: selectedItem.ItemName,
    ItemQuantity: SelectQuantity,
    SetPrice: SelectPrice,
    YourBill: yourBill,
  };

  const AddSaleItem = async () => {
    setSaleItem([...saleItem, newSaleItem]);
    dispatch(updateOrderList([...saleItem, newSaleItem]));
    setItemAddSpanShow(true);

    setInterval(() => {
      setItemAddSpanShow(false);
    }, 5000);
  };
  useEffect(() => {
    let newArray = saleItem.filter((item: any) => item !== saleState.localObject);
    setSaleItem(newArray);
    dispatch(updateOrderList(newArray));
  }, [saleState.localObject]);

  const dataToPrintRef = React.useRef<HTMLInputElement>(null);
  const handlePrint = useReactToPrint({
    content: () => dataToPrintRef.current!,
  });

  const oldData = [
    {
      OrderDate: "08/6/2022, 11am",
      ItemName: "سنی سرمئی",
      ItemQuantity: 354,
      SetPrice: 87,
      YourBill: 78698,
    },
    {
      OrderDate: "09/1/2022, 7pm",
      ItemName: "بادل",
      ItemQuantity: 54,
      SetPrice: 57,
      YourBill: 56960,
    },
    {
      OrderDate: "11/9/2022, 5pm",
      ItemName: "سنی سرمئی",
      ItemQuantity: 78,
      SetPrice: 45,
      YourBill: 95680,
    },
  ];

  return (
    // <>
    //   <div>
    //     <div className="d-flex justify-content-center">
    //       <h2 className="fs-3 text-center">Customer Order</h2>
    //     </div>
    //     <div className="row mb-3">
    //       <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
    //         <div className="d-flex justify-content-between">
    //           <span>Select Item</span>
    //           <span className="fw-bold d-block">
    //             <select
    //               onChange={(e) => {
    //                 ChangeDropdown(e.target.value);
    //               }}
    //               className="form-control form-control-md px-3 rounded-3 fw-bold m-0"
    //               data-kt-select2="true"
    //               data-placeholder="Select option"
    //               data-allow-clear="true"
    //             >
    //               {items.map((item) => (
    //                 <option key={item.ItemName} value={item.ItemName}>
    //                   {item.ItemName}
    //                 </option>
    //               ))}
    //             </select>
    //           </span>
    //         </div>
    //       </div>

    //       <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
    //         <div className="d-flex justify-content-between">
    //           <span>Set Quantity</span>
    //           <span className="fw-bold d-block">
    //             <input
    //               type="number"
    //               value={SelectQuantity}
    //               min="0"
    //               step="10"
    //               max={selectedItem.TotalQuantity}
    //               onChange={(e) => {
    //                 if (
    //                   parseInt(e.target.value) === selectedItem.TotalQuantity ||
    //                   parseInt(e.target.value) < selectedItem.TotalQuantity
    //                 ) {
    //                   setSelectQuantity(parseInt(e.target.value));
    //                 }
    //               }}
    //               className="form-control form-control-md text-center rounded-3 fw-bold m-0"
    //             />
    //           </span>
    //         </div>
    //       </div>
    //       <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
    //         <div className="d-flex justify-content-between">
    //           <span>Set Price</span>
    //           <span className="fw-bold d-block">
    //             <input
    //               value={SelectPrice}
    //               type="number"
    //               min="0"
    //               step="1"
    //               onChange={(e) => {
    //                 if (parseInt(e.target.value) === 100000 || parseInt(e.target.value) < 100000) {
    //                   setSelectPrice(parseFloat(e.target.value));
    //                 }
    //               }}
    //               className="form-control form-control-md text-center rounded-3 fw-bold m-0"
    //             />
    //           </span>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="table-responsive w-100">
    //       <table className="table table-striped table-dark">
    //         <thead>
    //           <tr className="fs-6">
    //             <th scope="col">Your Bill</th>
    //             <th scope="col">Cost/Ft/No</th>
    //             <th scope="col">Total Quantity</th>
    //             <th scope="col">Total Amount</th>
    //             <th scope="col">Add</th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           <tr className="fs-6">
    //             <td>{yourBill}</td>
    //             <td>{selectedItem.CostOfItem}</td>
    //             <td>{selectedItem.TotalQuantity}</td>
    //             <td>{selectedItem.TotalAmount}</td>
    //             <td>
    //               <IconButton aria-label="delete">
    //                 <AddTaskIcon fontSize="medium" className="text-success" onClick={AddSaleItem} />
    //               </IconButton>
    //             </td>
    //           </tr>
    //         </tbody>
    //       </table>
    //     </div>
    //   </div>
    //   {ItemAddSpanShow && (
    //     <div style={{ backgroundColor: "rgba(0, 128, 0, 0.164)" }} className="row p-3">
    //       <h3 className="text-center">Record is added in list</h3>
    //     </div>
    //   )}
    //   <div>
    //     <FirstTable TableData={saleItem} />
    //   </div>
    //   <div className="row mt-5">
    //     <div className="col-12">
    //       <div className="row bg-dark text-white py-2 px-0">
    //         <h3 className="text-center fs-4">Customer Old Record</h3>
    //       </div>
    //       <Table columns={OrderTableColumns} dataSource={oldData} />
    //       <div className="row bg-dark text-white py-2">
    //         <h3 className="text-center">New Order</h3>
    //       </div>
    //       <Table columns={OrderTableColumns} dataSource={saleItem} />
    //     </div>
    //     <div className="col-12">
    //       <div className="">
    //         <Invoicer />
    //       </div>
    //     </div>
    //   </div>
    // </>
    <>
      <div className="main urdu">
        <div style={{ background: "#d9ede1" }} className="row">
          <div className="col-12 text-center">
            <h1 className="my-3">
              <span>
                سبحان ماربل اینڈ گرینائٹ <span className="fs-6">جی ٹی روڈ کاموکی</span>
              </span>
            </h1>
          </div>
          <div className="col-12 text-center">
            <h5 className="my-3">
              {" "}
              <span className="fs6">
                {" "}
                . ہمارے ہاں ہر قسم کی ماربل اور گرینائٹ کی وسیع  ورا ٘ ٹی دستیاب ہیں . <span>موبائل نمبر-03016428683</span>
              </span>
            </h5>
          </div>
        </div>
        <div className="row">
          <div style={{ background: "#d9ede1" }} className="col-12 text-center my-3 p-3">
            <span className="name"> نام خریدار :  </span>
            <span> آفریدی صاحب </span>
            <span> فیصل آباد </span>
          </div>
        </div>
        <div className="row table-responsive">
          {/* <SalesTable /> */}
          <table className="table table-bordered bg-light">
            <thead>
              <tr className="fs-6 text-center">
                <th>ٹھیک ہے </th>
                <th>بقیہ مال کی قیمت </th>
                <th> خرید ریٹ </th>
                <th>بقیہ مال</th>
                <th>بچت </th>
                <th>قیمت </th>
                <th>ریٹ </th>
                <th>تعداد </th>
                <th>نام جنس </th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td>
                  <IconButton aria-label="delete">
                    <AddTaskIcon fontSize="medium" className="text-success" onClick={AddSaleItem} />
                  </IconButton>
                </td>
                <td>
                  <div className="form-control">{stockPrice}</div>
                </td>
                <td>
                  <div className="form-control">{selectedItem.CostOfItem}</div>
                </td>
                <td>
                  <div className="form-control">{selectedItem.TotalQuantity}</div>
                </td>
                <td>
                  <div className="form-control">{profit}</div>
                </td>
                <td>
                  <div className="form-control">{yourBill}</div>
                </td>
                <td>
                  <input
                    value={SelectPrice}
                    type="number"
                    min="0"
                    step="1"
                    onChange={(e) => {
                      if (
                        parseInt(e.target.value) === 100000 ||
                        parseInt(e.target.value) < 100000
                      ) {
                        setSelectPrice(parseFloat(e.target.value));
                      }
                    }}
                    className="form-control"
                  />
                </td>

                <td>
                  <input
                    className="form-control"
                    type="number"
                    value={SelectQuantity}
                    min="0"
                    step="10"
                    max={selectedItem.TotalQuantity}
                    onChange={(e) => {
                      if (
                        parseInt(e.target.value) === selectedItem.TotalQuantity ||
                        parseInt(e.target.value) < selectedItem.TotalQuantity
                      ) {
                        setSelectQuantity(parseInt(e.target.value));
                      }
                    }}
                  />
                </td>
                <td>
                  <select
                    className="form-control"
                    style={{ width: "100px" }}
                    onChange={(e) => {
                      ChangeDropdown(e.target.value);
                    }}
                  >
                    {items.map((item) => (
                      <option key={item.ItemName} value={item.ItemName}>
                        {item.ItemName}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              {/* Add more rows here */}
            </tbody>
          </table>
        </div>
      </div>
     {ItemAddSpanShow && (
        <div style={{ backgroundColor: "rgba(0, 128, 0, 0.164)" }} className="row p-3 main urdu">
          <h3 className="text-center">ریکارڈ فہرست میں شامل کیا گیا ہے۔</h3>
        </div>
      )}
      <FirstTable TableData={saleItem} />

      <div className="row">
        <div className="col">
          <div style={{ height: "500px", overflow: "scroll" }}>
            <KhataTafseel />
          </div>
        </div>
        <div className="col">
          <div style={{ height: "500px", overflow: "scroll" }}>
            {["", "", "", ""].map((i) => (
              <GatePass />
            ))}
            <NewGatePass />
          </div>
        </div>
      </div>
    </>
  );
};

export default SaleDashboard;
