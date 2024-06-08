import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";

import React from "react";

interface PageConfigProps {
  children: React.ReactNode;
}

const PageConfig: React.FC<PageConfigProps> = ({ children }) => {
  return (
    <div className="pt-8 px-8 bg-gray-100 min-h-[calc(100vh-64px-32px)]">
      <div className="max-w-7xl mx-auto pb-96 ">{children}</div>
    </div>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <NextUIProvider>
      <NavBar />
      <PageConfig>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </PageConfig>
    </NextUIProvider>
  );
}
