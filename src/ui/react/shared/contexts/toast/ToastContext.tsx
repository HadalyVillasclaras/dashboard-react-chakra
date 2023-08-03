import { createContext } from 'react';

type ToastContextType = {
  toastOptions: any,
  setToastOptions: (toastOptions: any) => void;
};

let defaultValue = {
  toastOptions: {},
  setToastOptions: () => {}
}

export const ToastContext = createContext<ToastContextType>(defaultValue);

