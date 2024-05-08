import Image from "next/image";
import React from "react";
import logo from "../../../public/Logo.png";
import book from "../../../public/book.png";
import medal from "../../../public/medal.png";
import menu from "../../../public/menu.png";
import note2 from "../../../public/note-2.png";
import note from "../../../public/note.png";
import profile from "../../../public/profile-circle.png";
import settings from "../../../public/setting.png";

export default function Aside() {
  return (
    <aside className="bg-[#1D1D1F] w-[250px] p-6">
      <div className="flex flex-col justify-center gap-5">
        <Image src={logo} alt="Logo" />

        <nav>
          <ul className="flex flex-col gap-6 mt-10">
            <li className="text-white flex items-center gap-4 p-2 cursor-pointer">
              <Image src={menu} alt="Icon Menu" />
              Dashboard
            </li>
            <li className="text-white flex items-center gap-4 p-2 cursor-pointer">
              <Image src={book} alt="Icon curso" />
              Cursos
            </li>
            <li className="text-white flex items-center gap-4 p-2 cursor-pointer">
              <Image src={note} alt="Icon atribuiçoes" />
              Atribuições
            </li>
            <li className="text-white flex items-center gap-4 p-2 cursor-pointer">
              <Image src={note} alt="Icon notas" />
              Notas
            </li>
            <li className="text-white flex items-center gap-4 p-2 cursor-pointer">
              <Image src={note} alt="Icon notas" />
              Menssagens
            </li>
            <li className="text-white flex items-center gap-4 p-2 cursor-pointer">
              <Image src={note} alt="Icon notas" />
              Recursos
            </li>
            <li className="text-white flex items-center gap-4 p-2 cursor-pointer">
              <Image src={profile} alt="Icon profile" />
              Perfil
            </li>
            <li className="text-white flex items-center gap-4 p-2 cursor-pointer">
              <Image src={settings} alt="Icon settings" />
              Configurações
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
