"use client";

import * as React from "react";
import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from "lucide-react";
import { useToast, type Toast as ToastType } from "@/hooks/use-toast";

interface ToastProps {
  toast: ToastType;
}

export function Toast({ toast }: ToastProps) {
  const { id, title, description, type = "default" } = toast;
  const { dismiss } = useToast();

  const icons = {
    success: <CheckCircle className="h-5 w-5 text-green-500" />,
    error: <AlertCircle className="h-5 w-5 text-red-500" />,
    warning: <AlertTriangle className="h-5 w-5 text-amber-500" />,
    info: <Info className="h-5 w-5 text-[#5C9DF1]" />,
    default: null,
  };

  const bgColors = {
    success: "bg-green-50 border-green-200",
    error: "bg-red-50 border-red-200",
    warning: "bg-amber-50 border-amber-200",
    info: "bg-blue-50 border-blue-200",
    default: "bg-white border-slate-200",
  };

  return (
    <div
      className={`pointer-events-auto relative flex w-full max-w-md rounded-lg border p-4 shadow-md ${bgColors[type]}`}
      role="alert"
    >
      <div className="flex items-start gap-3 w-full">
        {icons[type] && <div className="flex-shrink-0">{icons[type]}</div>}
        <div className="flex-1">
          {title && <div className="font-medium">{title}</div>}
          {description && (
            <div className="mt-1 text-sm text-slate-600">{description}</div>
          )}
        </div>
        <button
          onClick={() => dismiss(id)}
          className="ml-4 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md text-slate-400 hover:bg-slate-200 hover:text-slate-600"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export function Toaster() {
  const { toasts } = useToast();

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 w-full max-w-md">
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </div>
  );
}
