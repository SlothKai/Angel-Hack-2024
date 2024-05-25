import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";
import React from "react";

interface PageConfigProps {
  children: React.ReactNode;
}

const PageConfig: React.FC<PageConfigProps> = ({ children }) => {
  return (
    <div className="min-h-[calc(100vh-64px-32px)]">
      <div className="mt-8 px-8 max-w-7xl mx-auto">{children}</div>
    </div>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <NavBar />
      <PageConfig>
        <Component {...pageProps} />
      </PageConfig>
    </NextUIProvider>
  );
}
