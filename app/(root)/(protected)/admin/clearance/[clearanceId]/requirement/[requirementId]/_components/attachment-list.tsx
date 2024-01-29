import { Link, Paperclip, Pencil, Trash } from "lucide-react";
import React from "react";

const AttachmentList = ({
  name,
  url,
  id,
}: {
  name: string;
  url: string;
  id: string;
}) => {
  return (
    <div className="w-full flex items-center gap-x-2 bg-sky-100 border-sky-700 text-sky-700 rounded-md mb-4 text-sm  transition-all">
      <div className="p-3 border-r border-r-sky-200  rounded-md ">
        <Paperclip className="h-5 w-5" />
      </div>
      <div className=" hover:underline">
        <a href={url} target="_black">
          {name}
        </a>
      </div>
      <div className="ml-auto pr-2 flex items-center gap-x-2">
        <Trash className="h-5 w-5 cursor-pointer hover:opacity-75 transition" />
      </div>
    </div>
  );
};

export default AttachmentList;
