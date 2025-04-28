"use client";

import { useState } from "react";

export type ToastType = "default" | "success" | "error" | "warning" | "info";

export interface Toast {
  id: string;
  title?: string;
  description?: string;
  type?: ToastType;
  duration?: number;
}

interface ToastOptions {
  title?: string;
  description?: string;
  type?: ToastType;
  duration?: number;
}

const DEFAULT_TOAST_DURATION = 5000; // 5 seconds

// Create a simple store to manage toasts
let toasts: Toast[] = [];
let listeners: ((toasts: Toast[]) => void)[] = [];

const emitChange = () => {
  listeners.forEach((listener) => {
    listener(toasts);
  });
};

export function toast(options: ToastOptions) {
  const id = Math.random().toString(36).substring(2, 9);
  const newToast: Toast = {
    id,
    title: options.title,
    description: options.description,
    type: options.type || "default",
    duration: options.duration || DEFAULT_TOAST_DURATION,
  };

  toasts = [...toasts, newToast];
  emitChange();

  // Auto-dismiss after duration
  setTimeout(() => {
    dismissToast(id);
  }, newToast.duration);

  return id;
}

export function dismissToast(id: string) {
  toasts = toasts.filter((toast) => toast.id !== id);
  emitChange();
}

export function useToast() {
  const [toastList, setToastList] = useState<Toast[]>(toasts);

  // Subscribe to changes
  useState(() => {
    const handleChange = (updatedToasts: Toast[]) => {
      setToastList([...updatedToasts]);
    };

    listeners.push(handleChange);
    return () => {
      listeners = listeners.filter((listener) => listener !== handleChange);
    };
  });

  return {
    toasts: toastList,
    toast,
    dismiss: dismissToast,
  };
}

// Export the toast function directly for convenience
export { toast as default };
