import { NotebookPen, Pencil } from "lucide-react";
import Link from "next/link";
import React from "react";

const RequirementsList = ({
  name,
  requirementId,
  clearanceId,
}: {
  name: string;
  requirementId: string;
  clearanceId: string;
}) => {
  return (
    <div className="w-full max-w-lg flex items-center gap-x-2 bg-sky-100 border-sky-700 text-sky-700 rounded-md mb-4 text-sm  ">
      <div className="p-3 border-r border-r-sky-200  rounded-md ">
        <NotebookPen className="h-5 w-5" />
      </div>
      <div>{name}</div>
      <div className="ml-auto pr-2 flex items-center gap-x-2">
        <Link
          href={`/admin/clearance/${clearanceId}/requirement/${requirementId}`}
        >
          <Pencil className="h-5 w-5 cursor-pointer hover:opacity-75 transition" />
        </Link>
      </div>
    </div>
  );
};

export default RequirementsList;
