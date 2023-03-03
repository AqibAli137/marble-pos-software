import React, { useEffect, useState } from "react";
import { Table, FormControl, InputGroup, Form, Row, Col, Pagination } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import "../../app.css";
import axios from "axios";
import { UpdateAllItems, UpdateSelectedItem } from "../../@features/ItemListSlice/ItemListSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";

const StockRecord = () => {
  let saleState = useSelector((store: RootState) => store.sale);
  let ItemState = useSelector((store: RootState) => store.Item);

  const items = [
    {
      ItemName: "سنی سرمئی",
      CostOfItem: 50,
      TotalQuantity: 500,
      RealTotalDiscount: 4343,
      TotalAmount: 50 * 500,
    },
    {
      ItemName: "بادل",
      CostOfItem: 60,
      TotalQuantity: 320,
      RealTotalDiscount: 4343,
      TotalAmount: 60 * 320,
    },
    {
      ItemName: "سکیٹنگ",
      CostOfItem: 90,
      TotalQuantity: 150333,
      RealTotalDiscount: 4343,
      TotalAmount: 90 * 150,
    },
    {
      ItemName: "ٹویٹرا",
      CostOfItem: 60,
      TotalQuantity: 450,
      RealTotalDiscount: 4343,
      TotalAmount: 60 * 450,
    },
    {
      ItemName: "کالا ماربل",
      CostOfItem: 150,
      TotalQuantity: 850,
      RealTotalDiscount: 4343,
      TotalAmount: 150 * 850,
    },

    {
      ItemName: "سکیٹنگ",
      CostOfItem: 90,
      TotalQuantity: 150333,
      RealTotalDiscount: 4343,
      TotalAmount: 90 * 150,
    },
    {
      ItemName: "کالا ماربل",
      CostOfItem: 150,
      TotalQuantity: 850,
      RealTotalDiscount: 4343,
      TotalAmount: 150 * 850,
    },
    {
      ItemName: "سکیٹنگ",
      CostOfItem: 90,
      TotalQuantity: 150333,
      RealTotalDiscount: 4343,
      TotalAmount: 90 * 150,
    },
    {
      ItemName: "ٹویٹرا",
      CostOfItem: 60,
      TotalQuantity: 450,
      RealTotalDiscount: 4343,
      TotalAmount: 60 * 450,
    },
    {
      ItemName: "ٹویٹرا",
      CostOfItem: 60,
      TotalQuantity: 450,
      RealTotalDiscount: 4343,
      TotalAmount: 60 * 450,
    },
    {
      ItemName: "کالا ماربل",
      CostOfItem: 150,
      TotalQuantity: 850,
      RealTotalDiscount: 4343,
      TotalAmount: 150 * 850,
    },
  ];
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    axios.get("https://localhost:7005/api/Item").then((res) => {
      console.log(res.data);
      dispatch(UpdateAllItems(res.data));
      dispatch(UpdateSelectedItem(res.data[0]));
    });
  }, []);
  return (
    <DashboardLayout>
      <DashboardNavbar />

      <div className="urdu">
        <div style={{ background: "#d9ede1" }} className="row">
          <div className="col-12 text-center">
            <h1 className="my-3">
              <span>
                سبحان ماربل اینڈ گرینائٹ <span className="fs-6">جی ٹی روڈ کاموکی</span>
              </span>
            </h1>
          </div>
        </div>

        <Row>
          <Col md={12} className="urdu" style={{ height: "80vh", overflow: "scroll" }}>
            <Table hover className="bg-transparent urdu table-bordered rrounded-3">
              <thead>
                <tr className="text-end bg-white text-center ">
                  <th>کل بچت</th>
                  <th>کل رقم</th>
                  <th>کل مقدار</th>
                  <th>آئٹم کی قیمت</th>
                  <th>شے کا نام</th>
                </tr>
              </thead>
              <tbody>
                {ItemState.ListOfItems.map((dat : any, index : any) => (
                  <tr className="text-end bg-white text-center" key={index}>
                    <td>{dat.realTotalDiscount}</td>
                    <td>{dat.totalAmount}</td>
                    <td>{dat.totalQuantity}</td>
                    <td>{dat.costOfItem}</td>
                    <td>{dat.itemName}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    </DashboardLayout>
  );
};

export default StockRecord;
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
