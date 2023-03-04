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
  
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    axios.get("https://localhost:7005/api/Item").then((res) => {
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
