import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import Dashboard from "./components/dashboard";

export default function Home() {
  return (
    <main className="">
      <NextUIProvider>
        <Dashboard />
      </NextUIProvider>
    </main>
  );
}
