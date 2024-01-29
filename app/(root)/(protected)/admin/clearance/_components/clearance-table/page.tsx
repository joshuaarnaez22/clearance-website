import { columns } from "./columns";
import { DataTable } from "./data-table";
import { getAllClearance } from "@/actions/server-actions/clearance-actions/get-all-clearance";

const ClearanceTablePage = async () => {
  const clearance = await getAllClearance();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={clearance} />
    </div>
  );
};

export default ClearanceTablePage;
