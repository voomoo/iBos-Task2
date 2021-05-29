import { useState } from "react";
import DataTable from "./components/DataTable";
function App() {
  const [data, setData] = useState([
    {
      moduleName: "Configuration",
      activityName: "Item Category",
      isCreate: false,
      isView: false,
      isEdit: false,
      isDelete: false,
      isApprove: false,
    },
    {
      moduleName: "Configuration",
      activityName: "Item",
      isCreate: false,
      isView: false,
      isEdit: false,
      isDelete: false,
      isApprove: false,
    },
    {
      moduleName: "Configuration",
      activityName: "Party",
      isCreate: false,
      isView: false,
      isEdit: false,
      isDelete: false,
      isApprove: false,
    },
    {
      moduleName: "Configuration",
      activityName: "Profile",
      isCreate: false,
      isView: false,
      isEdit: false,
      isDelete: false,
      isApprove: false,
    },
    {
      moduleName: "Configuration",
      activityName: "Bank Account",
      isCreate: false,
      isView: false,
      isEdit: false,
      isDelete: false,
      isApprove: false,
    },
    {
      moduleName: "Configuration",
      activityName: "Change Password",
      isCreate: false,
      isView: false,
      isEdit: false,
      isDelete: false,
      isApprove: false,
    },
    {
      moduleName: "Purchase",
      activityName: "Purchase",
      isCreate: false,
      isView: false,
      isEdit: false,
      isDelete: false,
      isApprove: false,
    },
    {
      moduleName: "Purchase",
      activityName: "Due Payment",
      isCreate: false,
      isView: false,
      isEdit: false,
      isDelete: false,
      isApprove: false,
    },
    {
      moduleName: "Sales",
      activityName: "Sales",
      isCreate: false,
      isView: false,
      isEdit: false,
      isDelete: false,
      isApprove: false,
    },
    {
      moduleName: "Sales",
      activityName: "Due Receive",
      isCreate: false,
      isView: false,
      isEdit: false,
      isDelete: false,
      isApprove: false,
    },
    {
      moduleName: "Accounts",
      activityName: "Voucher",
      isCreate: false,
      isView: false,
      isEdit: false,
      isDelete: false,
      isApprove: false,
    },
  ]);

  return (
    <div className="App">
      <DataTable data={data} setData={setData} />
    </div>
  );
}

export default App;
