import Icon from "@mui/material/Icon";
import Dashboard from './layouts/dashboard';
import CustomerWraper from './marble-pos/Customer-Management';
import ItemWrapper from './marble-pos/Items';

const routes = [
  {
    type: "collapse",
    name: "Sale Items",
    key: "saleItems",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/sale-items",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Cutomer Record",
    key: "cutomerRecord",
    icon: <Icon fontSize="small">group</Icon>,
    route: "/customer-iecord",
    component: <CustomerWraper />,
  },
  {
    type: "collapse",
    name: "Admin Dashboard",
    key: "adminDashboard",
    icon: <Icon fontSize="medium">add_circle_icon</Icon>,
    route: "/admin-dashboard",
    component: <ItemWrapper />,
  }
  
];

export default routes;
