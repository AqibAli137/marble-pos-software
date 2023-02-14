import { Table } from "antd";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { Checkbox, Menu } from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import { Modal } from "react-bootstrap";
import PayementRCV from "./Payement";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Customers = [
  {
    Id: 4323,
    Name: "Naveed",
    Address: "Kmk",
    PhoneNo: "0304847589",
    IsActive: true,
    PaymentRcv: 100000,
    PendingPayment: 30000,
    CustomerOrders: [
      {
        OrderDate: "12/05/2022 , 5pm",
        Id: 323,
        ItemName: "Item 1",
        ItemQuantity: 100,
        SetPrice: 70,
        YourBill: 70000,
      },
      {
        OrderDate: "09/01/2022 , 3pm",
        Id: 324,
        ItemName: "Item 2",
        ItemQuantity: 50,
        SetPrice: 95,
        YourBill: 45500,
      },
    ],
  },
  {
    Id: 4323,
    Name: "Yasir",
    Address: "TDM",
    PhoneNo: "0303098778",
    IsActive: true,
    PaymentRcv: 50000,
    PendingPayment: 130000,
    CustomerOrders: [
      {
        OrderDate: "12/05/2022 , 2pm",
        Id: 323,
        ItemName: "Item 3",
        ItemQuantity: 200,
        SetPrice: 60,
        YourBill: 120000,
      },
      {
        OrderDate: "1/07/2022 , 11am",
        Id: 324,
        ItemName: "Item 1",
        ItemQuantity: 190,
        SetPrice: 95,
        YourBill: 179500,
      },
    ],
  },
  {
    Id: 4323,
    Name: "Arbaz Ahmad",
    Address: "MDK",
    PhoneNo: "0304987589",
    IsActive: true,
    PaymentRcv: 300000,
    PendingPayment: 86100,
    CustomerOrders: [
      {
        OrderDate: "2/08/2022 , 12pm",
        Id: 323,
        ItemName: "Item 1",
        ItemQuantity: 100,
        SetPrice: 70,
        YourBill: 70000,
      },
      {
        OrderDate: "9/05/2022, 1pm",
        Id: 324,
        ItemName: "Item 2",
        ItemQuantity: 50,
        SetPrice: 95,
        YourBill: 45500,
      },
    ],
  },
  {
    Id: 4323,
    Name: "Arbaz Ahmad",
    Address: "MDK",
    PhoneNo: "0304987589",
    IsActive: true,
    PaymentRcv: 300000,
    PendingPayment: 86100,
    CustomerOrders: [
      {
        OrderDate: "2/08/2022 , 12pm",
        Id: 323,
        ItemName: "Item 1",
        ItemQuantity: 100,
        SetPrice: 70,
        YourBill: 70000,
      },
      {
        OrderDate: "9/05/2022, 1pm",
        Id: 324,
        ItemName: "Item 2",
        ItemQuantity: 50,
        SetPrice: 95,
        YourBill: 45500,
      },
    ],
  }
];
const CutomerRecord = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [ModalOpen, setModalOpen] = useState(false);
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
  const handleNewOrder =()=>{
    navigate('/dashboard')
  }
  const handleGatPass =()=>{

  }
  const columns = [
    {
      title: "Name",
      dataIndex: "Name",
      key: "Name",
    },
    {
      title: "Address",
      dataIndex: "Address",
      key: "Address",
    },
    {
      title: "Phone No",
      dataIndex: "PhoneNo",
      key: "PhoneNo",
    },

    {
      title: "Payment Rcv",
      dataIndex: "PaymentRcv",
      key: "PaymentRcv",
    },
    {
      title: "Pending Payment",
      dataIndex: "PendingPayment",
      key: "PendingPayment",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: () => (
        <>
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
              // style={{boxShadow: "none"}}
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
              <Button
                variant="text"
                type="button"
                className="shadow-none"
                // onClick={handleUpdate.bind(this, usr)}
              >
                <MonetizationOnIcon />
                <span className="mx-2" onClick={handlePopOver}>
                  Payment
                </span>
              </Button>
              <br />
              <Button
                variant="text"
                // color='error'
                className="shadow-none"
                // onClick={handleDeleteUser.bind(this, usr)}
              >
                <div className="" onClick={handleNewOrder.bind(this,)}>

                <ViewComfyIcon /> <span className="mx-2 fs-4"> New Order</span>
                </div>
              </Button>
              <Button
                variant="text"
                className="shadow-none"
                // onClick={handleDeleteUser.bind(this, usr)}
              >
                <div className="" onClick={(e)=>{console.log(e.target);
                }}>

                <ViewComfyIcon /> <span className="mx-2">Gat-Pass</span>
                </div>
              </Button>
            </Menu>
            <Modal show={ModalOpen} onHide={closeModal}>
              <Modal.Header >
                {/* closeButton */}
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
        </>
      ),
    },
  ];
  const [companies, setcompanies] = useState([] as any);
  const navigate = useNavigate();
  useEffect(() => {
    const getCompanies = async () => {
      // const companies = await getCompaniesAsync()
      // if (companies) {
      setcompanies(Customers);
      // }
    };
    getCompanies();
  }, []);
  const tableData = companies.map((item: any, index: any) => {
    return {
      ...item,
      key: index,
    };
  });

  return (
    <Table
      columns={columns}
      expandable={{
        expandedRowRender: (record) => (
          <>
            <Typography className="mt-3 fw-bold fs-3" variant="h1" gutterBottom component="div">
              Customers Record
            </Typography>
            <table className="table table-striped table-row-gray-300 align-middle gs-0 gy-4 w-100">
              <thead className="fw-bolder">
                <th className="min-w-10px text-center">Date</th>
                <th className="min-w-10px text-center">Item Name</th>
                <th className="min-w-10px text-center">Item Quantity</th>
                <th className="min-w-10px text-center">Set Price</th>
                <th className="min-w-10px text-center">Your Bill</th>
                <th className="min-w-10px text-center">Action</th>
              </thead>
              {/* Owners details */}
              <tbody>
                {record.CustomerOrders.map((ordersRow: any, index:any) => (
                  <tr key={index} className="p-0 m-0">
                    <td className="p-0 m-0">
                      <span className=" text-center d-block fs-6">{ordersRow.OrderDate}</span>
                    </td>
                    <td className="p-0 m-0">
                      <span className=" text-center d-block fs-6">{ordersRow.ItemName}</span>
                    </td>
                    <td className="p-0 m-0">
                      <span className=" text-center d-block fs-6">{ordersRow.ItemQuantity}</span>
                    </td>
                    <td className="p-0 m-0">
                      <span className="text-center text-dark d-block fs-6">
                        {ordersRow.SetPrice}
                      </span>
                    </td>
                    <td className="text-center p-0 m-0">
                      <span className=" text-dark d-block fs-6">{ordersRow.YourBill}</span>
                    </td>

                    <td className="text-center p-0 m-0">
                      <div className="d-flex justify-content-center">
                        <Checkbox />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className='d-flex justify-content-end'>
            <Button variant="contained" className="text-white ActiveEffect">
              Print Select
            </Button>
            </div>
          </>
        ),
        rowExpandable: (record) => record.name !== "Not Expandable",
      }}
      dataSource={tableData}
    />
  );
};
export default CutomerRecord;
