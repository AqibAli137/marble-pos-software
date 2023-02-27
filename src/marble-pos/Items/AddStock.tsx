import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { AppDispatch, RootState } from "../../store";
import { Divider } from "@mui/material";
import '../../app.css'
import { Item } from "../../Models/Item";
import axios from "axios";

const items = [
  {Id:11, ItemName: "سنی سرمئی", CostOfItem: 50, TotalQuantity: 500, TotalAmount: 50 * 500 },
  {Id:12, ItemName: "بادل", CostOfItem: 60, TotalQuantity: 320, TotalAmount: 60 * 320 },
  {Id:1013, ItemName: "سکیٹنگ", CostOfItem: 90, TotalQuantity: 150, TotalAmount: 90 * 150 },
];

const AddStock = () => {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  const [SelectQuantity, setSelectQuantity] = useState(1);
  const [SelectPrice, setSelectPrice] = useState(60);
  const [yourBill, setYourBill] = useState(60);

  const [saleItem, setSaleItem] = useState([] as any);
  const [ItemAddSpanShow, setItemAddSpanShow] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  let saleState = useSelector((store: RootState) => store.sale);

  useEffect(() => {
    setYourBill(SelectQuantity * SelectPrice);
  }, [SelectQuantity, SelectPrice]);

  const ChangeDropdown = (val: any) => {
    const selectedItem = items.find((item) => item.ItemName === val);
    setSelectedItem(selectedItem as any);
    setYourBill(60);
    setSelectPrice(60);
    setSelectQuantity(1);
  };
  const newSaleItem = {
    ItemName: selectedItem.ItemName,
    ItemQuantity: SelectQuantity,
    SetPrice: SelectPrice,
    YourBill: yourBill,
  };

  const ItemRecord: Item={
    Id: selectedItem.Id,
    ItemName: selectedItem.ItemName,
    CostOfItem: SelectPrice,
    RealItemCost: SelectPrice,
    TotalQuantity: SelectQuantity,
    TotalAmount: 0,
    TypeOfItem: ""
  }
  const AddSaleItem = async () => {
    // setSaleItem([...saleItem, newSaleItem])
    {
     SelectQuantity === 0  || SelectPrice === 0
        ? alert("براہ کرم مکمل تفصیلات درج کریں۔")
        : axios
            .put(`https://localhost:7005/api/Item/${selectedItem.Id}`, ItemRecord)
            .then((res) => {
              alert("آپ کا نیا آئٹم ریکارڈ کامیابی سے Save ہو گیا۔");
              setItemAddSpanShow(true);
          
              setInterval(() => {
                setItemAddSpanShow(false);
              }, 3000);
            })
            .catch((err) => {
              alert("کچھ غلطی ہے، دوبارہ کوشش کریں۔");
            });
    }
  };

  return (
    <>
      <div>
        {/* <h2 className="text-center justify-content-center">Stock Entry</h2> */}
        <div style={{ backgroundColor: "rgba(0, 128, 0, 0.164)" }} className="row p-3 mt-3 urdu">
          <h3 className="text-center">اپنا نیا اسٹاک شامل کریں۔</h3>
        </div>
        <div className="table-responsive w-100">
          <table className="table table-row-dashed bg-white table-row-gray-300 align-middle gs-0 gy-4 w-100">
            <thead>
              <tr className="fw-bolder text-dark urdu ">
                <th></th>
                <th className="min-w-100px text-center text-dark ">کل رقم</th>
                <th className="min-w-100px text-center text-dark ">موجودہ مقدار</th>
                <th className="min-w-100px text-center text-dark ">قیمت</th>
                <th className="min-w-100px text-center text-dark ">نئی مقدار</th>
                <th className="min-w-100px text-center text-dark ">شے کا نام</th>
              </tr>
            </thead>
            <tbody>
              <tr className="tr">
              <td>
                  <IconButton aria-label="delete">
                    <AddTaskIcon fontSize="large" className="text-success" onClick={AddSaleItem} />
                  </IconButton>
                </td>
                <td>
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="d-flex justify-content-center">
                      <span className="fw-bold text-dark d-block ">
                        {selectedItem.TotalAmount}
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="d-flex justify-content-start flex-column">
                      <span className="fw-bold text-dark d-block">
                        {selectedItem.TotalQuantity}
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="d-flex justify-content-start flex-column">
                      <span className="fw-bold text-dark d-block">
                        <input
                          value={SelectPrice}
                          min="1"
                          step="1"
                          onChange={(e) => {
                            setSelectPrice(parseFloat(e.target.value));
                          }}
                          type="number"
                          className="form-control form-control-md rounded-3 text-center"
                        />
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="d-flex justify-content-start flex-column">
                      <span className="fw-bold text-dark d-block">
                        <input
                          type="number"
                          min="1"
                          step="100"
                          value={SelectQuantity}
                          onChange={(e) => {
                            setSelectQuantity(parseFloat(e.target.value));
                          }}
                          className="form-control form-control-md rounded-3 text-center"
                        />
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <div 
                     style={{ maxWidth: "200px", minWidth:'max-content'}}
                     className="form-control urdu"
                    >
                      {/* <span className="fw-bold text-dark d-block form-control urdu border-0"> */}
                      <select
                    className=" text-end w-100 border-0 mr-2 rounded-3 "
                    onChange={(e) => {
                      ChangeDropdown(e.target.value);
                    }}
                    >
                    {items.map((item) => (
                      <>
                     
                      <option 
                      
                      key={item.ItemName} value={item.ItemName} className="py-2">
                        {item.ItemName}
                      </option>
                        <Divider />
                        </>
                    ))}
                  </select>
                      {/* </span> */}
                    </div>
                  </div>
                </td>
               
               
               
               
               
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {ItemAddSpanShow && (
        <div style={{ backgroundColor: "rgba(0, 128, 0, 0.164)" }} className="row p-3">
          <h3 className="text-center">Your Item Is Save</h3>
        </div>
      )}
    </>
  );
};

export default AddStock;
