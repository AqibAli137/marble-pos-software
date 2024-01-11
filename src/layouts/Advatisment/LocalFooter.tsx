import React from 'react'
import Button from '@mui/material/Button'
import './Advatisment.css'
import { IconButton } from '@mui/material'
import Typography from '@mui/material/Typography'
import AddIcCallIcon from '@mui/icons-material/AddIcCall'

const LocalFooter = () => {
  return (
    <>

        <div className='text-white py-3 text-center gradientStyle mt-5 align-self-end'>
          <div
            className='d-flex justify-content-center position-relative '
            style={{ top: '-16px' }}
          >
            <div className=' text-center text-white position-absolute clipiPath p-5 fs-6 px-4 py-2  urdu'>
            فخر سے خدمت کی
            </div>
          </div>
          <p className='mt-5 urdu'>
          • تخلیق کردہ: نوید احمد • فون نمبر 03016428683 <br />
          • ای میل # abc@gmail.com • کمپنی: رحمٰن ماربل
          </p>
        </div>
    </>
  )
}

export default LocalFooter
