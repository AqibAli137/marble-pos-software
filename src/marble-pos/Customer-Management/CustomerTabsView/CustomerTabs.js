import React from "react";
import DashboardNavbar from "../../../examples/Navbars/DashboardNavbar";
import DashboardLayout from "../../../examples/LayoutContainers/DashboardLayout";
import LocalFooter from "../../../layouts/Advatisment/LocalFooter";
import TabsView from "./TabsView";
function Tabs() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
        <TabsView/>
      <LocalFooter />
    </DashboardLayout>
  );
}

export default Tabs;
