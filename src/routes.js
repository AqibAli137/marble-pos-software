import Icon from "@mui/material/Icon";
import Dashboard from './layouts/dashboard';
import CustomerWraper from './marble-pos/Customer-Management';
import CustomerCreate from "./marble-pos/Customer-Management/CustomerCreate/CustomerCreate";
import ItemWrapper from './marble-pos/Items';
import StockRecord from "./marble-pos/Items/StockTable";
import StockWithDate from "./marble-pos/Items/StockWithDate";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "sale",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/sale",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Customers",
    key: "customer",
    icon: <Icon fontSize="small">group</Icon>,
    route: "/customer",
    component: <CustomerWraper />,
  },
  {
    type: "collapse",
    name: "New Customer",
    key: "newCustomer",
    icon: <Icon fontSize="medium">person_add_alt_icon</Icon>,
    route: "/newCustomer",
    component: <CustomerCreate />,
  },
  {
    type: "collapse",
    name: "New Products",
    key: "admin",
    icon: <Icon fontSize="medium">add_shopping_cart_icon</Icon>,
    route: "/admin",
    component: <ItemWrapper />,
  },
  
  
  {
    type: "collapse",
    name: "All Products",
    key: "stock",
    icon: <Icon fontSize="medium">production_quantity_limits_icon</Icon>,
    route: "/stock",
    component: <StockRecord />,
  },
  {
    type: "collapse",
    name: "Record",
    key: "record",
    icon: <Icon fontSize="medium">today_icon</Icon>,
    route: "/record",
    component: <StockWithDate />,
  }
  
];

export default routes;
