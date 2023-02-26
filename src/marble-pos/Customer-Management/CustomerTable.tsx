import React, { useEffect, useState } from "react";
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
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import NativeSelect from "@mui/material/NativeSelect";
import "./customertable.css";
import NewDropDowns from "./NewDropDowns";
const CustomerTable = () => {
  const [search, setSearch] = useState("");
  // const [currentPage, setCurrentPage] = useState(1);
  // const [dataPerPage] = useState(5);
  // const [value, setvalue] = useState(null);
  const [data, setData] = useState([
    {
      Id: 4323,
      Name: "نوید اختر",
      Address: "کاموکی",
      PhoneNo: "0304847589",
      IsActive: true,
      PaymentRcv: 100000,
      PendingPayment: 33000,
      TotalAmount: 123300,
    },
    {
      Id: 4323,
      Name: "یاسر علی",
      Address: "ٹپیالہ دوست محمد",
      PhoneNo: "0303098778",
      IsActive: true,
      PaymentRcv: 123300,
      PendingPayment: 0,
      TotalAmount: 123300,
    },
    {
      Id: 4323,
      Name: "ارباز احمد",
      Address: "مریدکی سٹی",
      PhoneNo: "0304987589",
      IsActive: true,
      PaymentRcv: 0,
      PendingPayment: 0,
      TotalAmount: 0,
    },
    {
      Id: 4323,
      Name: "نوید اختر",
      Address: "کاموکی",
      PhoneNo: "0304847589",
      IsActive: true,
      PaymentRcv: 100000,
      PendingPayment: 0,
      TotalAmount: 100000,
    },
    {
      Id: 4323,
      Name: "یاسر علی",
      Address: "ٹپیالہ دوست محمد",
      PhoneNo: "0303098778",
      IsActive: true,
      PaymentRcv: 50000,
      PendingPayment: 130000,
      TotalAmount: 123300,
    },
    {
      Id: 4323,
      Name: "عاقب خالد",
      Address: "کاموکی",
      PhoneNo: "0304847589",
      IsActive: true,
      PaymentRcv: 100000,
      PendingPayment: 30000,
      TotalAmount: 123300,
    },
    {
      Id: 4323,
      Name: "نوید اختر",
      Address: "کاموکی",
      PhoneNo: "0304847589",
      IsActive: true,
      PaymentRcv: 0,
      PendingPayment: 0,
      TotalAmount: 0,
    },
    {
      Id: 4323,
      Name: "یاسر علی",
      Address: "ٹپیالہ دوست محمد",
      PhoneNo: "0303098778",
      IsActive: true,
      PaymentRcv: 50000,
      PendingPayment: 130000,
      TotalAmount: 123300,
    },
    {
      Id: 4323,
      Name: "نوید اختر",
      Address: "کاموکی",
      PhoneNo: "0304847589",
      IsActive: true,
      PaymentRcv: 100000,
      PendingPayment: 30000,
      TotalAmount: 123300,
    },
    {
      Id: 4323,
      Name: "عاقب خالد",
      Address: "ٹپیالہ دوست محمد",
      PhoneNo: "0303098778",
      IsActive: true,
      PaymentRcv: 50000,
      PendingPayment: 130000,
      TotalAmount: 123300,
    },
  ]);

  const [dropdownData, setDropdownData] = useState("All Data");

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [ModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const [FilterCustomers, setFilterCustomers] = useState(data);
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
  // const handleDetails = (row: any) => {
  //   navigate("/explore");
  // };
  const handleReturns = (row: any) => {
    navigate("/returns");
  };

  useEffect(() => {
    const newList = data.filter(
      (dat) =>
        dat.Name.toLowerCase().includes(search.toLowerCase()) ||
        dat.PhoneNo.toLowerCase().includes(search.toLowerCase())
    );
    setFilterCustomers(newList);
  }, [search]);

  useEffect(() => {
    const newList = data.filter((dat) =>
      dropdownData === "No Start"
        ? dat.TotalAmount === 0
        : dropdownData === "Have Pending"
        ? dat.PendingPayment != 0
        : dropdownData === "No Pending"
        ? dat.PendingPayment === 0 && dat.TotalAmount != 0
        : dat.Id != 0
    );
    console.log(newList);

    setFilterCustomers(newList);
  }, [dropdownData]);

  // const filteredData = data.filter(
  //   (dat) =>
  //     dat.Name.toLowerCase().includes(search.toLowerCase()) ||
  //     dat.PhoneNo.toLowerCase().includes(search.toLowerCase())
  // );

  // const indexOfLastData = currentPage * dataPerPage;
  // const indexOfFirstData = indexOfLastData - dataPerPage;
  // const currentData = filteredData.slice(indexOfFirstData, indexOfLastData);

  // const paginate = (pageNumber: any) => {
  //   console.log(pageNumber);
  // };

  return (
    <div>
      <Row className="mt-3 urdu">
        <Col lg={8}>
          <InputGroup className="mb-3 urdu">
            <FormControl
              className="text-end"
              placeholder="نام یا فون نمبر سے تلاش کریں۔"
              aria-label="نام یا فون نمبر سے تلاش کریں۔"
              aria-describedby="basic-addon2"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </InputGroup>
        </Col>
        <Col lg={4}>
          {/* <NewDropDowns /> */}
          <select
            className="form-select urdu fs-6 text-end"
            aria-label="Default select example"
            onChange={(e) => {
              setDropdownData(e.target.value);
            }}
          >
            <option value="All Data">کل</option>
            <option value="No Start">شروع نہیں </option>
            <option value="Have Pending">ادا نہیں کیا </option>
            <option value="No Pending">ادا کردیا </option>
          </select>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="urdu" style={{ height: "80vh", overflow: "scroll" }}>
          <Table hover className="bg-transparent p-3 rounded-4 table-bordered h-100" responsive>
            <thead>
              <tr className="text-center bg-white">
                <th className="py-3">عمل</th>
                <th className="py-3">کل</th>
                <th className="py-3"> زیر غور </th>
                <th className="py-3">زیر التواء</th>
                <th className="py-3">ادائیگی موصول</th>
                <th className="py-3">فون نمبر</th>
                <th className="py-3">پتہ</th>
                <th className="py-3">نام</th>
              </tr>
            </thead>
            <tbody>
              {FilterCustomers.map((dat, index) => (
                <tr
                  className={
                    dat.TotalAmount === 0
                      ? "danger"
                      : dat.PendingPayment === 0
                      ? "success"
                      : "greyCol"
                  }
                  // style={{ textAlign: "center" }}
                  key={index}
                >
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
                        className="text-black buttonColor"
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
                        {/* <Button variant="text" className="shadow-none ActiveEffect">
                          <div className="" onClick={handleDetails.bind(this, dat)}>
                            <span className="mx-2 urdu">تفصیلات چیک کریں۔</span>
                            <ViewComfyIcon />
                          </div>
                        </Button> */}
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
                          <Modal.Title> ادائیگی موصول </Modal.Title>
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
                  <td className="text-end">
                    {index === 3 || index === 0
                      ? "    ادا کردیا "
                      : index === 2
                      ? "ادا نہیں کیا"
                      : "شروع نہیں"}
                  </td>

                  <td>{dat.PendingPayment}</td>
                  <td>{dat.PaymentRcv}</td>
                  <td>{dat.PhoneNo}</td>
                  <td className="text-end">{dat.Address}</td>

                  <td className="text-end">{dat.Name}</td>
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
