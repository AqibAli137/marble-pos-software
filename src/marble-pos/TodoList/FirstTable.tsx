import React from 'react'
import {useDispatch} from 'react-redux'
import IconButton from '@mui/material/IconButton'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import { AppDispatch } from '../../store'
import { updateLocalObj } from '../../@features/SaleItems/SaleItemSlice'

const FirstTable = (props: {TableData: []}) => {
  const tblData = props.TableData
  const dispatch = useDispatch<AppDispatch>()

  const handleDeleteUser2 = async (tableRow: any) => {
    dispatch(updateLocalObj(tableRow))
  }

  return (
    <div>
      <table className='w-100  table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
        <thead>
          <tr className='' style={{borderBottom: '1pt solid black'}}>
          <th className="text-center pb-2">Name</th>
              <th className="text-center pb-2">Quantity</th>
              <th className="text-center pb-2">Price</th>
              <th className="text-center pb-2">Bill</th>
            <th className='text-center pb-2'>Actions</th>
          </tr>
        </thead>

        <tbody>
          {tblData.map((item: any, index: number) => (
            <tr className='tr' key={index}>
              <td>
                  <span className=" text-center d-block">
                    {item.ItemName}
                  </span>
                </td>
                <td>
                  <span className=" text-center d-block">
                    {item.ItemQuantity}
                  </span>
                </td>
                <td>
                  <span className=" text-center d-block">
                    {item.SetPrice}
                  </span>
                </td>
                <td>
                  <span className="text-center d-block">
                    {item.YourBill}
                  </span>
                </td>
              <td className='text-center'>
                
                  <IconButton aria-label='delete'>
                    <HighlightOffIcon
                      fontSize='large'
                      className='text-danger'
                      onClick={handleDeleteUser2.bind(this, item, index)}
                    />
                  </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FirstTable