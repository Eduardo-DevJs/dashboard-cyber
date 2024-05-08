import Image from "next/image";
import React from "react";
import ilustration from "../../../public/Illustration.png";
import progresso from "../../../public/Progress.png";

export default function MeusCursos() {
  return (
    <div className="bg-[#1D1D1F] p-4 rounded-md">
      <header className="flex items-center mb-5 text-white justify-between">
        <h2 className="font-bold text-xl">Meus cursos</h2>
        <h2 className="font-bold text-xl">Sort by Name</h2>
      </header>
      <ul className="space-y-5">
        <li className="bg-[#242424] p-3 rounded-md flex items-center gap-2">
          <Image src={ilustration} alt="Ilustração" />
          <div className="flex flex-col gap-2">
            <h2 className="text-white">Desenvolvimento de sistemas</h2>
            <p className="text-gray-400 text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              quasi veritatis blanditiis nemo neque fuga molestiae
            </p>
          </div>
          <Image src={progresso} alt="Grafico" />
        </li>
        <li className="bg-[#242424] p-3 rounded-md flex items-center gap-2">
          <Image src={ilustration} alt="Ilustração" />
          <div className="flex flex-col gap-2">
            <h2 className="text-white">Desenvolvimento de sistemas</h2>
            <p className="text-gray-400 text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              quasi veritatis blanditiis nemo neque fuga molestiae
            </p>
          </div>
          <Image src={progresso} alt="Grafico" />
        </li>
        <li className="bg-[#242424] p-3 rounded-md flex items-center gap-2">
          <Image src={ilustration} alt="Ilustração" />
          <div className="flex flex-col gap-2">
            <h2 className="text-white">Desenvolvimento de sistemas</h2>
            <p className="text-gray-400 text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              quasi veritatis blanditiis nemo neque fuga molestiae
            </p>
          </div>
          <Image src={progresso} alt="Grafico" />
        </li>
        <li className="bg-[#242424] p-3 rounded-md flex items-center gap-2">
          <Image src={ilustration} alt="Ilustração" />
          <div className="flex flex-col gap-2">
            <h2 className="text-white">Desenvolvimento de sistemas</h2>
            <p className="text-gray-400 text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              quasi veritatis blanditiis nemo neque fuga molestiae
            </p>
          </div>
          <Image src={progresso} alt="Grafico" />
        </li>
        <li className="bg-[#242424] p-3 rounded-md flex items-center gap-2">
          <Image src={ilustration} alt="Ilustração" />
          <div className="flex flex-col gap-2">
            <h2 className="text-white">Desenvolvimento de sistemas</h2>
            <p className="text-gray-400 text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              quasi veritatis blanditiis nemo neque fuga molestiae
            </p>
          </div>
          <Image src={progresso} alt="Grafico" />
        </li>
      </ul>
    </div>
  );
}
