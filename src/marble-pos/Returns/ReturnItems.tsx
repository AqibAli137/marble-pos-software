import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import LocalFooter from "../../layouts/Advatisment/LocalFooter";
import { AppDispatch, RootState } from "../../store";
import "../../app.css";
import axios from "axios";
import { UpdateAllItems, UpdateSelectedItem } from "../../@features/ItemListSlice/ItemListSlice";
const ReturnItems = () => {
  let ItemState = useSelector((store: RootState) => store.Item);
  const [SelectQuantity, setSelectQuantity] = useState(1);
  const dispatch = useDispatch<AppDispatch>();
  let saleState = useSelector((store: RootState) => store.sale);

  useEffect(() => {
    axios.get("https://localhost:7005/api/Item").then((res) => {
      dispatch(UpdateAllItems(res.data));
      dispatch(UpdateSelectedItem(res.data[0]));
    });
  }, []);

  const ChangeDropdown = (val: any) => {
    const selectedItem = ItemState.ListOfItems.find((item: any) => item.itemName === val);
    dispatch(UpdateSelectedItem(selectedItem as any));
    setSelectQuantity(1);
  };
  
  const handleSubmit = () => {
    // {
    //   Password != "test123"
    //     ? alert("آپ اس سروس کو استعمال نہیں کر سکتے")
    //     : axios
    //         .put("https://localhost:7005/api/Customer/PayementRcv", CustomerData)
    //         .then((res) => {
    //           alert("آپ کی ادائیگی اور رعایت کامیابی کے ساتھ Update ہو گئی۔");
    //         })
    //         .catch((err) => {
    //           alert("کچھ غلطی ہے، دوبارہ کوشش کریں۔");
    //         });
    // }
  };

  return (
    <div className="">
      <DashboardLayout>
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
                  . ہمارے ہاں ہر قسم کی ماربل اور گرینائٹ کی وسیع ورا ٘ ٹی دستیاب ہیں .{" "}
                  <span>موبائل نمبر-03016428683</span>
                </span>
              </h5>
            </div>
          </div>
          <div className="my-2">
            <div style={{ background: "#d9ede1" }} className="row">
              <div className="col-12 text-center py-3">
                <span>ماربل کی واپسی کے لیے</span>
              </div>
            </div>
          </div>
          <div className="row mt-1">
            <table className="table table-bordered">
              <thead>
                <tr className="fs-6 text-center">
                  <th>action </th>
                  <th>تعداد </th>
                  <th>نام جنس </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td>
                    <Button variant="contained" className="ActiveEffect text-white"
                    onClick={handleSubmit}
                    >
                      <span className="mx-2">ماربل واپس</span>
                    </Button>
                  </td>
                  <td>
                    <input
                      className="form-control text-center"
                      type="number"
                      value={SelectQuantity}
                      min="0"
                      step="10"
                      max={ItemState.SelectedItem.totalQuantity}
                      onChange={(e) => {
                        setSelectQuantity(parseFloat(e.target.value));
                      }}
                    />
                  </td>
                  <td className="d-flex justify-content-center">
                    <select
                      className="form-control text-center"
                      style={{ width: "100px" }}
                      onChange={(e) => {
                        ChangeDropdown(e.target.value);
                      }}
                    >
                      {ItemState.ListOfItems.map((item: any) => (
                        <option key={item.itemName} value={item.itemName}>
                          {item.itemName}
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
        {/* <div>
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
        </div> */}
        {/* <div className="mt-5">
          <LocalFooter />
        </div> */}
      </DashboardLayout>
    </div>
  );
};

export default ReturnItems;
