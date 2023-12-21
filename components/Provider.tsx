"use client";
import { NextUIProvider } from "@nextui-org/react";
import { RecoilRoot } from "recoil";
import { ChakraProvider } from "@chakra-ui/react";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      <ChakraProvider>
        <NextUIProvider>
          <div className="min-h-[100vh]">{children}</div>
        </NextUIProvider>
      </ChakraProvider>
    </RecoilRoot>
  );
}
