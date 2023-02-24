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
  const [value, setvalue] = useState(null)
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
      <Row className="mt-3 urdu">
        <Col md={12}>
          <InputGroup className="mb-3 urdu">
            <FormControl
              placeholder="نام یا فون نمبر سے تلاش کریں۔"
              aria-label="نام یا فون نمبر سے تلاش کریں۔"
              aria-describedby="basic-addon2"
              onChange={handleSearch}
            />
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="urdu">
          <Table hover className="bg-transparent p-3 rounded-4 table-bordered">
            <thead>
              <tr className="text-center" >
                <th className="text-center">عمل</th>
                <th>کل</th>
                <th>زیر التواء رقم</th>
                <th>زیر التواء</th>
                <th>ادائیگی موصول</th>
                <th>فون نمبر</th>
                <th>پتہ</th>
                <th>نام</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((dat, index) => (
                <tr key={index} className="text-center">
                   <td className="d-flex justify-content-center">
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
                          horizontal: "right",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "left",
                        }}
                      >
                        {/* <div className="bg-dark"> */}
                        <Button variant="text" type="button" className="shadow-none ActiveEffect ">
                          <span className="mx-2 urdu" onClick={handlePopOver}>
                          ادائیگی
                          </span>
                          <MonetizationOnIcon />
                        </Button>
                        <br />
                        <Button variant="text" className="shadow-none ActiveEffect">
                          <div className="" onClick={handleNewOrder.bind(this)}>
                          <span className="mx-2 urdu">نیا آرڈر</span>
                            <ViewComfyIcon /> 
                          </div>
                        </Button>
                        <br />
                        <Button variant="text" className="shadow-none ActiveEffect">
                          <div className="" onClick={handleDetails.bind(this, dat)}>
                          <span className="mx-2 urdu">تفصیلات چیک کریں۔</span>
                            <ViewComfyIcon /> 
                          </div>
                        </Button>
                        <br />
                        <Button variant="text" className="shadow-none ActiveEffect">
                          <div className="" onClick={handleReturns.bind(this, dat)}>
                          <span className="mx-2 urdu">آئٹمز واپس کریں۔</span>
                            <ViewComfyIcon /> 
                          </div>
                        </Button>
                        {/* </div> */}
                      </Menu>
                      <Modal show={ModalOpen} onHide={closeModal}>
                        <Modal.Header>
                          <Modal.Title > ادائیگی موصول </Modal.Title>
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
                  <td>{dat.TotalAmount}</td>
                  <td style={{color:"white"}}  className={index===3 || index===0?"bg-success":"bg-danger"}>{index===3 || index===0?"زیر التواء نہیں":"زیر التواء رقم"}</td>
                  <td>{dat.PendingPayment}</td>
                  <td>{dat.PaymentRcv}</td>
                  <td>{dat.PhoneNo}</td>
                  <td>{dat.Address}</td>
                 
                  <td>{dat.Name}</td>
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
