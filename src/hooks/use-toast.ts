import { toast as sonnerToast } from 'sonner';

type ToastType = 'default' | 'success' | 'error' | 'loading' | 'info';

interface ToastProps {
  title?: string;
  description?: string;
  message?: string;
  type?: ToastType;
  options?: any;
}

export const toast = {
  success: (message: string | ToastProps, options?: any) => {
    if (typeof message === 'string') {
      return sonnerToast.success(message, options);
    } else {
      const { title, description } = message;
      return sonnerToast.success(title, {
        description,
        ...options
      });
    }
  },
  error: (message: string | ToastProps, options?: any) => {
    if (typeof message === 'string') {
      return sonnerToast.error(message, options);
    } else {
      const { title, description } = message;
      return sonnerToast.error(title, {
        description,
        ...options
      });
    }
  },
  loading: (message: string | ToastProps, options?: any) => {
    if (typeof message === 'string') {
      return sonnerToast.loading(message, options);
    } else {
      const { title, description } = message;
      return sonnerToast.loading(title, {
        description,
        ...options
      });
    }
  },
  info: (message: string | ToastProps, options?: any) => {
    if (typeof message === 'string') {
      return sonnerToast.info(message, options);
    } else {
      const { title, description } = message;
      return sonnerToast.info(title, {
        description,
        ...options
      });
    }
  },
  default: (message: string | ToastProps, options?: any) => {
    if (typeof message === 'string') {
      return sonnerToast(message, options);
    } else {
      const { title, description } = message;
      return sonnerToast(title, {
        description,
        ...options
      });
    }
  },
  dismiss: (toastId?: string) => sonnerToast.dismiss(toastId),
  custom: (props: ToastProps) => {
    const { title, description, type = 'default', options = {} } = props;
    
    switch (type) {
      case 'success':
        return sonnerToast.success(title, { description, ...options });
      case 'error':
        return sonnerToast.error(title, { description, ...options });
      case 'loading':
        return sonnerToast.loading(title, { description, ...options });
      case 'info':
        return sonnerToast.info(title, { description, ...options });
      default:
        return sonnerToast(title, { description, ...options });
    }
  }
} 