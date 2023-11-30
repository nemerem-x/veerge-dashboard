"use client";
import { NextUIProvider } from "@nextui-org/react";
import { RecoilRoot } from "recoil";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      <NextUIProvider>
        <div className="min-h-[100vh]">{children}</div>
      </NextUIProvider>
    </RecoilRoot>
  );
}
