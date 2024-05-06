"use client";

import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import Card from "./ui/card";

export default function dashboard() {
  const variants = ["solid", "underlined", "bordered", "light"];
  return (
    <div className="h-full flex">
      <div className="basis-1/12 bg-[#FFFFFF05] border-r-2 border-[#FFFFFF20]"></div>
      <div className="basis-11/12 flex flex-col px-12 pt-32 pb-5">
        <div className="text-6xl text-[#D9D9D9] font-medium">Dashboard</div>
        {/* <div className="flex flex-wrap gap-4 w-full">
          <Tabs
            key="bordered"
            variant="bordered"
            aria-label="Tabs variants"
            className="flex w-full rounded-none"
          >
            <Tab key="search" title="Search manually" className="" />
            <Tab key="stream" title="Search by Stream" className="" />
          </Tabs>
        </div> */}
        <div className="h-full flex border-2 border-[#FFFFFF20] rounded-lg">
          <div className="basis-1/3"></div>
          <div className="basis-2/3 grid grid-cols-2 p-1">
            <Card
              title="Engineering Drawing"
              description="Padhai karo thik se, and do something with your life... kab tak single rhoge bro!?"
            />
            <Card
              title="Engineering Drawing"
              description="Padhai karo thik se, and do something with your life... kab tak single rhoge bro!?"
            />
            <Card
              title="Engineering Drawing"
              description="Padhai karo thik se, and do something with your life... kab tak single rhoge bro!?"
            />
            <Card
              title="Engineering Drawing"
              description="Padhai karo thik se, and do something with your life... kab tak single rhoge bro!?"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
