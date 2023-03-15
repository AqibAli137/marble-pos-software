import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import FirstTable from "./TodoList/FirstTable";
import IconButton from "@mui/material/IconButton";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { AppDispatch, RootState } from "../store";
import { updateOrderList } from "../@features/SaleItems/SaleItemSlice";
import "../app.css";
import { useReactToPrint } from "react-to-print";
import GatePass from "./salestableComponent/GatePass";
import KhataTafseel from "./salestableComponent/KhataTafseel";
import NewGatePass from "./salestableComponent/NewGatPass";
import { Divider } from "@mui/material";
import axios from "axios";
import { UpdateAllItems, UpdateSelectedItem } from "../@features/ItemListSlice/ItemListSlice";
import { Item } from "../Models/Item";
import { CustomerOrder } from "../Models/CustomerOrder";
import { UpdateAllGatPass, UpdateCustomerGatPass } from "../@features/GatPass/GatPassSlice";
import { UpdateSelectedOrders } from "../@features/Orders/OrdersSlice";
import LocalFooter from "../layouts/Advatisment/LocalFooter";
import { UpdateCustomerPayments } from "../@features/Payment/PaymentSlice";
import { UpdateNewOrderCustomer } from "../@features/Customer/CustomerSlice";

const SaleDashboard = () => {
  let saleState = useSelector((store: RootState) => store.sale);
  let ItemState = useSelector((store: RootState) => store.Item);
  let CustomerState = useSelector((store: RootState) => store.Customer);
  let GatPassState = useSelector((store: RootState) => store.GatPass);
  let OrdersState = useSelector((store: RootState) => store.Orders);

  // const [selectedItem, setSelectedItem] = useState(AllItem[0]);
  const [SelectQuantity, setSelectQuantity] = useState(1);
  const [SelectPrice, setSelectPrice] = useState(60);
  const [yourBill, setYourBill] = useState(60);
  const [selectItemCost, setSelectItemCost] = useState(60);
  const [stockPrice, setStockPrice] = useState(500 * 50);

  const [profit, setProfit] = useState(10);
  const [saleItem, setSaleItem] = useState([] as any);
  const [ItemAddSpanShow, setItemAddSpanShow] = useState(false);

  const [thisCustomer, setThisCustomer] = useState({} as any);

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
  useEffect(() => {
    axios
      .get("https://localhost:7005/api/Item")
      .then((res) => {
        res.data.length === 0
          ? dispatch(UpdateAllItems(defaultItem))
          : dispatch(UpdateAllItems(res.data));

        res.data.length === 0
          ? dispatch(UpdateSelectedItem(defaultItem[0]))
          : dispatch(UpdateSelectedItem(res.data[0]));
      })
      .catch(() => {});

    axios.get("https://localhost:7005/api/GatePass").then((res) => {
      dispatch(UpdateAllGatPass(res.data));
      let gatPassFilter = res.data.filter(
        (item: any) => item.customerId === CustomerState.NewOrderCustomer.id
      );
      dispatch(UpdateCustomerGatPass(gatPassFilter));
    });

    axios.get("https://localhost:7005/api/CustomerOrder").then((res) => {
      let filterCustomerorder = res.data.filter(
        (item: any) => item.customerId === CustomerState.NewOrderCustomer.id
      );
      dispatch(UpdateSelectedOrders(filterCustomerorder));
    });

    axios
      .get(
        `https://localhost:7005/api/Customer/PayementById?customerId=${CustomerState.NewOrderCustomer.id}`
      )
      .then((res) => {
        dispatch(UpdateCustomerPayments(res.data));
      });

      axios
      .get(
        `https://localhost:7005/api/Customer/${CustomerState.NewOrderCustomer.id}`
      )
      .then((res) => {
        dispatch(UpdateNewOrderCustomer(res.data))
      });
  }, []);

  useEffect(() => {
    setYourBill(SelectQuantity * SelectPrice);
    setProfit(SelectQuantity * SelectPrice - ItemState.SelectedItem.costOfItem * SelectQuantity);
  }, [SelectQuantity, SelectPrice]);

  const ChangeDropdown = (val: any) => {
    const selectedItem = ItemState.ListOfItems.find((item: any) => item.itemName === val);
    dispatch(UpdateSelectedItem(selectedItem));
    // setSelectedItem(selectedItem as any);
    setYourBill(60);
    setSelectPrice(60);
    setSelectQuantity(1);
    // setSelectItemCost();
  };

  useEffect(() => {
    setStockPrice(ItemState.SelectedItem.costOfItem * ItemState.SelectedItem.totalQuantity);
    setProfit(SelectPrice - ItemState.SelectedItem.costOfItem);
  }, [ItemState.SelectedItem]);
  const newSaleItem: CustomerOrder = {
    Id: 0,
    ItemId: ItemState.SelectedItem.id,
    CustomerId: CustomerState.NewOrderCustomer.id,
    ItemName: ItemState.SelectedItem.itemName,
    ItemQuantity: SelectQuantity,
    OrderDate: new Date().toLocaleString() + "",
    SetPrice: SelectPrice,
    YourBill: yourBill,
    GatePassNumber: "",
    Profit: 0,
    SecondOrderDate: new Date(),
  };

  const AddSaleItem = async () => {
    setSaleItem([...saleItem, newSaleItem]);
    dispatch(updateOrderList([...saleItem, newSaleItem]));
    setItemAddSpanShow(true);

    setInterval(() => {
      setItemAddSpanShow(false);
    }, 5000);
  };
  useEffect(() => {
    let newArray = saleItem.filter((item: any) => item !== saleState.localObject);
    setSaleItem(newArray);
    dispatch(updateOrderList(newArray));
  }, [saleState.localObject]);

  const dataToPrintRef = React.useRef<HTMLInputElement>(null);
  const handlePrint = useReactToPrint({
    content: () => dataToPrintRef.current!,
  });

  return (
    <>
      <div className="main urdu">
        <div style={{ background: "#d9ede1" }} className="row">
          <div className="col-12 text-center">
            <h1 className="my-3">
              <span>
                سبحان ماربل اینڈ گرینائٹ <span className="fs-6">خأن ٹاون جی ٹی روڈ کامونکی</span>
              </span>
            </h1>
          </div>
          <div className="col-12 text-center">
            <h5 className="my-3">
              <span className="fs6">
                ہمارے ہاں ہر قسم کا ماربل, بارڈر, پٹی, پھول اور گر ینائٹ کی تمام ورائٹی دستیاب ہے۔
                <span>نوید اختر-03016428683</span>
              </span>
            </h5>
          </div>
        </div>
        <div className="row">
          <div style={{ background: "#d9ede1" }} className="col-12 text-center my-3 p-3">
            <span className="name"> نام خریدار : </span>
            <span>{CustomerState.NewOrderCustomer.name} </span>
            <span> {CustomerState.NewOrderCustomer.address} </span>
          </div>
        </div>
        <div className="row table-responsive">
          {/* <SalesTable /> */}
          <table className="table table-bordered bg-light">
            <thead>
              <tr className="fs-5 text-center">
                <th className="py-4">ٹھیک ہے </th>
                <th className="py-4">بقیہ مال کی قیمت </th>
                <th className="py-4"> خرید ریٹ </th>
                <th className="py-4">بقیہ مال</th>
                <th className="py-4">بچت </th>
                <th className="py-4">قیمت </th>
                <th className="py-4">ریٹ </th>
                <th className="py-4">تعداد </th>
                <th className="py-4">نام جنس </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  style={{ maxWidth: "max-content", minWidth: "max-content" }}
                  className="text-center"
                >
                  {ItemState.SelectedItem.id > 0 && CustomerState.NewOrderCustomer.id && (
                    <IconButton aria-label="delete" className="text-center">
                      <AddTaskIcon
                        fontSize="medium"
                        className="text-success"
                        onClick={AddSaleItem}
                      />
                    </IconButton>
                  )}
                </td>
                <td style={{ maxWidth: "80px", minWidth: "max-content" }}>
                  <div className="form-control text-center">{stockPrice}</div>
                </td>
                <td style={{ maxWidth: "80px", minWidth: "max-content" }}>
                  <div className="form-control text-center">
                    {ItemState.SelectedItem.costOfItem}
                  </div>
                </td>
                <td style={{ maxWidth: "80px", minWidth: "max-content" }}>
                  <div className="form-control text-center">
                    {ItemState.SelectedItem.totalQuantity}
                  </div>
                </td>
                <td style={{ maxWidth: "80px", minWidth: "max-content" }}>
                  <div className="form-control text-center">{profit}</div>
                </td>
                <td style={{ maxWidth: "80px", minWidth: "max-content" }}>
                  <div className="form-control text-center">{yourBill}</div>
                </td>
                <td style={{ maxWidth: "80px", minWidth: "70px" }}>
                  <input
                    value={SelectPrice}
                    type="number"
                    min="0"
                    step="1"
                    onChange={(e) => {
                      if (parseFloat(e.target.value) === 1 || parseFloat(e.target.value) > 1) {
                        setSelectPrice(parseFloat(e.target.value));
                      }
                    }}
                    className="form-control text-center"
                  />
                </td>

                <td style={{ maxWidth: "max-content", minWidth: "90px" }}>
                  <div className="d-flex justify-content-between">
                    <div
                      style={{ maxWidth: "max-content", minWidth: "max-content" }}
                      className="bg-white text-center"
                    >
                      {ItemState.SelectedItem.typeOfItem}
                    </div>
                    <input
                      className="form-control text-center"
                      type="number"
                      value={SelectQuantity}
                      min="0"
                      step="10"
                      max={ItemState.SelectedItem.totalQuantity}
                      onChange={(e) => {
                        if (
                          parseFloat(e.target.value) === ItemState.SelectedItem.totalQuantity ||
                          parseFloat(e.target.value) < ItemState.SelectedItem.totalQuantity
                        ) {
                          setSelectQuantity(parseFloat(e.target.value));
                        }
                      }}
                    />
                  </div>
                </td>
                <td style={{ maxWidth: "200px", minWidth: "max-content" }} className="form-control">
                  <select
                    className=" text-end w-100 border-0 mr-2 rounded-3 "
                    onChange={(e) => {
                      ChangeDropdown(e.target.value);
                    }}
                  >
                    {ItemState.ListOfItems.map((item: any) => (
                      <>
                        <option key={item.itemName} value={item.itemName} className="py-2">
                          {item.itemName}
                          {console.log(item)}
                        </option>

                        <Divider />
                      </>
                    ))}
                  </select>
                </td>
              </tr>
              {/* Add more rows here */}
            </tbody>
          </table>
        </div>
      </div>
      {ItemAddSpanShow && (
        <div style={{ backgroundColor: "rgba(0, 128, 0, 0.164)" }} className="row p-3 main urdu">
          <h3 className="text-center">ریکارڈ فہرست میں شامل کیا گیا ہے۔</h3>
        </div>
      )}
      {saleItem[0] && <FirstTable TableData={saleItem} />}

      <div className="row">
        <div className="col">
          <div style={{ height: "700px", overflow: "scroll" }}>
            <KhataTafseel />
          </div>
        </div>
        <div className="col">
          <div style={{ height: "700px", overflow: "scroll" }}>
            {GatPassState.NewOrderGatPass.map((gatPass: any) => (
              <GatePass gatPassNumber={gatPass.gatePassNo} />
            ))}
            <NewGatePass />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <LocalFooter />
      </div>
    </>
  );
};

export default SaleDashboard;
