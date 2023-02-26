import React from 'react'
import LocalFooter from '../layouts/Advatisment/LocalFooter'
import SaleDashboard from './SaleDashboard'

const DashboardWraper = () => {
  return (
    <div>
      <div style={{height:"100vh"}} className="d-flex justify-content-between flex-column ">
    <SaleDashboard />
      </div>
    </div>
  )
}

export default DashboardWraper