import React, { useEffect, useState } from "react";
import { Table, FormControl, InputGroup, Form, Row, Col, Pagination } from "react-bootstrap";
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
import { UpdateAllOrders } from "../../@features/Orders/OrdersSlice";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";
import {
  DateUpdate,
  UpdateEndDate,
  UpdateFilterList,
  UpdateStartDate,
  UpdateTotalProfit,
  UpdateTotalSale,
} from "../../@features/StockWithDate/StockWithProfit";
import "../../otherTable.css";
import StockCards from "./StockCards";

const StockWithDate = () => {
  let DateChange = useSelector((store: RootState) => store.DateChange);
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
    axios.get("https://localhost:7005/api/Item").then((res) => {
      res.data.length === 0
        ? dispatch(UpdateAllItems(defaultItem))
        : dispatch(UpdateAllItems(res.data));

      res.data.length === 0
        ? dispatch(UpdateSelectedItem(defaultItem[0]))
        : dispatch(UpdateSelectedItem(res.data[0]));
    });

    axios.get("https://localhost:7005/api/CustomerOrder/ItemProfit").then((res) => {
      res.data.length === 0
        ? dispatch(UpdateProfitItem(defaultProfit))
        : dispatch(UpdateProfitItem(res.data));
    });
  }, []);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const DateProfit = (dates: any) => {
    // console.log(dates);
    setState(dates);
    dispatch(DateUpdate(dates));
    // console.log(DateChange.DateChange);
    dispatch(UpdateStartDate(new Date(dates[0].startDate).toLocaleDateString()));
    dispatch(UpdateEndDate(new Date(dates[0].endDate).toLocaleDateString()));
  };

  const ClickFilter = () => {
    axios
      .post("https://localhost:7005/api/Item/FilterWithDate", {
        DateFrom: DateChange.startDate,
        DateTo: DateChange.endDate,
      })
      .then((res) => {
        console.log(res.data);
        dispatch(UpdateFilterList(res.data.listItem));
        dispatch(UpdateTotalSale(res.data.totalSale));
        dispatch(UpdateTotalProfit(res.data.totalProfit));
      })
      .catch((err) => {
        alert("دو تاریخیں منتخب کریں, اور دوبارہ کوشش کریں۔");
      });
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <div className="urdu">
        <div className="text-center">
          <div className="d-flex justify-content-between row">
            <div className="col-sm-8 col-md-4 col-lg-4 col-xl-4 col-xxl-4 col-xxxl-4">
              <DateRange
                //   style={{ margin: "2px" }}
                editableDateInputs={true}
                onChange={(item: any) => DateProfit([item.selection])}
                moveRangeOnFirstSelection={false}
                //   ranges={state}
                ranges={state as any}
              />
            </div>

            <div className="col-sm-8 col-md-4 col-lg-4 col-xl-4 col-xxl-4 col-xxxl-4 d-flex align-items-center text-center justify-content-center my-3">
              <button
                className="btn bg-primary text-white ActiveEffect urdu p-2 px-4 py-3"
                onClick={ClickFilter}
              >
                ریکارڈ چیک کریں
              </button>
            </div>
          </div>
        </div>
        <div style={{ background: "#d9ede1" }} className="row mt-4">
          <div className="col-12 text-center">
            <h1 className="my-3">
              <span>
                سبحان ماربل اینڈ گرینائٹ <span className="fs-6">خأن ٹاون جی ٹی روڈ کامونکی</span>
              </span>
            </h1>
          </div>
        </div>
        <Row>
          <Col md={12} className="urdu" style={{ height: "80vh", overflow: "scroll" }}>
            <Table hover className="bg-transparent urdu table-bordered rrounded-3">
              <thead>
                <tr className="text-end bg-white text-center ">
                  <th>آئٹم سے منافع</th>
                  <th>قیمت فروخت</th>
                  <th>فروخت کی مقدار</th>
                  <th>آئٹم کا نام</th>
                </tr>
              </thead>
              <tbody>
                {DateChange.filterList.map((dat: any, index: any) => (
                  <>
                    <tr className="text-end bg-white text-center" key={index}>
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
                            <span>Rs:</span>
                          </div>

                          {dat.costOfItem}
                        </div>
                      </td>
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
                            <span>Rs:</span>
                          </div>

                          {dat.totalAmount}
                        </div>
                      </td>
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
                          <p>{dat.totalQuantity}</p>
                        </div>
                      </td>
                      <td>{dat.itemName}</td>
                    </tr>
                  </>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <StockCards TotalSale={DateChange.totalSale} TotalProfit={DateChange.totalProfit} />
      </div>
    </DashboardLayout>
  );
};

export default StockWithDate;
