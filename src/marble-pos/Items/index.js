import React from 'react'
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import { RegisterItem } from "./RegisterItems";
import { Divider } from '@mui/material'
import AddStock from './AddStock'
import LocalFooter from '../../layouts/Advatisment/LocalFooter';

function ItemWrapper() {

  return (
    <DashboardLayout>
      <DashboardNavbar />
      
      <>
    <div className='d-flex justify-content-center'>
        <div className="">
        <RegisterItem />
        </div>
    </div>
    <div className="mt-4">
    <Divider textAlign="center"><span className='fw-bold text-muted d-block'>
      For Add Stock
      </span></Divider>    
    </div>
    <div className='d-flex justify-content-center mt-3'>
        <div className="">
        <AddStock />
        </div>
    </div>
    </>
      {/* <Footer /> */}
    <LocalFooter />

    </DashboardLayout>
    
  );
}

export default ItemWrapper;