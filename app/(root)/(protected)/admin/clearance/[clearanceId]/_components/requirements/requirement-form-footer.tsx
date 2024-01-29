import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import React from "react";

const RequirementFormFooter = ({ isSubmitting }: { isSubmitting: boolean }) => {
  return (
    <CardFooter className="flex items-center justify-end pb-0 space-x-2">
      <Button type="submit" disabled={isSubmitting}>
        <div className="flex items-center gap-1">
          Submit
          {isSubmitting && <Loader2 className=" animate-spin w-4 h-4" />}
        </div>
      </Button>
    </CardFooter>
  );
};

export default RequirementFormFooter;
