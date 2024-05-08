import React from "react";

export default function Header() {
  return (
    <header className="bg-[#1D1D1F] px-3 rounded-md col-span-full p-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-gray-400 text-xs">Bom dia</h2>
          <h1 className="text-xs text-gray-400">Eduardo</h1>
        </div>
        <input
          placeholder="Pesquisar cursos"
          type="text"
          className="p-3 mx-12 rounded-md w-full outline-none bg-[#242424] text-white"
        />
        <div>
          <h2 className="text-gray-400 text-xs">Abril 27, 2024</h2>
          <h1 className="text-xs text-gray-400">Sabádo</h1>
        </div>
      </div>
    </header>
  );
}
