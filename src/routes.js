import Icon from "@mui/material/Icon";
import Dashboard from './layouts/dashboard';
import CustomerWraper from './marble-pos/Customer-Management';
import CustomerCreate from "./marble-pos/Customer-Management/CustomerCreate/CustomerCreate";
import ItemWrapper from './marble-pos/Items';
import StockRecord from "./marble-pos/Items/StockTable";

const routes = [
  {
    type: "collapse",
    name: "نئی فروخت",
    key: "sale",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/sale",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "کسٹمر ریکارڈ",
    key: "customer",
    icon: <Icon fontSize="small">group</Icon>,
    route: "/customer",
    component: <CustomerWraper />,
  },
  {
    type: "collapse",
    name: "ایڈمن ڈیش بورڈ",
    key: "admin",
    icon: <Icon fontSize="medium">add_circle_icon</Icon>,
    route: "/admin",
    component: <ItemWrapper />,
  },
  
  {
    type: "collapse",
    name: "نیا کسٹمر بنائیں",
    key: "newCustomer",
    icon: <Icon fontSize="medium">add_circle_icon</Icon>,
    route: "/newCustomer",
    component: <CustomerCreate />,
  },
  {
    type: "collapse",
    name: "اشیاء اسٹاک",
    key: "stock",
    icon: <Icon fontSize="medium">add_circle_icon</Icon>,
    route: "/stock",
    component: <StockRecord />,
  }
  
];

export default routes;
