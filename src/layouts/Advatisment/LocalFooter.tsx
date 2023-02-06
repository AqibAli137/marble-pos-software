import React from 'react'
import Button from '@mui/material/Button'
import './Advatisment.css'
import { IconButton } from '@mui/material'
import Typography from '@mui/material/Typography'
import AddIcCallIcon from '@mui/icons-material/AddIcCall'

const LocalFooter = () => {
  return (
    <>
        <div className='text-white py-3 text-center gradientStyle'>
          <div
            className='d-flex justify-content-center position-relative'
            style={{ top: '-16px' }}
          >
            <div className=' text-center text-white position-absolute clipiPath px-4 py-1'>
              PROUDLY SERVED
            </div>
          </div>
          <p className='mt-5'>
          • Created By : Naveed Ahmad     • Phone Number # 03016428683 <br />
          • Email # abc@gmail.com       • Company : Subhan Marble
          </p>
        </div>
    </>
  )
}

export default LocalFooter
