import React, {useEffect, useState} from 'react'
// import {useNavigate} from 'react-router-dom'
import {Button} from '@mui/material'
import Logo from '../../assets/sm-assets/sm-logo2.jpg'

export function RegisterItem() {
  // const navigate = useNavigate()
  const [itemName,setItemName]=useState('')
  const [itemQuantity,setItemQuantity]=useState(1)
  const [itemCost,setItemCost]=useState(50)
  const [itemTotalprice,setItemTotalprice]=useState(50)
  useEffect(()=>{
    setItemTotalprice(itemQuantity*itemCost)
  },[itemQuantity,itemCost])

  return (
    <>
      <div className='px-13 urdu'>
        <div className='row'>
          <div className='col-12 col-lg-3 col-sm-3 col-md-3 text-center d-flex align-items-center'>
            <div className='d-flex align-items-center justify-content-center'>
              <div>
                <img
                  alt='Logo'
                  src={Logo}
                  className='rounded-5'
                  style={{width:'130px'}}
                />
                <div className='d-flex justify-content-center'>
                  <h3 style={{lineHeight:"50px"}} className='col-12 text-center my-3'>
                  براہ کرم آئٹم کی تفصیلات فراہم کریں۔
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div
            className='col-12 col-lg-9 card col-sm-9 col-md-9 rounded-4'
            style={{
              paddingLeft: 40,
              paddingRight: 50,
              paddingTop: 30,
            }}
          >
            <div className=' text-center'>
              <h1 className='text-dark fs-4 py-3'>آئٹم کو رجسٹر کریں۔</h1>
            </div>
            <form
              className='form w-100 col col-9 fv-plugins-bootstrap5 fv-plugins-framework'
              noValidate
              id='kt_login_signup_form'
            >
              <div className='row mb-4'>
                <div className='col col-4'>
                  <label className='pt-2 text-muted fs-4'>
                  شے کا نام <sup className='text-danger'>*</sup>
                  </label>
                </div>
                <div className='col col-12 col-sm-8 col-md-8 col-lg-8'>
                  <input
                    type='text'
                    value={itemName}
                    onChange={(e)=>{setItemName(e.target.value)}}
                    className='form-control form-control-lg rounded-3 text-center'
                  />
                </div>
              </div>
              {/* Plot Number */}
              <div className='row mb-4'>
                <div className='col col-4'>
                  <label className='pt-2 text-muted fs-4'>
                  آئٹم کی مقدار <sup className='text-danger'>*</sup>
                  </label>
                </div>

                <div className='col col-12 col-sm-8 col-md-8 col-lg-8'>
                  <input
                    type='number'
                    value={itemQuantity}
                    step="1"
                    min="100"
                    onChange={(e)=>{setItemQuantity(parseInt(e.target.value))}}
                    className='form-control form-control-lg rounded-3 text-center'
                  />
                  
                </div>
              </div>
              {/* cost */}
              <div className='row mb-4'>
                <div className='col col-4'>
                  <label className='pt-2 text-muted fs-4'>لاگت فی آئٹم</label>
                </div>
                <div className='col col-12 col-sm-8 col-md-8 col-lg-8'>
                  <input
                    type='number'
                    value={itemCost}
                    step="1"
                    min="1"
                    onChange={(e)=>{setItemCost(parseFloat(e.target.value))}}
                    className='form-control form-control-lg rounded-3 text-center'
                  />
                </div>
              </div>
              {/* Total Price */}
              <div className='row mb-4'>
                <div className='col col-4'>
                  <label className='pt-2 text-muted fs-4'>کل قیمت</label>
                </div>
                <div className='col col-12 col-sm-8 col-md-8 col-lg-8'>
                  <input
                    type='text'
                    value={itemTotalprice}
                    readOnly
                    className='form-control form-control-lg rounded-3 text-center'
                  />
                </div>
              </div>
              <div className='d-flex justify-content-center'>
        <Button  variant="contained" className="text-white ActiveEffect">
        جمع کرائیں
        </Button>
          </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
