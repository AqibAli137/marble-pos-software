import React from "react";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { AppDispatch, RootState } from "../../store";
import { updateLocalObj } from "../../@features/SaleItems/SaleItemSlice";

const FirstTable = (props: { TableData: [] }) => {
  const tblData = props.TableData;
  const dispatch = useDispatch<AppDispatch>();

  let ItemState = useSelector((store: RootState) => store.Item);

  const handleDeleteUser2 = async (tableRow: any, index: number) => {
    dispatch(updateLocalObj(tableRow));
  };

  return (
    <div className="main urdu">
      <table className="table table-striped table-secondary responsive table-bordered">
        <thead>
          <tr className="text-center">
            <th>منسوخ </th>
            <th>قیمت </th>
            <th>ریٹ </th>
            <th>تعداد / فٹ </th>
            <th>نام جنس </th>
          </tr>
        </thead>
        <tbody>
          {tblData.map((item: any, index: number) => (
            <tr className="tr text-center " key={index}>
              <td>
                <IconButton aria-label="delete">
                  <HighlightOffIcon
                    fontSize="small"
                    className="text-danger"
                    onClick={() => handleDeleteUser2(item, index)}
                  />
                </IconButton>
              </td>
              <td>{item.YourBill}</td>
              <td>{item.SetPrice}</td>
              {/* <td>{item.ItemQuantity}</td> */}
              <td>
                <div className="d-flex justify-content-center">
                  <div
                    style={{ maxWidth: "max-content", minWidth: "max-content" }}
                    className=" text-center"
                  >
                    {ItemState.ListOfItems.map(
                      (itemRecord: any, index: any) =>
                        itemRecord.id === item.ItemId && (
                          <span key={index}>{itemRecord.typeOfItem}</span>
                        )
                    )}
                  </div>
                  <span>-</span>
                  <p>{item.ItemQuantity}</p>
                </div>
              </td>
              <td>{item.ItemName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FirstTable;
