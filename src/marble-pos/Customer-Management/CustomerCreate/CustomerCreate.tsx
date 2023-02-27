import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Logo from "../../../assets/sm-assets/sm-logo2.jpg";
import DashboardLayout from "../../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../../examples/Navbars/DashboardNavbar";
import axios from "axios";
import { Customer } from "../../../Models/Customer";

const CustomerCreate = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [advance,SetAdvance]=useState(0);

  const customerRecord:Customer={
    Id: 0,
    Name: name,
    Address: address,
    PhoneNo: phoneNo,
    PaymentRcv: advance,
    IsActive: true,
    PendingPayment: 0,
    TotalBill: 0,
    Discount: 0,
    ProfitFromCustomer: 0
  }
  const handleSubmit =()=>{
{

  name==='' || address ==='' || phoneNo === ''? alert('براہ کرم مکمل تفصیلات درج کریں۔'):

  axios.post("https://localhost:7005/api/Customer",customerRecord).then(
      (res)=>{alert("آپ کا نیا کسٹمر ریکارڈ کامیابی سے Save ہو گیا۔");
      setName('');
      setAddress('');
      setPhoneNo('');
      SetAdvance(0);
    }
    ).catch(
      (err)=>{
        alert("کچھ غلطی ہے، دوبارہ کوشش کریں۔")
      }
    )
    }
  }

  return (
    <>
      <DashboardLayout>
        <DashboardNavbar />
        <div className="px-13 urdu">
          <div style={{ background: "#d9ede1" }} className="row">
            <div className="col-12 text-center">
              <h1 className="my-3">
                <span>
                  سبحان ماربل اینڈ گرینائٹ <span className="fs-6">جی ٹی روڈ کاموکی</span>
                </span>
              </h1>
            </div>
          </div>
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
                      براہ کرم کسٹمر کی تفصیلات فراہم کریں۔۔
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
                  <h1 className="text-dark fs-4 py-3">نیا کسٹمر بنائیں۔</h1>
                </div>
                <div
                  className="form w-100 col col-9 fv-plugins-bootstrap5 fv-plugins-framework"
                >
                  <div className="row mb-4">
                    <div className="col col-12 col-sm-8 col-md-8 col-lg-8">
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        className="form-control form-control-lg rounded-3 text-center"
                      />
                    </div>
                    <div className="col col-4">
                      <h3 className="text-dark fs-4 text-end">کسٹمر نام </h3>
                    </div>
                  </div>
                  {/* Plot Number */}
                  <div className="row mb-4">
                    <div className="col col-12 col-sm-8 col-md-8 col-lg-8">
                      <input
                        type="text"
                        value={address}
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}
                        className="form-control form-control-lg rounded-3 text-center"
                      />
                    </div>
                    <div className="col col-4">
                      <h3 className="text-dark fs-4 text-end">کسٹمر ایڈریس</h3>
                    </div>
                  </div>
                  {/* cost */}
                  <div className="row mb-4">
                    <div className="col col-12 col-sm-8 col-md-8 col-lg-8">
                      <input
                        type="text"
                        value={phoneNo}
                        onChange={(e) => {
                          +e.target.value===+e.target.value &&
                          setPhoneNo(e.target.value);
                        }}
                        className="form-control form-control-lg rounded-3 text-center"
                      />
                    </div>
                    <div className="col col-4">
                      <h3 className="text-dark fs-4 text-end">فون نمبر</h3>
                    </div>
                  </div>
                  {/* Total Price */}
                  <div className="row mb-4">
                    <div className="col col-12 col-sm-8 col-md-8 col-lg-8">
                      <input
                        type="number"
                        value={advance}
                        min={0}
                        onChange={(e) => {
                          SetAdvance(parseFloat(e.target.value));
                        }}
                        className="form-control form-control-lg rounded-3 text-center"
                      />
                    </div>
                    <div className="col col-4">
                      <h3 className="text-dark fs-4 text-end">ایڈوانس</h3>
                    </div>
                  </div>
                  <div className="d-flex justify-content-start">
                    <button className="btn bg-primary text-white ActiveEffect urdu p-2 px-4"
                    onClick={handleSubmit}
                    >
                      جمع کرائیں
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default CustomerCreate;
