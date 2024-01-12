import { Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../@features/Constents";
import "../../app.css";
import { Customer } from "../../Models/Customer";
import { RootState } from "../../store";

const PayementRCV = () => {
  let PaymentRcvState = useSelector((store: RootState) => store.PaymentRcv);

  const [PaymentRcv, setPaymentRcv] = useState(0);
  const [Discount, setDiscount] = useState(0);
  const [Password, setPassword] = useState("");

  const CustomerData: Customer = {
    Id: PaymentRcvState.customerPaymentRcv.id,
    Name: "",
    Address: "",
    PhoneNo: "",
    PaymentRcv: PaymentRcv,
    IsActive: false,
    PendingPayment: 0,
    TotalBill: 0,
    Discount: Discount,
    ProfitFromCustomer: 0,
  };

  useEffect(() => {
    // {
    //   Password != "test123"
    //     ? alert("آپ اس سروس کو استعمال نہیں کر سکتے")
    //     : axios
    //         .put(`${BASE_URL}/api/Customer/PayementRcv`, CustomerData)
    //         .then((res) => {
    //           alert("آپ کی ادائیگی اور رعایت کامیابی کے ساتھ Update ہو گئی۔");
    //         })
    //         .catch((err) => {
    //           alert("کچھ غلطی ہے، دوبارہ کوشش کریں۔");
    //         });
    // }
  }, []);

  const handleSubmit = () => {
    {
      Password === "Admin001" ||
      Password === "Arbaz348" ||
      Password === "user456"
        ? axios
            .put(`${BASE_URL}/api/Customer/PayementRcv`, CustomerData)
            .then((res) => {
              alert("آپ کی ادائیگی اور رعایت کامیابی کے ساتھ Update ہو گئی۔");
            })
            .catch((err) => {
              console.log('error is:',err)
              alert("کچھ غلطی ہے، دوبارہ کوشش کریں۔");
            })
        : alert("آپ اس سروس کو استعمال نہیں کر سکتے۔");
    }
  };

  return (
    <div>
      <div className="mt-2 pt-0 urdu">
        {/* Logo */}
        <div className="d-flex justify-content-center my-4">
          <div className="text-center">
            <div className="">
              <div className="d-flex justify-content-center">
                <h3 className=" text-center urdu">صرف ایڈمن کے استعمال کے لیے</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div
            className="col-12"
            style={{
              paddingLeft: 40,
              paddingRight: 50,
              paddingTop: 30,
            }}
          >
            <form
              className="form w-100  fv-plugins-bootstrap5 fv-plugins-framework"
              noValidate
              id="kt_login_signup_form"
            >
              {/* Name */}
              <div className="row mb-3">
                <div className="col col-12 col-sm-8 col-md-8 col-lg-8">
                  <input
                    type="number"
                    step="1"
                    min="100"
                    onChange={(e) => {
                      setPaymentRcv(parseInt(e.target.value));
                    }}
                    className="form-control form-control-lg rounded-3 text-center"
                  />
                </div>
                <div className="col col-4">
                  <h3 className="text-dark fs-4 text-end">رقم موصول</h3>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col col-12 col-sm-8 col-md-8 col-lg-8">
                  <input
                    type="number"
                    step="1"
                    min="100"
                    onChange={(e) => {
                      setDiscount(parseInt(e.target.value));
                    }}
                    className="form-control form-control-lg rounded-3 text-center"
                  />
                </div>
                <div className="col col-4">
                  <h3 className="text-dark fs-4 text-end">رعایت۔</h3>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col col-12 col-sm-8 col-md-8 col-lg-8">
                  <input
                    type="password"
                    value={Password}
                    autoComplete="off"
                    placeholder="پاس ورڈ درج کریں"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    className="form-control form-control-lg rounded-3 text-center"
                  />
                </div>
                <div className="col col-4">
                  <h3 className="text-dark fs-4 text-end">ایڈمن پاس ورڈ</h3>
                </div>
              </div>

              <div className="d-flex justify-content-between">
                <Button
                  variant="contained"
                  className="text-white ActiveEffect my-3 urdu"
                  onClick={handleSubmit}
                >
                  وصول کریں۔
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayementRCV;
