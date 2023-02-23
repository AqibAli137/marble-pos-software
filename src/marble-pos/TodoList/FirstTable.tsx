import React from "react";
import { useDispatch } from "react-redux";
import IconButton from "@mui/material/IconButton";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { AppDispatch } from "../../store";
import { updateLocalObj } from "../../@features/SaleItems/SaleItemSlice";

const FirstTable = (props: { TableData: [] }) => {
  const tblData = props.TableData;
  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteUser2 = async (tableRow: any) => {
    dispatch(updateLocalObj(tableRow));
  };

  return (
    <div className="main urdu">
      <table className="table table-striped table-secondary">
        <thead>
          <tr className="fs-6 text-center">
            <th>action </th>
            <th>قیمت </th>
            <th>ریٹ </th>
            <th>تعداد </th>
            <th>نام جنس </th>
          </tr>
        </thead>
        <tbody>
          {tblData.map((item: any, index: number) => (
            <tr className="tr text-center fs-6" key={index}>
              <td>
                <IconButton aria-label="delete">
                  <HighlightOffIcon
                    fontSize="small"
                    className="text-danger"
                    onClick={handleDeleteUser2.bind(this, item, index)}
                    />
                </IconButton>
              </td>
                    <td>{item.YourBill}</td>
                    <td>{item.SetPrice}</td>
              <td>{item.ItemQuantity}</td>
              <td>{item.ItemName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FirstTable;
