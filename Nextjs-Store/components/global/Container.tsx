import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

function Container({ children, className }: Props) {
  return (
    <div className={cn("mx-auto max-w-6xl xl:max-w-7xl px-8", className)}>
      {children}
    </div>
  );
}
export default Container;
