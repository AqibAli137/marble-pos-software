import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import CustomerTable from "./CustomerTable"
import LocalFooter from "../../layouts/Advatisment/LocalFooter";
import Charts from "../../Charts/Charts";


function CustomerWraper() {

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
      <CustomerTable />
      <LocalFooter />
    </DashboardLayout>
  );
}

export default CustomerWraper;