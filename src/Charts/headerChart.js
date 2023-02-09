import React from 'react'
import MDBox from '../components/MDBox'
import MDTypography from '../components/MDTypography'

export default function headerChart() {
  return (
    <MDBox
    mx={2}
    py={3}
    px={2}
    variant="gradient"
    bgColor="info"
    borderRadius="lg"
    coloredShadow="info"
    style={{transform:"translatey(-30px)"}}
>
    <MDTypography variant="h6" color="white">
    Billing Statistics
    </MDTypography>
</MDBox>
  )
}
