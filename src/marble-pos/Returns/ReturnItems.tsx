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
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import { ReturnItem } from "../../Models/ReturnItem";
const ReturnItems = () => {
  let ItemState = useSelector((store: RootState) => store.Item);
  let CustomerState = useSelector((store: RootState) => store.Customer);

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

  const CustomerData: ReturnItem = {
    id: 0,
    itemId: ItemState.SelectedItem.id,
    customerId: CustomerState.ReturnItemCustomer.id,
    returnQuantity: SelectQuantity,
    returnPrice: 0,
    totalAmount: 0,
    returnDate: new Date().toLocaleString() + "",
  };

  const handleSubmit = () => {
    {
      CustomerState.ReturnItemCustomer.id &&
      axios
        .post("https://localhost:7005/api/ReturnItem", CustomerData)
        .then((res) => {
          alert("آپ کی ادائیگی کامیابی کے ساتھ Update ہو گئی۔");
        })
        .catch((err) => {
          alert("کچھ غلطی ہے، دوبارہ کوشش کریں۔");
        });
    }
  };

  return (
    <div className="">
      <DashboardLayout>
        <DashboardNavbar />
        <div className="main urdu">
          <div style={{ background: "#d9ede1" }} className="row">
            <div className="col-12 text-center">
              <h1 className="my-3">
                <span>
                  سبحان ماربل اینڈ گرینائٹ <span className="fs-6">خأن ٹاون جی ٹی روڈ کامونکی</span>
                </span>
              </h1>
            </div>
            <div className="col-12 text-center">
              <h5 className="my-3">
                {" "}
                <span className="fs6">
                  {" "}
                  . ہمارے ہاں ہر قسم کا ماربل, بارڈر, پٹی, پھول اور گر ینائٹ کی تمام ورائٹی دستیاب
                  ہے . <span>نوید اختر-03016428683</span>
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
                    <Button
                      variant="contained"
                      className="ActiveEffect text-white"
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
        <div>
          <div className="mt-5">
            <LocalFooter />
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default ReturnItems;
