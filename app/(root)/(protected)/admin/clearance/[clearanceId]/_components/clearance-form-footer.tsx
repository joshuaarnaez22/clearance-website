import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const ClearanceFooter = ({ isSubmitting }: { isSubmitting: boolean }) => {
  return (
    <CardFooter className="flex items-center justify-end pb-0 space-x-2">
      <Link href="/admin/clearance">
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
    </CardFooter>
  );
};

export default ClearanceFooter;
