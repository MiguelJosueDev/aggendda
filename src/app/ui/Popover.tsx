import * as React from "react";

interface PopoverProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: "start" | "center" | "end";
}

export function Popover({ 
  trigger, 
  children, 
  align = "center" 
}: PopoverProps) {
  const alignmentClasses = {
    start: "left-0",
    center: "left-1/2 -translate-x-1/2",
    end: "right-0"
  };

  return (
    <div className="relative inline-block group">
      <div 
        className="cursor-pointer" 
        aria-haspopup="true"
        tabIndex={0}
      >
        {trigger}
      </div>
      
      <div className={`
        absolute w-0 h-0 
        border-l-[8px] border-l-transparent 
        border-r-[8px] border-r-transparent 
        border-b-[8px] border-b-white
        mt-[2px] ${align === "center" ? "left-1/2 -translate-x-1/2" : align === "end" ? "right-4" : "left-4"}
        z-50 opacity-0 invisible 
        transition-all duration-150 
        -translate-y-1 
        group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
        group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0
      `}></div>
      
      <div 
        className={`
          absolute z-50 mt-3 min-w-[200px] rounded-md bg-white shadow-lg 
          border border-gray-200
          ${alignmentClasses[align]}
          opacity-0 invisible 
          transition-all duration-150 
          -translate-y-2
          group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
          group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0
        `}
        role="menu"
        tabIndex={0}
      >
        <div className="p-3">
          {children}
        </div>
      </div>
    </div>
  );
} 