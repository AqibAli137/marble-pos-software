import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import FirstTable from "./TodoList/FirstTable";
import { Table } from "antd";
import IconButton from "@mui/material/IconButton";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { AppDispatch, RootState } from "../store";
import { updateOrderList } from "../@features/SaleItems/SaleItemSlice";
import Checkbox from "@mui/material/Checkbox";
import "../app.css";
import Invoicer from "./InvoiceView/Invoicer";
import { useReactToPrint } from "react-to-print";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import { OrderTableColumns } from "./ColumnData";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

const items = [
  { ItemName: "Item 1", CostOfItem: 50, TotalQuantity: 500, TotalAmount: 50 * 500 },
  { ItemName: "Item 2", CostOfItem: 60, TotalQuantity: 320, TotalAmount: 60 * 320 },
  { ItemName: "Item 3", CostOfItem: 90, TotalQuantity: 150, TotalAmount: 90 * 150 },
  { ItemName: "Item 4", CostOfItem: 60, TotalQuantity: 450, TotalAmount: 60 * 450 },
  { ItemName: "Item 5", CostOfItem: 150, TotalQuantity: 850, TotalAmount: 150 * 850 },
];



const SaleDashboard = () => {



  const [selectedItem, setSelectedItem] = useState(items[0]);

  const [SelectQuantity, setSelectQuantity] = useState(1);
  const [SelectPrice, setSelectPrice] = useState(60);
  const [yourBill, setYourBill] = useState(60);

  const [saleItem, setSaleItem] = useState([] as any);
  const [ItemAddSpanShow, setItemAddSpanShow] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  let saleState = useSelector((store: RootState) => store.sale);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  useEffect(() => {
    setYourBill(SelectQuantity * SelectPrice);
  }, [SelectQuantity, SelectPrice]);

  const ChangeDropdown = (val: any) => {
    const selectedItem = items.find((item) => item.ItemName === val);
    setSelectedItem(selectedItem as any);
    setYourBill(60);
    setSelectPrice(60);
    setSelectQuantity(1);
  };
  const newSaleItem = {
    ItemName: selectedItem.ItemName,
    ItemQuantity: SelectQuantity,
    SetPrice: SelectPrice,
    YourBill: yourBill,
  };

  const AddSaleItem = async () => {
    setSaleItem([...saleItem, newSaleItem]);
    dispatch(updateOrderList([...saleItem, newSaleItem]));
    setItemAddSpanShow(true);

    setInterval(() => {
      setItemAddSpanShow(false);
    }, 3000);
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
  // const columns = [
  //   {
  //     title: "Date",
  //     dataIndex: "OrderDate",
  //   },
  //   {
  //     title: "Name",
  //     dataIndex: "ItemName",
  //   },
  //   {
  //     title: "Quantity",
  //     dataIndex: "ItemQuantity",
  //   },
  //   {
  //     title: "Price",
  //     dataIndex: "SetPrice",
  //   },
  //   {
  //     title: "Bill",
  //     dataIndex: "YourBill",
  //   },
  // ];
  const oldData = [
    {
      OrderDate: "08/6/2022, 11am",
      ItemName: "item 1",
      ItemQuantity: 354,
      SetPrice: 87,
      YourBill: 78698,
    },
    {
      OrderDate: "09/1/2022, 7pm",
      ItemName: "item 2",
      ItemQuantity: 54,
      SetPrice: 57,
      YourBill: 56960,
    },
    {
      OrderDate: "11/9/2022, 5pm",
      ItemName: "item 1",
      ItemQuantity: 78,
      SetPrice: 45,
      YourBill: 95680,
    },
  ];
  const currencies = [
    {
      value: 'Item 1',
      label: 'Item 1',
    },
    {
      value: 'Item 2',
      label: 'Item 2',
    },
    {
      value: 'Item 3',
      label: 'Item 3',
    },
    {
      value: 'Item 4',
      label: 'Item 4',
    },
  ];

  return (
    <>
      <div>
        <h2 className="fs-3">Customer Order</h2>
        <Box
      component="form"
      sx={{
        display:"flex",
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField
          id="outlined-select-currency-native"
          onChange={(e) => {
            ChangeDropdown(e.target.value);
          }}
          select
          label="Native select"
          defaultValue="EUR"
          SelectProps={{
            native: true,
          }}
          helperText="Please select your item"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        </div>
        <div>
        <TextField
          id="filled-multiline-flexible"
          label="Set Quantity"
          value={SelectQuantity}
                          // min="0"
                          // step="10"
                          // max={selectedItem.TotalQuantity}
                          onChange={(e) => {
                            if (
                              parseInt(e.target.value) === selectedItem.TotalQuantity ||
                              parseInt(e.target.value) < selectedItem.TotalQuantity
                            ) {
                              setSelectQuantity(parseInt(e.target.value));
                            }
                          }}
          multiline
          // maxRows={4}
        />
        <TextField
          id="outlined-textarea"
          label="Set Price"
          placeholder="Set Your Price Here"
          multiline
          value={SelectPrice}
          type="number"
          // min="0"
          // step="1"
          onChange={(e) => {
            if (
              parseInt(e.target.value) === 100000 ||
              parseInt(e.target.value) < 100000
            ) {
              setSelectPrice(parseFloat(e.target.value));
            }
          }}
        />
        </div>
        </Box>
        <div className="table-responsive w-100">
        <table className="table table-striped table-dark">
  <thead>
    <tr className="fs-6">
      <th scope="col">Your Bill</th>
      <th scope="col">Cost/Ft/No</th>
      <th scope="col">Total Quantity</th>
      <th scope="col">Total Amount</th>
      <th scope="col">Add</th>
    </tr>
  </thead>
  <tbody>
    <tr className="fs-6">
      <td>{yourBill}</td>
      <td>{selectedItem.CostOfItem}</td>
      <td>{selectedItem.TotalQuantity}</td>
      <td>{selectedItem.TotalAmount}</td>
      <td>
      <IconButton aria-label="delete">
                    <AddTaskIcon fontSize="medium" className="text-success" onClick={AddSaleItem} />
                  </IconButton>
      </td>
    </tr>

  </tbody>
</table>
        </div>
      </div>
      {ItemAddSpanShow && (
        <div style={{ backgroundColor: "rgba(0, 128, 0, 0.164)" }} className="row p-3">
          <h3 className="text-center">Record is added in list</h3>
        </div>
      )}
      <div>
        <FirstTable TableData={saleItem} />
      </div>
      <div className="row mt-5">
        <div className="col-12">
          <div className="row bg-dark text-white py-2 px-0">
            <h3 className="text-center fs-4">Customer Old Record</h3>
          </div>
          <Table columns={OrderTableColumns} dataSource={oldData} />
          <div className="row bg-dark text-white py-2">
            <h3 className="text-center">New Order</h3>
          </div>
          <Table columns={OrderTableColumns} dataSource={saleItem} />
        </div>
        <div className="col-12">
          <div className="">
            <Invoicer />
            </div>
        </div>
      </div>
    </>
  );
};

export default SaleDashboard;
