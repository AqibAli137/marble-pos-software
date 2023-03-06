import React, { useEffect, useState } from "react";
import { Table, FormControl, InputGroup, Form, Row, Col, Pagination } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "@mui/material";
import { Menu } from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import { Modal } from "react-bootstrap";
import PayementRCV from "./Payement";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useNavigate } from "react-router-dom";
import "./customertable.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { UpdateAllCustomers, UpdateNewOrderCustomer } from "../../@features/Customer/CustomerSlice";
import { UpdateCustomerPaymentRcv } from "../../@features/Payment/PaymentSlice";
const CustomerTable = () => {
  const [search, setSearch] = useState("");
  const [getData, setGetData] = useState([] as any);

  let CustomerState = useSelector((store: RootState) => store.Customer);

  const dispatch = useDispatch<AppDispatch>();
  const [FilterCustomers, setFilterCustomers] = useState([] as any);
  const [allData, setAllData] = useState([] as any);

  useEffect(() => {
    axios.get("https://localhost:7005/api/Customer").then((res) => {
      setFilterCustomers(res.data);
      dispatch(UpdateAllCustomers(res.data));
      setAllData(res.data);
      // dispatch(UpdateSelectedItem(res.data[0]))
      setGetData(res.data);
    });
  }, []);

  const [dropdownData, setDropdownData] = useState("All Data");

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
  const handlePopOver = (dataa: any) => {
    console.log(dataa);

    dispatch(UpdateCustomerPaymentRcv(dataa));
    setModalOpen(true);
    setAnchorEl(null);
  };

  const handleNewOrder = (dat: any) => {
    dispatch(UpdateNewOrderCustomer(dat)) && navigate("/sale");
  };
  const handleReturns = (row: any) => {
    dispatch(UpdateCustomerPaymentRcv(row)) &&
    navigate("/returns");
  };

  useEffect(() => {
    const newList = allData.filter(
      (dat: any) =>
        dat.name.toLowerCase().includes(search.toLowerCase()) ||
        dat.phoneNo.toLowerCase().includes(search.toLowerCase())
    );
    setFilterCustomers(newList);
  }, [search]);

  useEffect(() => {
    console.log(allData);

    const NotStart = allData.filter((dat: any) => dat.totalBill === 0);
    const ContinueRecord = allData.filter(
      (dat: any) => dat.pendingPayment != 0 && dat.totalBill != 0
    );
    const ZeroRecord = allData.filter((dat: any) => dat.pendingPayment === 0 && dat.totalBill != 0);

    dropdownData === "No Start" && setFilterCustomers(NotStart);

    dropdownData === "Continue" && setFilterCustomers(ContinueRecord);

    dropdownData === "Zero" && setFilterCustomers(ZeroRecord);

    dropdownData === "All Data" && setFilterCustomers(allData);
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
            <option value="All Data">کل کسٹمر</option>
            <option value="No Start">ابھی شروع نہیں ہوا</option>
            <option value="Continue">جاری رہے</option>
            <option value="Zero">کھاتا نیل ہو گیا</option>
          </select>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="urdu" style={{ height: "80vh", overflow: "scroll" }}>
          <Table hover className="bg-transparent rounded-4 table-bordered h-100" responsive>
            <thead>
              <tr className="text-center bg-white">
                <th className="py-3">عمل</th>
                <th className="py-3"> کل رقم</th>
                <th className="py-3"> تفضیل </th>
                <th className="py-3">رقم بکایا</th>
                <th className="py-3">وصول رقم</th>
                <th className="py-3">فون نمبر</th>
                <th className="py-3">پتہ</th>
                <th className="py-3">نام</th>
              </tr>
            </thead>
            <tbody>
              {FilterCustomers.map((dat: any, index: any) => (
                <tr
                  className={
                    dat.totalBill === 0 && dat.pendingPayment === 0
                      ? "danger"
                      : dat.pendingPayment === 0 && dat.totalBill != 0
                      ? "success"
                      : "greyCol"
                  }
                  style={{ textAlign: "center" }}
                  key={index}
                >
                  <td className="d-flex justify-content-center">
                    <div className="text-black buttonColor">
                      <Button
                        variant="text"
                        className="shadow-none ActiveEffect text-black buttonColor"
                      >
                        <div
                          className=""
                          onClick={() => {
                            handlePopOver(dat);
                          }}
                        >
                          <span className=" urdu">ادائیگی</span>
                          <ViewComfyIcon />
                        </div>
                      </Button>

                      <Button
                        variant="text"
                        className="shadow-none ActiveEffect text-black buttonColor"
                      >
                        <div className="" onClick={()=>handleReturns(dat)}>
                          <span className=" urdu">واپس کریں۔</span>
                          <ViewComfyIcon />
                        </div>
                      </Button>
                      <Button
                        variant="text"
                        className="shadow-none ActiveEffect text-black buttonColor"
                      >
                        <div className="">
                          <span
                            onClick={() => {
                              handleNewOrder(dat);
                            }}
                            className=" urdu"
                          >
                            نیا آرڈر
                          </span>
                          <ViewComfyIcon />
                        </div>
                      </Button>
                    </div>
                    {/* <div className="d-flex justify-content-center">
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
                       
                        <Button variant="text" type="button" className="shadow-none ActiveEffect ">
                          <span className="mx-2 urdu" onClick={handlePopOver}>
                            ادائیگی
                          </span>
                          <MonetizationOnIcon />
                        </Button>
                        <br />
                        <Button variant="text" className="shadow-none ActiveEffect">
                          <div className="" >
                            <span onClick={()=>{handleNewOrder(dat.id)}} className="mx-2 urdu">نیا آرڈر</span>
                            <ViewComfyIcon />
                          </div>
                        </Button>
                        <br />
                       
                        <br />
                        <Button variant="text" className="shadow-none ActiveEffect">
                          <div className="" onClick={handleReturns.bind(this, dat)}>
                            <span className="mx-2 urdu">آئٹمز واپس کریں۔</span>
                            <ViewComfyIcon />
                          </div>
                        </Button>
                        
                      </Menu>
                      <Modal show={ModalOpen} onHide={closeModal}>
                        <Modal.Header>
                          <Modal.Title> وصول رقم </Modal.Title>
                        </Modal.Header>
                        <PayementRCV />
                        <Modal.Footer className="text-center">
                          <div onClick={() => setModalOpen(false)}>
                            <ExitToAppIcon color="error" fontSize="medium" />
                          </div>
                        </Modal.Footer>
                      </Modal>
                    </div> */}
                  </td>
                  <td>{dat.totalBill}</td>
                  <td className="text-end">
                    {console.log(dat)}
                    
                    {dat.totalBill === 0 && dat.pendingPayment === 0 ? "شروع نہیں" :
                    dat.pendingPayment === 0 && dat.totalBill != 0 ? "کھاتا نیل ہو گیا":
                    'جاری رہے'}
                  </td>

                  <td>{dat.pendingPayment}</td>
                  <td>{dat.paymentRcv}</td>
                  <td>{dat.phoneNo}</td>
                  <td className="text-end">{dat.address}</td>

                  <td className="text-end">{dat.name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Modal show={ModalOpen} onHide={closeModal}>
        <Modal.Header>
          <Modal.Title> وصول رقم </Modal.Title>
        </Modal.Header>
        <PayementRCV />
        <Modal.Footer className="text-center">
          <div onClick={() => setModalOpen(false)}>
            <ExitToAppIcon color="error" fontSize="medium" />
          </div>
        </Modal.Footer>
      </Modal>
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
