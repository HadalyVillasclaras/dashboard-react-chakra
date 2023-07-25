import { Box, useToast } from '@chakra-ui/react';
import React, { useState, useCallback, useEffect, ReactNode } from 'react';
import {ToastContext} from './ToastContext';
import { ToastOptionsInterface } from './ToastOptionsInterface';

interface Props {
  children: ReactNode;
}

const initialToastOptions: ToastOptionsInterface = {
  title: '',
  description: '',
  status: 'success',
  isClosable: true,
  duration: 800,
  position: 'top',
  variants: 'solid'
  // render: () => (
  //   <Box color='white' p={3} bg='blue.500'>
  //     Hello World
  //   </Box>
  // ) 
};

export const ToastProvider  = ({ children }: Props) => {
  const toast = useToast();
  const [toastOptions, setToastOptions] = useState(initialToastOptions);

  // const showMessage = useCallback((newMessage: string) => {
  //   setMessage(newMessage);
  // }, []);
  const id = 'test-toast'
  useEffect(() => {
    if(!toast.isActive(id)) {
      toast({...toastOptions, id});
        setTimeout(() => {
        }, 1000);
    }

  },[toastOptions])

  return (
    <ToastContext.Provider value={{ toastOptions, setToastOptions }}>
      {children}
    </ToastContext.Provider>
  );
};
