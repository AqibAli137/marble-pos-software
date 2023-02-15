import React, { useState } from "react";
import { Table, FormControl, InputGroup, Form, Row, Col, Pagination } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "@mui/material";
import { Checkbox, Menu } from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import { Modal } from "react-bootstrap";
import PayementRCV from "./Payement";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useNavigate } from "react-router-dom";

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
  ]);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [ModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const handlePopOver = () => {
    setModalOpen(true);
    setAnchorEl(null);
  };
  const handleNewOrder = () => {
    navigate("/sale");
  };
  const handleDetails = (row: any) => {
    navigate("/explore");
  };
  const handleReturns = (row: any) => {
    navigate("/returns");
  };
  const handleSearch = (event: any) => {
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

  const paginate = (pageNumber: any) => {
    console.log(pageNumber);
  };

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
        <Col md={12} className="">
          <Table hover className="bg-white p-3 rounded-4">
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
                    {/* <Button variant="contained" className="text-white ActiveEffect my-3">
                      Payment Rcv
                    </Button> */}
                    <div className="d-flex justify-content-center">
                      <Button
                        id="demo-positioned-button"
                        aria-controls={open ? "demo-positioned-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                      >
                        Actions
                      </Button>
                      <Menu
                        id="demo-positioned-menu"
                        className="p-3"
                        elevation={1}
                        style={{ boxShadow: "none" }}
                        aria-labelledby="demo-positioned-button"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "left",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "left",
                        }}
                      >
                        {/* <div className="bg-dark"> */}
                        <Button variant="text" type="button" className="shadow-none ActiveEffect">
                          <MonetizationOnIcon />
                          <span className="mx-2" onClick={handlePopOver}>
                            Payment
                          </span>
                        </Button>
                        <br />
                        <Button variant="text" className="shadow-none ActiveEffect">
                          <div className="" onClick={handleNewOrder.bind(this)}>
                            <ViewComfyIcon /> <span className="mx-2"> New Order</span>
                          </div>
                        </Button>
                        <br />
                        <Button variant="text" className="shadow-none ActiveEffect">
                          <div className="" onClick={handleDetails.bind(this, dat)}>
                            <ViewComfyIcon /> <span className="mx-2">Check Details</span>
                          </div>
                        </Button>
                        <br />
                        <Button variant="text" className="shadow-none ActiveEffect">
                          <div className="" onClick={handleReturns.bind(this, dat)}>
                            <ViewComfyIcon /> <span className="mx-2">Return Items</span>
                          </div>
                        </Button>
                        {/* </div> */}
                      </Menu>
                      <Modal show={ModalOpen} onHide={closeModal}>
                        <Modal.Header>
                          <Modal.Title>Payment Received</Modal.Title>
                        </Modal.Header>
                        <PayementRCV />
                        <Modal.Footer className="text-center">
                          <div onClick={() => setModalOpen(false)}>
                            <ExitToAppIcon color="error" fontSize="medium" />
                          </div>
                        </Modal.Footer>
                      </Modal>
                    </div>
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
  );
};

export default CustomerTable;
