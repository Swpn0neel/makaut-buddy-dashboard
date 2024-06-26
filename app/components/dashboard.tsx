"use client";

import React from "react";
import SearchIcon from "./ui/searchicon";
import Tabs from "./ui/tabs";
import Card from "./ui/card";

export default function dashboard() {
  return (
    <div className="h-full flex">
      <div className="basis-1/12 pt-28 bg-[#FFFFFF05] border-r-2 border-[#FFFFFF20]"></div>
      <div className="basis-11/12 flex flex-col px-12 pt-28 pb-5 gap-2">
        <div className="text-6xl text-[#D9D9D9] font-medium">Dashboard</div>
        <Tabs />
        <div className="w-full flex border-2 border-[#FFFFFF20] rounded-lg p-4">
          <SearchIcon />
        </div>
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
