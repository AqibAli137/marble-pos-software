import React from 'react'
import marbleheader from "../../assets/Bills/Fauget.png"
import Headnumbers from "../../assets/Bills/Add a heading.png"
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBTypography,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
function Component() {
  return (
    <>
  <div className='row'>
    <img src={marbleheader} alt="" style={{width:"100%"}} />
    </div>
      <MDBCard className="p-4 urdu bg-image-marbel">
      
        <MDBCardBody>
          <MDBRow>
            <MDBCol >
              <MDBTypography listUnStyled className='border rounded'>
                <li className="text-muted d-flex justify-content-end mx-5 my-3">
                  <span style={{textDecoration:"underline"}}>  اصغر علی</span> 
                  <span className="fw-bold ms-1 text-danger"> :   بل بنام  </span>
                </li>
                <li className="text-muted d-flex justify-content-end mx-5 my-3">
                  <span style={{textDecoration:"underline"}}> 03232123122 </span> 
                  <span className="fw-bold ms-1 text-danger"> :  رابطہ   </span>
                </li>
              </MDBTypography>
            </MDBCol>
            <MDBCol >
              <MDBTypography listUnStyled className='border rounded'>
                <li className="text-muted d-flex justify-content-end mx-5 my-3">
                  <span style={{textDecoration:"underline"}}> 123-456 </span> 
                  <span className="fw-bold ms-1 text-danger"> :   سیریل نمبر  </span>
                </li>
                <li className="text-muted d-flex justify-content-end mx-5 my-3">
                  <span style={{textDecoration:"underline"}}> 12-02-2022 </span> 
                  <span className="fw-bold ms-1 text-danger"> :  تاریخ   </span>
                </li>
              </MDBTypography>
            </MDBCol>
          </MDBRow>
          <MDBRow className="my-2 mx-1 justify-content-center">
            <MDBTable striped borderless>
              <MDBTableHead
                className="text-white text-end border"
                style={{ backgroundColor: "#84B0CA" }}
              >
                <tr>
                  <th scope="col">تفصیل</th>
                  <th scope="col">روپے</th>
                  <th scope="col">نرخ</th>
                  <th scope="col">تعداد</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody className='text-end'>
                <tr>
                  <td>Pro Package</td>
                  <td>4</td>
                  <td>$200</td>
                  <td>$800</td>
                </tr>
                <tr>
                  <td>Web hosting</td>
                  <td>1</td>
                  <td>$10</td>
                  <td>$10</td>
                </tr>
                <tr>
                  <td>Consulting</td>
                  <td>1 year</td>
                  <td>$300</td>
                  <td>$300</td>
                </tr>
              </MDBTableBody>
            </MDBTable>
          </MDBRow>
          <MDBRow>
           
            <MDBCol className='d-flex justify-content-between'>
              <MDBTypography listUnStyled>
                <li className="text-muted ms-3">
                  <span class="text-black me-4">SubTotal</span>$1110
                </li>
                <li className="text-muted ms-3 mt-2">
                  <span class="text-black me-4">Tax(15%)</span>$111
                </li>
              </MDBTypography>
              <p className="text-black float-start">
                <span className="text-black me-3" style={{whiteSpace:"nowrap"}}> Total Amount</span>
                <span style={{ fontSize: "25px" }}>$1221</span>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
        
      </MDBCard>
      <div className='row'>
    <img src={Headnumbers} alt="" style={{width:"100%"}} />
    </div>
    
    </>
  )
}

export default Component