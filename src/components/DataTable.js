import { useState } from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const DataTable = ({ data, setData }) => {
  const [showData, setShowData] = useState(false);
  const handleIsCreateChange = (index) => {
    let newData = [...data];
    let newItem = newData[index];
    if (data[index].isCreate) {
      newItem.isCreate = false;
    } else {
      newItem.isCreate = true;
    }
    newData[index] = newItem;
    setData(newData);
  };

  const handleIsViewChange = (index) => {
    let newData = [...data];
    let newItem = newData[index];
    if (data[index].isView) {
      newItem.isView = false;
    } else {
      newItem.isView = true;
    }
    newData[index] = newItem;
    setData(newData);
  };

  const handleIsEditChange = (index) => {
    let newData = [...data];
    let newItem = newData[index];
    if (data[index].isEdit) {
      newItem.isEdit = false;
    } else {
      newItem.isEdit = true;
    }
    newData[index] = newItem;
    setData(newData);
  };

  const handleIsDeleteChange = (index) => {
    let newData = [...data];
    let newItem = newData[index];
    if (data[index].isDelete) {
      newItem.isDelete = false;
    } else {
      newItem.isDelete = true;
    }
    newData[index] = newItem;
    setData(newData);
  };

  const handleIsApproveChange = (index) => {
    let newData = [...data];
    let newItem = newData[index];
    if (data[index].isApprove) {
      newItem.isApprove = false;
    } else {
      newItem.isApprove = true;
    }
    newData[index] = newItem;
    setData(newData);
  };

  return (
    <div className="data-table">
      <MDBTable striped bordered small>
        <MDBTableHead color="success-color-dark">
          <tr>
            <th>Module Name</th>
            <th>Activity Name</th>
            <th>Create</th>
            <th>View</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>Approve</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.moduleName}</td>
              <td>{item.activityName}</td>
              <td>
                <input
                  type="checkbox"
                  checked={item.isCreate}
                  onChange={() => handleIsCreateChange(index)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={item.isView}
                  onChange={() => handleIsViewChange(index)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={item.isEdit}
                  onChange={() => handleIsEditChange(index)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={item.isDelete}
                  onChange={() => handleIsDeleteChange(index)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={item.isApprove}
                  onChange={() => handleIsApproveChange(index)}
                />
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
      <div className="showData">
        <div className="custom-control custom-switch">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customSwitches"
            onChange={() => {
              setShowData(!showData);
            }}
          />
          <label className="custom-control-label" htmlFor="customSwitches">
            Show Data Change{" "}
            <span>(For the ease of checking data change right here)</span>
          </label>
        </div>
        {showData ? (
          <div style={{ marginTop: "15px" }}>
            {data.map((item) => (
              <p className="json">{JSON.stringify(item)}</p>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default DataTable;
