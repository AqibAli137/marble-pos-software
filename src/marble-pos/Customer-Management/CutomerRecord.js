import {Table} from 'antd'
import Typography from '@mui/material/Typography'
import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import IconButton from '@mui/material/IconButton'
import {AiOutlineDelete} from 'react-icons/ai'
const Customers = [
  {
    Id: 4323,
    Name: "Naveed",
    Address: "Kmk",
    PhoneNo: "0304847589",
    IsActive: true,
    PaymentRcv: 100000,
    PendingPayment: 30000,
    CustomerOrders: [
      {
        Id: 323,
        ItemName: "Item 1",
        ItemQuantity: 100,
        SetPrice: 70,
        YourBill: 70000,
      },
      {
        Id: 324,
        ItemName: "Item 2",
        ItemQuantity: 50,
        SetPrice: 95,
        YourBill: 45500,
      },
    ],
  },
  {
    Id: 4323,
    Name: "Yasir",
    Address: "TDM",
    PhoneNo: "0303098778",
    IsActive: true,
    PaymentRcv: 50000,
    PendingPayment: 130000,
    CustomerOrders: [
      {
        Id: 323,
        ItemName: "Item 3",
        ItemQuantity: 200,
        SetPrice: 60,
        YourBill: 120000,
      },
      {
        Id: 324,
        ItemName: "Item 1",
        ItemQuantity: 190,
        SetPrice: 95,
        YourBill: 179500,
      },
    ],
  },
  {
    Id: 4323,
    Name: "Arbaz Ahmad",
    Address: "MDK",
    PhoneNo: "0304987589",
    IsActive: true,
    PaymentRcv: 300000,
    PendingPayment: 86100,
    CustomerOrders: [
      {
        Id: 323,
        ItemName: "Item 1",
        ItemQuantity: 100,
        SetPrice: 70,
        YourBill: 70000,
      },
      {
        Id: 324,
        ItemName: "Item 2",
        ItemQuantity: 50,
        SetPrice: 95,
        YourBill: 45500,
      },
    ],
  }
];
const CutomerRecord = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'Name',
    },
    {
      title: 'Address',
      dataIndex: 'Address',
      key: 'Address',
    },
    {
      title: 'Phone No',
      dataIndex: 'PhoneNo',
      key: 'PhoneNo',
    },

    {
      title: 'Payment Rcv',
      dataIndex: 'PaymentRcv',
      key: 'PaymentRcv',
    },
    {
      title: 'Pending Payment',
      dataIndex: 'PendingPayment',
      key: 'PendingPayment',
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => (
        <>
          <div className='d-flex justify-content-center'>
            <IconButton aria-label='delete'>
              <AiOutlineDelete />
            </IconButton>
          </div>
        </>
      ),
    },
  ]
  const [companies, setcompanies] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    const getCompanies = async () => {
      // const companies = await getCompaniesAsync()
      // if (companies) {
        setcompanies(Customers)
      // }
    }
    getCompanies()
  }, [])
  const tableData = companies.map((item, index) => {
    return {
      ...item,
      key: index,
    }
  })

  return (
    <Table
      columns={columns}
      expandable={{
        expandedRowRender: (record) => (
          <>
            <Typography className='mt-3 fw-bold fs-3' variant='h1' gutterBottom component='div'>
               Customers Record
            </Typography>
            <table className='table table-striped table-row-gray-300 align-middle gs-0 gy-4 w-100'>
              <thead className='fw-bolder'>
                <th className='min-w-10px text-center'>ItemName</th>
                <th className='min-w-10px text-center'>ItemQuantity</th>
                <th className='min-w-10px text-center'>SetPrice</th>
                <th className='min-w-10px text-center'>YourBill</th>
                <th className='min-w-10px text-center'>Action</th>
              </thead>
              {/* Owners details */}
              <tbody>
                {record.CustomerOrders.map((ordersRow) => (
                  <tr className='p-0 m-0'>
                    <td className='p-0 m-0'>
                      <span className=' text-center d-block fs-6'>
                        {ordersRow.ItemName}
                      </span>
                    </td>
                    <td className='p-0 m-0'>
                      <span className=' text-center d-block fs-6'>
                        {ordersRow.ItemQuantity}
                      </span>
                    </td>
                    <td className='p-0 m-0'>
                      <span className='text-center text-dark d-block fs-6'>
                        {ordersRow.SetPrice}
                      </span>
                    </td>
                    <td className='text-center p-0 m-0'>
                      <span className=' text-dark d-block fs-6'>{ordersRow.YourBill}</span>
                    </td>

                    <td className='text-center p-0 m-0'>
                      <div className='d-flex justify-content-center'>
                        <IconButton aria-label='delete'>
                          <AiOutlineDelete />
                        </IconButton>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ),
        rowExpandable: (record) => record.name !== 'Not Expandable',
      }}
      dataSource={tableData}
    />
  )
}
export default CutomerRecord
