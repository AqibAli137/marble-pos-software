import React, { useState ,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import FirstTable from "./TodoList/FirstTable";
import { Table } from 'antd';
import IconButton from '@mui/material/IconButton'
import AddTaskIcon from '@mui/icons-material/AddTask';
import { AppDispatch, RootState } from "../store";
import { updateOrderList } from "../@features/SaleItems/SaleItemSlice";
import MDButton from "../components/MDButton";
import { Button } from "@mui/material";

const items = [
  { ItemName: "Item 1", CostOfItem: 50, TotalQuantity: 500,TotalAmount:50 * 500 },
  { ItemName: "Item 2", CostOfItem: 60, TotalQuantity: 320,TotalAmount:60 * 320 },
  { ItemName: "Item 3", CostOfItem: 90, TotalQuantity: 150,TotalAmount:90 * 150 },
  { ItemName: "Item 4", CostOfItem: 60, TotalQuantity: 450,TotalAmount:60 * 450 },
  { ItemName: "Item 5", CostOfItem: 150, TotalQuantity: 850,TotalAmount:150 * 850 },
];

const SaleDashboard=()=> {
  
  const [selectedItem, setSelectedItem] = useState(items[0]);
  
  const [SelectQuantity,setSelectQuantity]=useState(1)
  const [SelectPrice,setSelectPrice]=useState(60)
  const [yourBill, setYourBill] = useState(60);
  
  const [saleItem, setSaleItem] = useState([] as any)
  const [ItemAddSpanShow, setItemAddSpanShow] = useState(false)
  const dispatch = useDispatch<AppDispatch>()
  let saleState = useSelector((store: RootState) => store.sale)

  useEffect(() => {
    setYourBill(SelectQuantity*SelectPrice)
  }, [SelectQuantity,SelectPrice])

  const ChangeDropdown = (val:any) => {
    const selectedItem = items.find((item) => item.ItemName === val);
    setSelectedItem(selectedItem as any);
    setYourBill(60)
    setSelectPrice(60)
    setSelectQuantity(1)
  };
  const newSaleItem = {
    ItemName: selectedItem.ItemName,
    ItemQuantity: SelectQuantity,
    SetPrice: SelectPrice,
    YourBill: yourBill,
  }

  const AddSaleItem = async () => {
    setSaleItem([...saleItem, newSaleItem])
    dispatch(updateOrderList(saleItem))
    setItemAddSpanShow(true)

    setInterval(() => {
      setItemAddSpanShow(false)
    }, 3000)
  }
  useEffect(() => {
    let newArray = saleItem.filter((item: any) => item !== saleState.localObject)
    setSaleItem(newArray)
  }, [saleState.localObject])
  const columns = [
    {
      title: 'Name',
      dataIndex: 'ItemName',
    },
    {
      title: 'Quantity',
      dataIndex: 'ItemQuantity',
    },
    {
      title: 'Price',
      dataIndex: 'SetPrice',
    },
    {
      title: 'Bill',
      dataIndex: 'YourBill',
    }
  ];
  const oldData=[
    {ItemName:'item 1',
    ItemQuantity:354,
    SetPrice:87,
    YourBill:78698},
    {ItemName:'item 2',
    ItemQuantity:54,
    SetPrice:57,
    YourBill:56960},
    {ItemName:'item 1',
    ItemQuantity:78,
    SetPrice:45,
    YourBill:95680}
  ]
  

  return (
    <>
    <div>
      <h2 className="text-center justify-content-center">Entry for Order</h2>
      <div className="table-responsive w-100">
        <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4 w-100">
          <thead>
          <tr className="fw-bolder text-muted">
              <th className="min-w-100px ">Item Name</th>
              <th className="min-w-100px ">Set Quantity</th>
              <th className="min-w-100px ">Set Price</th>
              <th className="min-w-100px ">Your Bill</th>
              <th className="min-w-100px ">Cost/Ft/No</th>
              <th className="min-w-100px ">Total Quantity</th>
              <th className="min-w-100px ">Total Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="tr">
              <td>
                <div className="d-flex align-items-center">
                  <div className="d-flex justify-content-start flex-column">
                    {/* <span className="fw-bold text-muted d-block"> */}
                      <select
                        onChange={(e)=>{ChangeDropdown(e.target.value)}}
                        className=" form-select form-control "
                        data-kt-select2="true"
                        data-placeholder="Select option"
                        data-allow-clear="true"
                        
                      >
                        {items.map((item) => (
                          <option key={item.ItemName} value={item.ItemName}>
                            {item.ItemName}
                          </option>
                        ))}
                      </select>
                    {/* </span> */}
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <div className="d-flex justify-content-start flex-column">
                    <span className="fw-bold text-muted d-block">
                      <input
                        type="number"
                        value={SelectQuantity}
                        onChange={(e)=>{setSelectQuantity(parseInt(e.target.value))}}
                        className="form-control form-control-md rounded-3"
                      />
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <div className="d-flex justify-content-start flex-column">
                    <span className="fw-bold text-muted d-block">
                      <input
                      value={SelectPrice}
                      onChange={(e)=>{setSelectPrice(parseInt(e.target.value))}}
                        type="number"
                        className="form-control form-control-md rounded-3"
                      />
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <div className="d-flex justify-content-start flex-column">
                    <span className="fw-bold text-muted d-block">
                    {yourBill}
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <div className="d-flex justify-content-start flex-column">
                    <span className="fw-bold text-muted d-block">
                    {selectedItem.CostOfItem}
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <div className="d-flex justify-content-start flex-column">
                    <span className="fw-bold text-muted d-block">
                    {selectedItem.TotalQuantity}
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <div className="d-flex justify-content-start flex-column">
                    <span className="fw-bold text-muted d-block">
              {selectedItem.TotalAmount}
                    </span>
                  </div>
                </div>
              </td>
              <td>
            <IconButton aria-label='delete'>
                    <AddTaskIcon
                      fontSize='large'
                      className='text-success'
                      onClick={AddSaleItem}
                    />
                  </IconButton>
              </td>
            </tr>
          </tbody>
        </table>
       
      </div>
    </div>
    {ItemAddSpanShow && (
            <div style={{backgroundColor: 'rgba(0, 128, 0, 0.164)'}} className='row p-3'>
              <h3 className='text-center'>Record is added in list</h3>
            </div>
          )}
    <div>
      <FirstTable TableData={saleItem} />

    </div>
    <div className="row mt-5" >
        <div className="col">
          {/* <OrderTable TableData={saleItem} /> */}
          {/* This is place of all orders records, display from database and also new orders..!*/}
          <div style={{backgroundColor: 'rgba(0, 128, 0, 0.164)'}} className='row p-3'>
              <h3 className='text-center'>Customer Old Record</h3>
          </div>
        <Table columns={columns} dataSource={oldData} />
          <div style={{backgroundColor: 'rgba(0, 128, 0, 0.164)'}} className='row p-3'>
              <h3 className='text-center'>New Order</h3>
          </div>
        <Table columns={columns} dataSource={saleItem} />
        </div>
        <div className="col">
          {/* Show Print Order List, also need style at top of this table */}
          <div style={{backgroundColor: 'rgba(0, 128, 0, 0.164)'}} className='row p-3'>
              <h3 className='text-center'>Order print</h3>
          </div>
        <Table columns={columns} dataSource={saleItem} />
        <div className='d-flex justify-content-center'>
        <Button  variant="contained" className="text-white">
          Print
        </Button>
          </div>
        </div>
    </div>
    </>
  );
}

export default SaleDashboard;
