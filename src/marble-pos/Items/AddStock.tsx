import React, { useState ,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from 'antd';
import IconButton from '@mui/material/IconButton'
import AddTaskIcon from '@mui/icons-material/AddTask';
import { AppDispatch, RootState } from "../../store";

const items = [
  { ItemName: "Item 1", CostOfItem: 50, TotalQuantity: 500,TotalAmount:50 * 500 },
  { ItemName: "Item 2", CostOfItem: 60, TotalQuantity: 320,TotalAmount:60 * 320 },
  { ItemName: "Item 3", CostOfItem: 90, TotalQuantity: 150,TotalAmount:90 * 150 },
];

const AddStock=()=> {
  
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
    // setSaleItem([...saleItem, newSaleItem])
    
    setItemAddSpanShow(true)

    setInterval(() => {
      setItemAddSpanShow(false)
    }, 3000)
  }
  

  return (
    <>
    <div>
      {/* <h2 className="text-center justify-content-center">Stock Entry</h2> */}
      <div style={{backgroundColor: 'rgba(0, 128, 0, 0.164)'}} className='row p-3'>
              <h3 className='text-center'>Add Your New Stock</h3>
            </div>
      <div className="table-responsive w-100">
        <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4 w-100">
          <thead>
          <tr className="fw-bolder text-muted">
              <th className="min-w-100px text-center ">Item Name</th>
              <th className="min-w-100px text-center ">New Quantity</th>
              <th className="min-w-100px text-center ">Price</th>
              <th className="min-w-100px text-center ">Present Quantity</th>
              <th className="min-w-100px text-center ">Total Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="tr">
              <td>
                <div className="d-flex align-items-center">
                  <div className="d-flex justify-content-start flex-column">
                    <span className="fw-bold text-muted d-block">
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
                    </span>
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
                        className="form-control form-control-md rounded-3 text-center"
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
                        className="form-control form-control-md rounded-3 text-center"
                      />
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center justify-content-center">
                  <div className="d-flex justify-content-start flex-column">
                    <span className="fw-bold text-muted d-block">
                    {selectedItem.TotalQuantity}
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center justify-content-center">
                  <div className="d-flex justify-content-center">
                    <span className="fw-bold text-muted d-block ">
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
              <h3 className='text-center'>Your Item Is Save</h3>
            </div>
          )}
    </>
  );
}

export default AddStock;
