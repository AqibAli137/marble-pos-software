import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";

const OrderTable = (props: {TableData: []}) => {
  const tblData = props.TableData
  let saleState = useSelector((store: RootState) => store.sale);
 
  return (
    <div className="table-responsive">
      <div style={{ height: "300px", width: "100%", overflow: "scroll" }}>
        <table className="w-100  table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
          <thead>
            <tr
              className="fw-400 fs-5"
              style={{ borderBottom: "1pt solid black" }}
            >
              <th className="text-center pt-5 pb-3">Name</th>
              <th className="text-center pt-5 pb-3">Quantity</th>
              <th className="text-center pt-5 pb-3">Price</th>
              <th className="text-center pt-5 pb-3">Bill</th>
            </tr>
          </thead>

          <tbody>
            {tblData.map((item: any, index: any) => (
              <tr className="tr" key={index}>
                <td>
                  <span className=" text-center d-block fs-6 py-4">
                    {item.ItemName}
                  </span>
                </td>
                <td>
                  <span className=" text-center d-block fs-6">
                    {item.ItemQuantity}
                  </span>
                </td>
                <td>
                  <span className=" text-center d-block fs-6">
                    {item.SetPrice}
                  </span>
                </td>
                <td>
                  <span className="text-center text-dark d-block fs-6">
                    {item.YourBill}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderTable;
