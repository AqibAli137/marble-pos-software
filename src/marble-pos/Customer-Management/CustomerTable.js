import React, { useState } from "react";
import { Table, FormControl, InputGroup, Form, Row, Col, Pagination } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "@mui/material";

const CustomerTable = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(5);
  const [data, setData] = useState([
    {
      Id: 4323,
      Name: "Naveed",
      Address: "Kmk",
      PhoneNo: "0304847589",
      IsActive: true,
      PaymentRcv: 100000,
      PendingPayment: 30000,
      TotalAmount: 123300,
    },
    {
      Id: 4323,
      Name: "Yasir",
      Address: "TDM",
      PhoneNo: "0303098778",
      IsActive: true,
      PaymentRcv: 50000,
      PendingPayment: 130000,
      TotalAmount: 123300,
    },
    {
      Id: 4323,
      Name: "Arbaz Ahmad",
      Address: "MDK",
      PhoneNo: "0304987589",
      IsActive: true,
      PaymentRcv: 300000,
      PendingPayment: 86100,
      TotalAmount: 123300,
    },
    {
      Id: 4323,
      Name: "Arbaz Ahmad",
      Address: "MDK",
      PhoneNo: "0304987589",
      IsActive: true,
      PaymentRcv: 300000,
      PendingPayment: 86100,
      TotalAmount: 123300,
    },

    // { name: "John Doe", address: "123 Main St", phone: "555-555-5555", paymentRcv: 100, pending: 50, payment: 150, action: "Edit" },
    // { name: "Jane Doe", address: "456 Main St", phone: "555-555-5556", paymentRcv: 200, pending: 100, payment: 300, action: "Edit" },
    // { name: "Jim Smith", address: "789 Main St", phone: "555-555-5557", paymentRcv: 300, pending: 200, payment: 500, action: "Edit" },
    // { name: "Jim Smith", address: "789 Main St", phone: "555-555-5557", paymentRcv: 300, pending: 200, payment: 500, action: "Edit" },
    // { name: "Jim Smith", address: "789 Main St", phone: "555-555-5557", paymentRcv: 300, pending: 200, payment: 500, action: "Edit" },
    // { name: "Jim Smith", address: "789 Main St", phone: "555-555-5557", paymentRcv: 300, pending: 200, payment: 500, action: "Edit" },
    // { name: "Jim Smith", address: "789 Main St", phone: "555-555-5557", paymentRcv: 300, pending: 200, payment: 500, action: "Edit" },
  ]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredData = data.filter(
    (dat) =>
      dat.Name.toLowerCase().includes(search.toLowerCase()) ||
      dat.PhoneNo.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = filteredData.slice(indexOfFirstData, indexOfLastData);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
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
        <Col md={12}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Phone No</th>
                <th>Payment Rcv</th>
                <th>Pending</th>
                <th>Tottal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((dat, index) => (
                <tr key={index}>
                  <td>{dat.Name}</td>
                  <td>{dat.Address}</td>
                  <td>{dat.PhoneNo}</td>
                  <td>{dat.PaymentRcv}</td>
                  <td>{dat.PendingPayment}</td>
                  <td>{dat.TotalAmount}</td>
                  <td>
                    <Button variant="contained" className="text-white ActiveEffect my-3">
                      Payment Rcv
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row className="mt-3">
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
      </Row>
    </div>
  );
};

export default CustomerTable;
