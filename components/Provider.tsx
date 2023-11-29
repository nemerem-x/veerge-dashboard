"use client";
import { NextUIProvider } from "@nextui-org/react";

export default function Provider({ children }: { children: React.ReactNode }) {

  return (
      <NextUIProvider>
        <div className="min-h-[100vh]">{children}</div>
      </NextUIProvider>
  );
}
