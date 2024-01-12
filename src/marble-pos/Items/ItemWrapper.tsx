import React from 'react'
import { Divider } from '@mui/material'
import AddStock from './AddStock'
import { RegisterItem } from './RegisterItems'

const ItemWrapper = () => {
  return (
    <>
    <div className='d-flex justify-content-center'>
        <div className="">
        <RegisterItem />
        </div>
    </div>
    <div className="mt-4">
    <Divider textAlign="center"><span className='fw-bold text-muted d-block'>
    اسٹاک شامل کرنے کے لیے
      </span></Divider>    
    </div>
    <div className='d-flex justify-content-center'>
        <div className="">
        <AddStock />
        </div>
    </div>
    </>
  )
}

export default ItemWrapper