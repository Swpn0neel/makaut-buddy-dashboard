"use client";

import Title from "./title";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

interface CardProps {
  title: string;
  description: string;
}

export default function Card(props: CardProps) {
  return (
    <div className="flex flex-col h-full border-2 border-[#FFFFFF20] rounded-lg">
      <div className="basis-9/12">
        <Title title={props.title} />
      </div>
      <div className="flex justify-between px-10 py-6 basis-3/12">
        <div className="">
          <div className="text-[#FFFFFF80] text-3xl font-medium pb-2">
            {props.title}
          </div>
          <div className="text-[#FFFFFF50]">{props.description}</div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div className="bg-[#FFFFFF20] p-1 rounded-full" id="edit">
            <MdModeEdit />
          </div>
          <div className="bg-[#FFFFFF20] p-1 rounded-full" id="delete">
            <MdDelete />
          </div>
        </div>
      </div>
    </div>
  );
}
