import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import CutomerRecord from "./CutomerRecord";
import LocalFooter from "../../layouts/Advatisment/LocalFooter";

function CustomerWraper() {

  return (
    <DashboardLayout>
      <DashboardNavbar />
      
      <CutomerRecord />
      {/* <Footer /> */}
      <LocalFooter />
    </DashboardLayout>
  );
}

export default CustomerWraper;