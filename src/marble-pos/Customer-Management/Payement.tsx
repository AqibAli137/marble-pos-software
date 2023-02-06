import { Button, TextField } from '@mui/material'
import React from 'react'
import { number } from 'yup'

const PayementRCV = () => {
  return (
    <div>
        <div className='mt-2 pt-0'>
      {/* Logo */}
      <div className='d-flex justify-content-center'>
        <div className='text-center'>
          <div className=''>
            <div className='d-flex justify-content-center'>
              <h3 className=' text-center'>Only For Admin Use</h3>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div
          className='col-12'
          style={{
            paddingLeft: 40,
            paddingRight: 50,
            paddingTop: 30,
          }}
        >
          <form
            className='form w-100  fv-plugins-bootstrap5 fv-plugins-framework'
            noValidate
            id='kt_login_signup_form'
          >
            {/* Name */}
            <div className='row d-flex justify-content-between'>
              <div className='col col-12 col-sm-6 col-md-6 col-lg-6'>
                <TextField
                  size='small'
                  id='outlined-basic'
                  label='Enter Amount'
                  type='number'
                  variant='outlined'
                //   value={nameValue}
                //   onChange={(e) => {
                //     setNameValue(e.target.value)
                //   }}
                />
              </div>
              <div className='col col-12 col-sm-6 col-md-6 col-lg-6'>
                <TextField
                  size='small'
                  id='outlined-basic'
                  label='Admin Password'
                  variant='outlined'
                  type='password'
                //   value={nameValue}
                //   onChange={(e) => {
                //     setNameValue(e.target.value)
                //   }}
                />
              </div>
            </div>
            <div className='d-flex justify-content-center'>
        <Button  variant="contained" className="text-white ActiveEffect my-3">
          submit
        </Button>
          </div>
          </form>
        </div>
      </div>
    </div>

    </div>
  )
}

export default PayementRCV