import React, { useState } from "react";
import { Table } from "react-bootstrap";

function GatePass() {

  return (
    <div className="container urdu fs-6 bg-white my-3 borders">
    <div className="">
      <div className="gatepass text-center p-4  ">
        <h1 className="fs-3">
      گیٹ پاس
        </h1>
      </div>
      <div>
      <div style={{ background: "#d9ede1" }} className="row">
          <div className="coxl-12 text-center">
            <h3 className="my-3">
              <span >
                خاص ماربل کراچی <span className="fs-6">مانگو روڈ</span>
              </span>
             
            </h3>
          </div>
          <div className="col-12 text-center">
            <h6 className="my-3"> <span className="fs6">
           {" " } ہمارے ہاں ہر قسم کی ماربل دستیاب ہیں
              .{" "} <span>موبائل نمبر-03123121322</span> 
              </span>
              </h6>      
          </div>
        </div>
      </div>
      <div>
  
        <div className="row">
          <div style={{ background: "#d9ede1" }} className="col-12 text-center my-3 p-3">
            <p style={{fontSize:"12px"}}>
            {" "} <span> تاریخ :١٢/١٢/٢٠٢٢</span>{" "} &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="name"> نام خریدار :</span>
            <span> آفریدی صاحب </span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span> فیصل آباد </span>&nbsp;&nbsp;&nbsp;&nbsp;
            .{" "} <span>موبائل نمبر-03123121322</span> 
            </p>
          </div>
        </div>
      </div>
      <table  className="table table-bordered">
        <thead>
          <tr className="fs-6 text-center">
            <th>رقم </th>
            <th>ریٹ </th>
            <th>نام جنس </th>
            <th>تعداد </th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
           
            <td>
              <input  type="number" className="form-control text-center" style={{border:"none"}} value={120} />
            </td>
            <td>
              <input type="number" className="form-control text-center" style={{border:"none"}} value={120} />
            </td>
            <td>
              <input type="number" className="form-control text-center" style={{border:"none"}} value={120} />
            </td>
            <td>
              <input type="number" className="form-control text-center" style={{border:"none"}} value={120} />
            </td>
           
          </tr>
          {/* Add more rows here */}
        </tbody>
      </table>
    </div>
  </div>
  );
}

export default GatePass;
