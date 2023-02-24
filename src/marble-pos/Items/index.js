import React from "react";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import { RegisterItem } from "./RegisterItems";
import { Divider, Grid } from "@mui/material";
import AddStock from "./AddStock";
import LocalFooter from "../../layouts/Advatisment/LocalFooter";
import MDBox from "../../components/MDBox";
import ComplexStatisticsCard from "../../examples/Cards/StatisticsCards/ComplexStatisticsCard";

function ItemWrapper() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      {/* <div className="row gy-5 g-xl-8 mb-4">
        <div className="col-xxl-12 col-xl-12">
          <Charts
            className="card-xl-stretch mb-xl-8"
            chartColor="primary"
            chartHeight="200px"
            strokeColor="#cb1e46"
          />
        </div>
      </div> */}
      <Grid container spacing={3} className='d-flex justify-content-center my-2 urdu'>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="کل سرمایہ کاری"
                count='9767845'
                percentage={{
                  color: "success",
                  amount: "+55%",
                  label: "گزشتہ ہفتے کے مقابلے میں",
                }}
              />
            </MDBox>
          </Grid>
          
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="کل فروخت"
                count="5346000"
                percentage={{
                  color: "success",
                  amount: "+1%",
                  label: "کل سے",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="منافع"
                count="230780"
                percentage={{
                  color: "success",
                  amount: "+3%",
                  label: "پچھلے مہینے کے مقابلے میں",
                }}
              />
            </MDBox>
          </Grid>
          {/* <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add"
                title="Followers"
                count="+91"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid> */}
        </Grid>
      <>
        <div className="d-flex justify-content-center">
          <div className="">
            <RegisterItem />
          </div>
        </div>
        <div className="mt-4">
          <Divider textAlign="center">
            <span className="fw-bold text-muted d-block">For Add Stock</span>
          </Divider>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <div className="">
            <AddStock />
          </div>
        </div>
      </>
      
      {/* <Footer /> */}
      <LocalFooter />
    </DashboardLayout>
  );
}

export default ItemWrapper;
