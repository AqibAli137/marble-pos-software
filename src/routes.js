import React from 'react'
import Icon from "@mui/material/Icon";
import Dashboard from './layouts/dashboard';
import CustomerWraper from './marble-pos/Customer-Management';
import ItemWrapper from './marble-pos/Items';

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Cutomer Record",
    key: "cutomerRecord",
    icon: <Icon fontSize="small">group</Icon>,
    route: "/customer",
    component: <CustomerWraper />,
  },
  {
    type: "collapse",
    name: "Item",
    key: "item",
    icon: <Icon fontSize="small">mdProductionQuantity_Limits</Icon>,
    route: "/item",
    component: <ItemWrapper />,
  }
];

export default routes;
