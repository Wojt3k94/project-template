import * as React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

type StackToggleProps = {
  className?: string;
  children: React.ReactNode;
};

export function StackToggle({ className, children }: StackToggleProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className={cn("w-full", className)}>
      <div className="flex justify-center">
        <Button
          variant="ghost"
          className={cn(
            "uppercase tracking-wide rounded-xl px-6 py-2 border border-neutral-800 text-neutral-100 transition-colors",
            open
              ? "bg-transparent hover:bg-transparent text-neutral-300"
              : "bg-neutral-900/70 hover:bg-neutral-800/80"
          )}
          title="check stack"
          aria-pressed={open}
          aria-expanded={open}
          aria-controls="stack-toggle-panel"
          onClick={() => setOpen((v) => !v)}
        >
          check stack
        </Button>
      </div>
      <div
        className={cn(
          "transition-all duration-300 overflow-hidden hover:ring-1 hover:ring-neutral-800/50 rounded-xl",
          open ? "mt-6 max-h-[2000px] opacity-100" : "mt-0 max-h-0 opacity-0"
        )}
        id="stack-toggle-panel"
        aria-hidden={!open}
      >
        {children}
      </div>
    </div>
  );
}

