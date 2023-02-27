import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import CustomerTable from "./CustomerTable"
import LocalFooter from "../../layouts/Advatisment/LocalFooter";


function CustomerWraper() {

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <CustomerTable />
      <LocalFooter />
    </DashboardLayout>
  );
}

export default CustomerWraper;