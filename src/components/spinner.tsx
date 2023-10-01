import { FC } from "react";

import { cn } from "@/lib/utils";

const Spinner: FC<{ className?: string }> = ({ className }) => {
  return (
    <div className="flex items-center justify-center m-auto">
      <div
        className={cn(
          "animate-spin rounded-full border-t-4 border-blue-500 h-40 w-40",
          className,
        )}
      ></div>
    </div>
  );
};

export default Spinner;
