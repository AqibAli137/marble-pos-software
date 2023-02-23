import React, { useState } from "react";
import { Table } from "react-bootstrap";
import Khatacard from "./Khatacard";

function KhataTafseel() {

  return (
    <div className="container urdu fs-6 bg-white my-3 border">
    <div className="">
    <div className="gatepass text-center p-4  ">
        <h1 className="fs-3">
        کھاتہ تفصیل
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
           {" " } ہمارے ہاں ہر کسم کی ماربل دستیاب ہیں
              .{" "} <span>موبائل نمبر-03123121322</span> 
              </span>
              </h6>      
          </div>
        </div>
      </div>
      <div>
  
        <div className="row">
          <div style={{ background: "#d9ede1" }} className="col-12 text-center my-3 p-3">
            <span className="name"> نام خریدار </span>
            <span> آفریدی صاحب </span>
            <span> فیصل آباد </span>
            .{" "} <span>موبائل نمبر-03123121322</span> 
          </div>
        </div>
      </div>
      <table  className="table table-bordered">
        <thead>
          <tr className="fs-6 text-center">
          
            <th> Date</th>
            <th>رقم </th>
            <th>ریٹ </th>
            <th>نام جنس </th>
            <th>تعداد </th>
          </tr>
        </thead>
        <tbody>
          {
            ["","","",""].map(i=>(
              <tr className="">
              <td>
                  <p>12/12/2000</p>
                </td>
                <td>
                  <input type="number" className="form-control " style={{border:"none"}} value={202} />
                </td>
                <td>
                  <input type="number" className="form-control " style={{border:"none"}} value={202} />
                </td>
                <td>
                  <input type="number" className="form-control " style={{border:"none"}} value={202} />
                </td>
                <td>
                  <input type="number" className="form-control " style={{border:"none"}} value={202} />
                </td>
             
               
              </tr>
            ))
          }
         <div>
          
         </div>
         
          {/* Add more rows here */}
        </tbody>
      </table>
      <Khatacard/>
    </div>
  </div>
  );
}

export default KhataTafseel;
