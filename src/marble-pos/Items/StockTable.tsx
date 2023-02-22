import React, { useState } from "react";
import { Table, FormControl, InputGroup, Form, Row, Col, Pagination } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";

const StockRecord = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(5);
  const items = [
    { ItemName: "Item 1", CostOfItem: 50, TotalQuantity: 500, TotalAmount: 50 * 500 },
    { ItemName: "Item 2", CostOfItem: 60, TotalQuantity: 320, TotalAmount: 60 * 320 },
    { ItemName: "Item 3", CostOfItem: 90, TotalQuantity: 150333, TotalAmount: 90 * 150 },
    { ItemName: "Item 4", CostOfItem: 60, TotalQuantity: 450, TotalAmount: 60 * 450 },
    { ItemName: "Item 5", CostOfItem: 150, TotalQuantity: 850, TotalAmount: 150 * 850 },
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
    <div>
      <Row className="mt-3">
        <Col md={12}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search by Name or Phone No"
              aria-label="Search by Name or Phone No"
              aria-describedby="basic-addon2"
              onChange={handleSearch}
            />
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="">
          <Table hover className="bg-white p-3 rounded-4">
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Cost Of Item</th>
                <th>Total Quantity</th>
                <th>Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((dat, index) => (
                <tr key={index}>
                  <td>{dat.ItemName}</td>
                  <td>{dat.CostOfItem}</td>
                  <td>{dat.TotalQuantity}</td>
                  <td>{dat.TotalAmount}</td>
                  <td>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
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
