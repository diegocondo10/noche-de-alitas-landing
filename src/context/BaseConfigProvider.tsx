"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PrimeReactProvider } from "primereact/api";
import { FC, PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const BaseConfigProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    // <ClientSessionProvider>
    <QueryClientProvider client={queryClient}>
      <PrimeReactProvider
      // value={{ pt: Tailwind }}
      >
        {children}
      </PrimeReactProvider>
      <Toaster position='bottom-right' reverseOrder={false} toastOptions={{ duration: 5000 }} />
    </QueryClientProvider>
    // </ClientSessionProvider>
  );
};

export default BaseConfigProvider;
