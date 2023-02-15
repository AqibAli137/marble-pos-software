import Icon from "@mui/material/Icon";
import Dashboard from './layouts/dashboard';
import CustomerWraper from './marble-pos/Customer-Management';
import ItemWrapper from './marble-pos/Items';

const routes = [
  {
    type: "collapse",
    name: "New Sale",
    key: "sale",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/sale",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Cutomer Record",
    key: "customer",
    icon: <Icon fontSize="small">group</Icon>,
    route: "/customer",
    component: <CustomerWraper />,
  },
  {
    type: "collapse",
    name: "Admin Dashboard",
    key: "admin",
    icon: <Icon fontSize="medium">add_circle_icon</Icon>,
    route: "/admin",
    component: <ItemWrapper />,
  }
  
];

export default routes;
