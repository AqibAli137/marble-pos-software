import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import CutomerRecord from "./CutomerRecord";

function CustomerWraper() {

  return (
    <DashboardLayout>
      <DashboardNavbar />
      
      <CutomerRecord />
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default CustomerWraper;