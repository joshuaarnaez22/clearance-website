import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const CreateRequirementFooter = ({
  isSubmitting,
  id,
}: {
  id: string;
  isSubmitting: boolean;
}) => {
  return (
    <div className="space-x-2">
      <Link href={`/admin/clearance/${id}`}>
        <Button type="button" variant="ghost">
          Cancel
        </Button>
      </Link>

      <Button type="submit" disabled={isSubmitting}>
        <div className="flex items-center gap-1">
          Submit
          {isSubmitting && <Loader2 className=" animate-spin w-4 h-4" />}
        </div>
      </Button>
    </div>
  );
};

export default CreateRequirementFooter;
