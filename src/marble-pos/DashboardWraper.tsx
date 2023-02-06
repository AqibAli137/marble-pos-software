import React from 'react'
import LocalFooter from '../layouts/Advatisment/LocalFooter'
import SaleDashboard from './SaleDashboard'

const DashboardWraper = () => {
  return (
    <div>
        {/* <MainDashboard /> */}
      <div style={{height:"100vh"}} className="d-flex justify-content-between flex-column ">
    <SaleDashboard />
    {/* <Todomain /> */}
    <LocalFooter />

      </div>
    </div>
  )
}

export default DashboardWraper