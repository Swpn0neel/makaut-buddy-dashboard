"use client";

import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import Card from "./ui/card";

export default function dashboard() {
  const variants = ["solid", "underlined", "bordered", "light"];
  return (
    <div className="h-screen flex">
      <div className="basis-1/12 bg-[#FFFFFF05] border-r-2 border-[#FFFFFF20]"></div>
      <div className="basis-11/12 flex flex-col px-12 pt-32 pb-5">
        <div className="text-6xl text-[#D9D9D9] font-medium">Dashboard</div>
        {/* <div className="flex flex-wrap gap-4">
          <Tabs key="bordered" variant="bordered" aria-label="Tabs variants">
            <Tab key="photos" title="Photos" />
            <Tab key="music" title="Music" />
            <Tab key="videos" title="Videos" />
          </Tabs>
        </div> */}
        <div className="h-full flex w-full border-2 border-[#FFFFFF20] rounded-lg">
          <div className="basis-1/3 border-r-2 border-[#FFFFFF20]"></div>
          <div className="basis-2/3"></div>
        </div>
      </div>
    </div>
  );
}
