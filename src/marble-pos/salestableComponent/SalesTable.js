import React, { useState } from "react";
import { Table } from "react-bootstrap";

function SalesTable() {

  return (
    <div className="container">
    <div className="">
    
      <table  className="table table-bordered">
        <thead>
          <tr className="fs-6 text-center">
            <th>بقیہ ریٹ کی رقم </th>
            <th>بقیہ خرید ریٹ </th>
            <th>مال بقیہ</th>
            <th>بچت </th>
            <th>رقم </th>
            <th>ریٹ </th>
            <th>تعداد </th>
            <th>نام جنس </th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <td>
              <input type="number" className="form-control" value={12312} />
            </td>
            <td>
              <input type="number" className="form-control" value={1222} />
            </td>
            <td>
              <input type="number" className="form-control" value={12} />
            </td>
            <td>
              <input type="number" className="form-control" value={200} />
            </td>
            <td>
              <input type="number" className="form-control" value={10} />
            </td>
            <td>
              <input type="number" className="form-control" value={60}  />
            </td>
            <td>
              <input type="number" className="form-control" value={1} />
            </td>
            <td>
              <select className="form-control" style={{width:"100px"}}>
                <option>منتخب کریں۔</option>
                <option>Item 1</option>
                <option>Item 2</option>
                <option>Item 3</option>
              </select>
            </td>
         
           
          </tr>
          {/* Add more rows here */}
        </tbody>
      </table>
    </div>
  </div>
  );
}

export default SalesTable;
