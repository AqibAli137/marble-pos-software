import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import LocalFooter from "../../layouts/Advatisment/LocalFooter";
import { AppDispatch, RootState } from "../../store";

const ReturnItems = () => {
  const items = [
    { ItemName: "Item 1", CostOfItem: 50, TotalQuantity: 500, TotalAmount: 50 * 500 },
    { ItemName: "Item 2", CostOfItem: 60, TotalQuantity: 320, TotalAmount: 60 * 320 },
    { ItemName: "Item 3", CostOfItem: 90, TotalQuantity: 150333, TotalAmount: 90 * 150 },
    { ItemName: "Item 4", CostOfItem: 60, TotalQuantity: 450, TotalAmount: 60 * 450 },
    { ItemName: "Item 5", CostOfItem: 150, TotalQuantity: 850, TotalAmount: 150 * 850 },
  ];
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const [SelectQuantity, setSelectQuantity] = useState(1);
  const [SelectPrice, setSelectPrice] = useState(60);
  const [yourBill, setYourBill] = useState(60);
  const [saleItem, setSaleItem] = useState([] as any);
  const [ItemAddSpanShow, setItemAddSpanShow] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  let saleState = useSelector((store: RootState) => store.sale);

  const ChangeDropdown = (val: any) => {
    const selectedItem = items.find((item) => item.ItemName === val);
    setSelectedItem(selectedItem as any);
    setYourBill(60);
    setSelectPrice(60);
    setSelectQuantity(1);
  };
  return (
    <div className="">
      <DashboardLayout>
        <div>
          <div className="d-flex justify-content-center">
            <h2 className="fs-3 text-center">Return Items</h2>
          </div>
          <div className="row my-3">
            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
              <div className="d-flex justify-content-between">
                <span>Select Item</span>
                <span className="fw-bold d-block">
                  <select
                    onChange={(e) => {
                      ChangeDropdown(e.target.value);
                    }}
                    className="form-control form-control-md px-3 rounded-3 fw-bold m-0"
                    data-kt-select2="true"
                    data-placeholder="Select option"
                    data-allow-clear="true"
                  >
                    {items.map((item) => (
                      <option key={item.ItemName} value={item.ItemName}>
                        {item.ItemName}
                      </option>
                    ))}
                  </select>
                </span>
              </div>
            </div>

            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
              <div className="d-flex justify-content-between">
                <span>Set Quantity</span>
                <span className="fw-bold d-block">
                  <input
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
                    className="form-control form-control-md text-center rounded-3 fw-bold m-0"
                  />
                </span>
              </div>
            </div>
            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
              <div className="d-flex justify-content-between">
                <span>Click for Returns</span>
                <Button variant="contained" className="ActiveEffect text-white">
                    <span className="mx-2">Return</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <LocalFooter />
        </div>
      </DashboardLayout>
    </div>
  );
};

export default ReturnItems;
