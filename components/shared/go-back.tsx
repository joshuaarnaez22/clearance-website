import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const GoBack = ({ url }: { url: string }) => {
  return (
    <Link href={url}>
      <div className="flex items-center gap-x-2 font-medium">
        <ArrowLeft className="h-4 w-4" />
        <p className="text-sm text-muted-foreground">Go back</p>
      </div>
    </Link>
  );
};

export default GoBack;
