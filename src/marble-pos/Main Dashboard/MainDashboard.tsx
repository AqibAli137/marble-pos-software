import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";

const MainDashboard = () => {
  const myItem = [
    {
      itemName: "item 1",
      pricePerFt: 55,
      itemQuantity: 800,
      totalPrice: 55 * 800,
    },
    {
      itemName: "item 2",
      pricePerFt: 50,
      itemQuantity: 400,
      totalPrice: 50 * 400,
    },
    {
      itemName: "item 3",
      pricePerFt: 90,
      itemQuantity: 100,
      totalPrice: 90 * 100,
    },
    {
      itemName: "item 4",
      pricePerFt: 110,
      itemQuantity: 300,
      totalPrice: 110 * 300,
    },
    {
      itemName: "item 5",
      pricePerFt: 60,
      itemQuantity: 434,
      totalPrice: 60 * 434,
    },
    {
      itemName: "item 6",
      pricePerFt: 70,
      itemQuantity: 1150,
      totalPrice: 70 * 1150,
    },
  ];
  const [itemNumber, setItemNumber] = useState(0);
  const [itemValue, setItemValue] = useState(myItem[itemNumber]);
  const handleDropdown = (itemIndex: any) => {
    setItemValue(myItem[itemIndex]);
    setItemNumber(itemIndex);
  };
  useEffect(() => {}, [itemValue]);
  return (
    <div>
      <h2 className="text-center justify-content-center">Entry for Order</h2>
      <div className="table-responsive w-100">
        <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4 w-100">
          <thead>
            <tr className="fw-bolder text-muted">
              <th className="min-w-100px ">Item Name</th>
              <th className="min-w-100px ">Select Quantity</th>
              <th className="min-w-100px ">Set Price Per Ft</th>
              <th className="min-w-100px ">price per Ft</th>
              <th className="min-w-100px ">Quantity</th>
              <th className="min-w-100px ">Total Ammount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="tr">
              <td>
                <div className="d-flex align-items-center">
                  <div className="d-flex justify-content-start flex-column">
                    <span className="text-muted fw-bold text-muted d-block fs-7">
                      <select
                        className=" form-select form-control "
                        data-kt-select2="true"
                        data-placeholder="Select option"
                        data-allow-clear="true"
                        defaultValue={itemNumber}
                      >
                        {myItem.map((item: any, index: any) => {
                          return (
                            <>
                              <option
                                onSelect={() => handleDropdown(index)}
                                value={item}
                              >
                                {item.itemName}
                              </option>
                            </>
                          );
                        })}
                      </select>
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <div className="d-flex justify-content-start flex-column">
                    <span className="text-muted fw-bold text-muted d-block fs-7">
                      <input
                        type="number"
                        className="form-control form-control-lg rounded-1"
                      />
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <div className="d-flex justify-content-start flex-column">
                    <span className="text-muted fw-bold text-muted d-block fs-7">
                      <input
                        type="number"
                        className="form-control form-control-lg rounded-1"
                      />
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <div className="d-flex justify-content-start flex-column">
                    <span className="text-muted fw-bold text-muted d-block fs-7">
                      {itemValue.pricePerFt}
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <div className="d-flex justify-content-start flex-column">
                    <span className="text-muted fw-bold text-muted d-block fs-7">
                      {itemValue.itemQuantity}
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <div className="d-flex justify-content-start flex-column">
                    <span className="text-muted fw-bold text-muted d-block fs-7">
                      {itemValue.totalPrice}
                    </span>
                  </div>
                </div>
              </td>
              <td>
              <div className='d-flex justify-content-between px-3'>
        <Button  variant="contained" className="text-white ActiveEffect">
          submit
        </Button>
          </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainDashboard;
