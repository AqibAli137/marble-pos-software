import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { updateAuqaBillDrower } from "../../@features/AquaBill/AquaBillSlice";
import { OrderTableColumns } from "../../marble-pos/ColumnData";
import { Table } from "antd";

type Anchor = "right";
const AquaBillDrawer = () => {
  const dispatch = useDispatch<AppDispatch>();
  let aquaBillState = useSelector((store: RootState) => store.aquaBill);
  const TottalBill = [
    {
      BillNo: "WA431245512",
      OwnerName: "Zamin",
      Status: "Unpaid",
      PendingBill: "5650",
    },
    {
      BillNo: "WA431435512",
      OwnerName: "Usman",
      Amount: "3120",
      Status: "Paid",
      PendingBill: "0",
    },
    {
      BillNo: "KD87979",
      OwnerName: "Saqlain",
      Amount: "2800",
      Status: "Unpaid",
      PendingBill: "780",
    },
    {
      BillNo: "BA8974823",
      OwnerName: "Aqib",
      Amount: "7520",
      Status: "Paid",
      PendingBill: "0",
    },
    {
      BillNo: "WA431245512",
      OwnerName: "Ehtisham",
      Amount: "3520",
      Status: "Paid",
      PendingBill: "0",
    },
    {
      BillNo: "HJ7898712",
      OwnerName: "Faizan",
      Amount: "3000",
      Status: "Unpaid",
      PendingBill: "350",
    },
  ];
  const [NewBillArray, setNewBillArray] = useState(TottalBill);

  const toggleDrawer =
    (anchor: string, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
    };
    useEffect(() => {
      const newBill = TottalBill.filter(
        (item: any) => item.Status === aquaBillState.AquaBillDrawertable
      );
      aquaBillState.AquaBillDrawertable === "Total"
        ? setNewBillArray(TottalBill)
        : setNewBillArray(newBill);
      toggleDrawer("right", aquaBillState.AuqaBillDrower);
    }, [aquaBillState.AuqaBillDrower]);
    const columns = [
      {
        title: "Bill No",
        dataIndex: "BillNo",
      },
      {
        title: "Customer",
        dataIndex: "OwnerName",
      },
      {
        title: "Status",
        dataIndex: "Status",
      },
      {
        title: "Pending Amount",
        dataIndex: "PendingBill",
      },
    ];
  const list = (anchor: Anchor) => (
    <Box sx={{ width: "max-content" }} role="presentation">
      {/* <AquaBillTable /> */}
      <Table columns={columns} dataSource={NewBillArray} />
    </Box>
  );
  const handleClose = () => {
    dispatch(updateAuqaBillDrower(false));
    toggleDrawer("right", false);
  };

  return (
    <div>
      {(["right"] as const).map((anchor) => {
        return (
          <React.Fragment key={anchor}>
            <Drawer
              PaperProps={{
                sx: { width: "max-content" },
              }}
              anchor={anchor}
              open={aquaBillState.AuqaBillDrower}
              onClose={handleClose}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default AquaBillDrawer;
