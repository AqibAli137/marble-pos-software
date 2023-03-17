import React, { useEffect, useState } from "react";
// import {useNavigate} from 'react-router-dom'
import { Button } from "@mui/material";
import Logo from "../../assets/sm-assets/sm-logo2.jpg";
import { Item } from "../../Models/Item";
import axios from "axios";
import { BASE_URL } from "../../@features/Constents";

export function RegisterItem() {
  // const navigate = useNavigate()
  const [itemName, setItemName] = useState("");
  const [itemType, setItemType] = useState("فٹ");
  const [itemQuantity, setItemQuantity] = useState(1);
  const [itemCost, setItemCost] = useState(50);
  const [itemTotalprice, setItemTotalprice] = useState(50);

  useEffect(() => {
    setItemTotalprice(itemQuantity * itemCost);
  }, [itemQuantity, itemCost]);

  const ItemRecord: Item = {
    Id: 0,
    ItemName: itemName,
    CostOfItem: itemCost,
    RealItemCost: itemCost,
    TotalQuantity: itemQuantity,
    TotalAmount: itemTotalprice,
    TypeOfItem: itemType,
  };
  const createItem = () => {
    {
      itemName === "" || itemCost === 0 || itemType === "" || itemQuantity === 0
        ? alert("براہ کرم مکمل تفصیلات درج کریں۔")
        : axios
            .post(`${BASE_URL}/api/Item`, ItemRecord)
            .then((res) => {
              alert("آپ کا نیا آئٹم ریکارڈ کامیابی سے Save ہو گیا۔");
              setItemName("");
            })
            .catch((err) => {
              alert("کچھ غلطی ہے، دوبارہ کوشش کریں۔");
            });
    }
  };

  return (
    <>
      <div className="px-13 urdu">
        <div className="row d-flex flex-row-reverse">
          <div className="col-12 col-lg-3 col-sm-3 col-md-3 text-center d-flex align-items-center">
            <div className="d-flex align-items-center justify-content-center">
              <div>
                <img
                  alt="Logo"
                  src={Logo}
                  style={{ width: "120px", height: "120px", borderRadius: "100%" }}
                />
                <div className="d-flex justify-content-center">
                  <h3 style={{ lineHeight: "50px" }} className="col-12 text-center my-3">
                    براہ کرم آئٹم کی تفصیلات فراہم کریں۔
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-12 col-lg-9 card col-sm-9 col-md-9 border-left p-3 my-2 d-flex flex-row-reverse "
            style={{
              paddingLeft: 40,
              paddingRight: 50,
              paddingTop: 30,
              background: "rgb(217, 237, 225)",
            }}
          >
            <div>
              <div className=" text-end mb-5">
                <h1 className="text-dark fs-4 py-3">آئٹم کو رجسٹر کریں۔</h1>
              </div>
              <div
                className="form w-100 col col-9 fv-plugins-bootstrap5 fv-plugins-framework"
              >
                <div className="row mb-4">
                  <div className="col col-12 col-sm-8 col-md-8 col-lg-8">
                    <input
                      type="text"
                      value={itemName}
                      onChange={(e) => {
                        setItemName(e.target.value);
                      }}
                      className="form-control form-control-lg rounded-3 text-center"
                    />
                  </div>
                  <div className="col col-4">
                    <h3 className="text-dark fs-4 text-end">آئٹم کا نام</h3>
                  </div>
                </div>
                {/* Plot Number */}
                <div className="row mb-4">
                  <div className="col col-12 col-sm-8 col-md-8 col-lg-8">
                    <input
                      type="number"
                      value={itemQuantity}
                      step="100"
                      min="0"
                      onChange={(e) => {
                        setItemQuantity(parseFloat(e.target.value));
                      }}
                      className="form-control form-control-lg rounded-3 text-center"
                    />
                  </div>
                  <div className="col col-4">
                    <h3 className="text-dark fs-4 text-end">آئٹم کی مقدار</h3>
                  </div>
                </div>
                {/* cost */}
                <div className="row mb-4">
                  <div className="col col-12 col-sm-8 col-md-8 col-lg-8">
                    <input
                      type="number"
                      value={itemCost}
                      step="1"
                      min="1"
                      onChange={(e) => {
                        setItemCost(parseFloat(e.target.value));
                      }}
                      className="form-control form-control-lg rounded-3 text-center"
                    />
                  </div>
                  <div className="col col-4">
                    <h3 className="text-dark fs-4 text-end">لاگت فی آئٹم</h3>
                  </div>
                </div>
                {/* Type */}
                <div className="row mb-4">
                  <div className="col col-12 col-sm-8 col-md-8 col-lg-8">
                    <input
                      type="text"
                      value={itemType}
                      step="100"
                      min="0"
                      onChange={(e) => {
                        setItemType(e.target.value);
                      }}
                      className="form-control form-control-lg rounded-3 text-center"
                    />
                  </div>
                  <div className="col col-4">
                    <h3 className="text-dark fs-4 text-end">قسم(عدد/فٹ)</h3>
                  </div>
                </div>
                {/* Total Price */}
                <div className="row mb-4">
                  <div className="col col-12 col-sm-8 col-md-8 col-lg-8">
                    <input
                      type="text"
                      value={itemTotalprice}
                      readOnly
                      className="form-control form-control-lg rounded-3 text-center"
                    />
                  </div>
                  <div className="col col-4">
                    <h3 className="text-dark fs-4 text-end">کل قیمت</h3>
                  </div>
                </div>
                <div className="d-flex justify-content-start">
                  <button
                    className="btn bg-primary text-white ActiveEffect urdu p-2 px-4"
                    onClick={createItem}
                  >
                    جمع کرائیں
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
