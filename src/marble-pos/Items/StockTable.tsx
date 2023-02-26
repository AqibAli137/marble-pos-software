import React, { useState } from "react";
import { Table, FormControl, InputGroup, Form, Row, Col, Pagination } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import '../../app.css'

const StockRecord = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(5);
  const items = [
    { ItemName: "سنی سرمئی", CostOfItem: 50, TotalQuantity: 500,RealTotalDiscount:4343, TotalAmount: 50 * 500 },
    { ItemName: "بادل", CostOfItem: 60, TotalQuantity: 320,RealTotalDiscount:4343, TotalAmount: 60 * 320 },
    { ItemName: "سکیٹنگ", CostOfItem: 90, TotalQuantity: 150333,RealTotalDiscount:4343, TotalAmount: 90 * 150 },
    { ItemName: "ٹویٹرا", CostOfItem: 60, TotalQuantity: 450,RealTotalDiscount:4343, TotalAmount: 60 * 450 },
    { ItemName: "کالا ماربل", CostOfItem: 150, TotalQuantity: 850,RealTotalDiscount:4343, TotalAmount: 150 * 850 },
    
    { ItemName: "سکیٹنگ", CostOfItem: 90, TotalQuantity: 150333,RealTotalDiscount:4343, TotalAmount: 90 * 150 },
    { ItemName: "کالا ماربل", CostOfItem: 150, TotalQuantity: 850,RealTotalDiscount:4343, TotalAmount: 150 * 850 },
    { ItemName: "سکیٹنگ", CostOfItem: 90, TotalQuantity: 150333,RealTotalDiscount:4343, TotalAmount: 90 * 150 },
    { ItemName: "ٹویٹرا", CostOfItem: 60, TotalQuantity: 450,RealTotalDiscount:4343, TotalAmount: 60 * 450 },
    { ItemName: "ٹویٹرا", CostOfItem: 60, TotalQuantity: 450,RealTotalDiscount:4343, TotalAmount: 60 * 450 },
    { ItemName: "کالا ماربل", CostOfItem: 150, TotalQuantity: 850,RealTotalDiscount:4343, TotalAmount: 150 * 850 },
  ];
  const handleSearch = (event: any) => {
    setSearch(event.target.value);
  };

  const filteredData = items.filter(
    (dat) =>
      dat.ItemName.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = filteredData.slice(indexOfFirstData, indexOfLastData);

  const paginate = (pageNumber: any) => {
    console.log(pageNumber);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />

    <div>
      <Row className="mt-3 urdu">
        <Col md={12}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="نام سے تلاش کریں۔"
              aria-label="نام سے تلاش کریں۔"
              aria-describedby="basic-addon2"
              onChange={handleSearch}
            />
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="" >
          <div className="" style={{overflow: "scroll"}}>
          <Table hover  className="bg-transparent p-3 urdu table-bordered">
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
              {currentData.map((dat, index) => (
                <tr className="text-end bg-white text-center" key={index}>
                  <td>{dat.RealTotalDiscount}</td>
                  <td>{dat.TotalAmount}</td>
                  <td>{dat.TotalQuantity}</td>
                  <td>{dat.CostOfItem}</td>
                  <td>{dat.ItemName}</td>
                 
                </tr>
              ))}
            </tbody>
          </Table>
          </div>
        </Col>
      </Row>
      {/* <Row className="mt-3">
        <Col md={12}>
          <Pagination
            className="justify-content-center"
            activePage={currentPage}
            itemsCountPerPage={dataPerPage}
            totalItemsCount={filteredData.length}
            pageRangeDisplayed={5}
            onChange={(pageNumber) => paginate(pageNumber)}
            hideDisabled
            itemClass="page-item"
            linkClass="page-link"
          />
        </Col>
      </Row> */}

    </div>
    </DashboardLayout>
  );
};

export default StockRecord;
