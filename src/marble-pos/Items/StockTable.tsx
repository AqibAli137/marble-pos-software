import React, { useEffect } from "react";
import { Table, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import "../../app.css";
import axios from "axios";
import {
  UpdateAllItems,
  UpdateProfitItem,
  UpdateSelectedItem,
} from "../../@features/ItemListSlice/ItemListSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import "../../otherTable.css";
import { BASE_URL } from "../../@features/Constents";

const StockRecord = () => {
  let ItemState = useSelector((store: RootState) => store.Item);
  const dispatch = useDispatch<AppDispatch>();
  const defaultItem = [
    {
      id: -1,
      itemName: "پہلے، آپ اشیاء شامل کریں",
      costOfItem: 0,
      realItemCost: 0,
      totalQuantity: 0,
      totalAmount: 0,
      typeOfItem: "",
    },
  ];
  const defaultProfit = [
    {
      itemId: -1,
      profit: 0,
    },
  ];
  useEffect(() => {
    axios.get(`${BASE_URL}/api/Item`).then((res) => {
      res.data.length === 0
        ? dispatch(UpdateAllItems(defaultItem))
        : dispatch(UpdateAllItems(res.data));

      res.data.length === 0
        ? dispatch(UpdateSelectedItem(defaultItem[0]))
        : dispatch(UpdateSelectedItem(res.data[0]));
    });
    axios.get(`${BASE_URL}/api/CustomerOrder/ItemProfit`).then((res) => {
      res.data.length === 0
        ? dispatch(UpdateProfitItem(defaultProfit))
        : dispatch(UpdateProfitItem(res.data));
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
                رحمٰن ماربل اینڈ گرینائٹ <span className="fs-6">خأن ٹاون جی ٹی روڈ کامونکی</span>
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
                  <th>آئٹم  کا نام</th>
                </tr>
              </thead>
              <tbody>
                {ItemState.ListOfItems.map((dat: any, index: any) => (
                  <>
                    {/* {OrderState.ListOfOrders.map((i: any, index: any) => (
                      <>{dat.id === i.itemId && AddProfit(i.profit)}</>
                    ))} */}

                    <tr className="text-end bg-white text-center" key={index}>
                      <td>
                        {ItemState.ProfitItem.map(
                          (ip: any, ind: any) => ip.itemId === dat.id && <p>{ip.profit}</p>
                        )}
                      </td>
                      <td>{dat.totalAmount}</td>
                      <td>
                        <div className="d-flex justify-content-center">
                          <div
                            style={{
                              maxWidth: "max-content",
                              minWidth: "max-content",
                              marginRight: "10px",
                            }}
                            className="text-center"
                          >
                            {dat.typeOfItem}
                          </div>
                          {dat.totalQuantity}
                        </div>
                      </td>
                      <td>{dat.costOfItem}</td>
                      <td>{dat.itemName}</td>
                    </tr>
                  </>
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
