import React from "react";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import { RegisterItem } from "./RegisterItems";
import { Divider } from "@mui/material";
import AddStock from "./AddStock";
import LocalFooter from "../../layouts/Advatisment/LocalFooter";
import Charts from "../../Charts/Charts";

function ItemWrapper() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div className="row gy-5 g-xl-8 mb-4">
        <div className="col-xxl-12 col-xl-12">
          <Charts
            className="card-xl-stretch mb-xl-8"
            chartColor="primary"
            chartHeight="200px"
            strokeColor="#cb1e46"
          />
        </div>
      </div>
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
