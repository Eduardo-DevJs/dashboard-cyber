import React from "react";

export default function Calendario() {
  return (
    <ul className="flex items-center justify-between mt-5">
      <li className="p-2 px-5 rounded-md bg-[#242424] flex flex-col items-center gap-1">
        <span className="text-white">Seg</span>
        <p className="text-white font-bold">22</p>
      </li>
      <li className="p-2 px-5 rounded-md bg-[#242424] flex flex-col items-center gap-1">
        <span className="text-white">Ter</span>
        <p className="text-white font-bold">23</p>
      </li>
      <li className="p-2 px-5 rounded-md bg-[#FFDE00] flex flex-col items-center gap-1">
        <span className="text-black">Qua</span>
        <p className="text-black font-bold">24</p>
      </li>
      <li className="p-2 px-5 rounded-md bg-[#242424] flex flex-col items-center gap-1">
        <span className="text-white">Qui</span>
        <p className="text-white font-bold">24</p>
      </li>
      <li className="p-2 px-5 rounded-md bg-[#242424] flex flex-col items-center gap-1">
        <span className="text-white">Sex</span>
        <p className="text-white font-bold">25</p>
      </li>
      <li className="p-2 px-5 rounded-md bg-[#242424] flex flex-col items-center gap-1">
        <span className="text-white">Sab</span>
        <p className="text-white font-bold">26</p>
      </li>
      <li className="p-2 px-5 rounded-md bg-[#242424] flex flex-col items-center gap-1">
        <span className="text-white">Dom</span>
        <p className="text-white font-bold">27</p>
      </li>
    </ul>
  );
}
