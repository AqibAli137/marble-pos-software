import React, { useState } from "react";
import { Table, FormControl, InputGroup, Form, Row, Col, Pagination } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomerTable = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(5);
  const [data, setData] = useState([
    { name: "John Doe", address: "123 Main St", phone: "555-555-5555", paymentRcv: 100, pending: 50, payment: 150, action: "Edit" },
    { name: "Jane Doe", address: "456 Main St", phone: "555-555-5556", paymentRcv: 200, pending: 100, payment: 300, action: "Edit" },
    { name: "Jim Smith", address: "789 Main St", phone: "555-555-5557", paymentRcv: 300, pending: 200, payment: 500, action: "Edit" },
    { name: "Jim Smith", address: "789 Main St", phone: "555-555-5557", paymentRcv: 300, pending: 200, payment: 500, action: "Edit" },
    { name: "Jim Smith", address: "789 Main St", phone: "555-555-5557", paymentRcv: 300, pending: 200, payment: 500, action: "Edit" },
    { name: "Jim Smith", address: "789 Main St", phone: "555-555-5557", paymentRcv: 300, pending: 200, payment: 500, action: "Edit" },
    { name: "Jim Smith", address: "789 Main St", phone: "555-555-5557", paymentRcv: 300, pending: 200, payment: 500, action: "Edit" },
  ]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredData = data.filter(
    (dat) =>
      dat.name.toLowerCase().includes(search.toLowerCase()) ||
      dat.phone.toLowerCase().includes(search.toLowerCase())
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
                <th>Payment</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((dat, index) => (
                <tr key={index}>
                  <td>{dat.name}</td>
                  <td>{dat.address}</td>
                  <td>{dat.phone}</td>
                  <td>{dat.paymentRcv}</td>
                  <td>{dat.pending}</td>
                  <td>{dat.payment}</td>
                  <td>{dat.action}</td>
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

