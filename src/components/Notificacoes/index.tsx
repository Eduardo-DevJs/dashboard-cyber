import React from "react";
import iconNew from "../../../public/Icon.png";
import arrowRight from "../../../public/arrow-right.png";
import Image from "next/image";

export default function Notificacoes() {
  return (
    <ul className="space-y-5">
      <li className="bg-[#242424] rounded-md flex p-3 items-center gap-4">
        <Image src={iconNew} alt="Nova notificacao de icone" />
        <div className="space-y-2">
          <h2 className="text-white">Nova tarefa adicionada</h2>
          <p className="text-xs text-gray-300 leading-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            officiis, aperiam optio aspernatur voluptatibus perferendis fugiat
            consectetur alias culpa in dignissimos
          </p>
        </div>
        <Image src={arrowRight} alt="icone de flecha" />
      </li>
      <li className="bg-[#242424] rounded-md flex p-3 items-center gap-4">
        <Image src={iconNew} alt="Nova notificacao de icone" />
        <div className="space-y-2">
          <h2 className="text-white">Nova tarefa adicionada</h2>
          <p className="text-xs text-gray-300 leading-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            officiis, aperiam optio aspernatur voluptatibus perferendis fugiat
            consectetur alias culpa in dignissimos
          </p>
        </div>
        <Image src={arrowRight} alt="icone de flecha" />
      </li>
      <li className="bg-[#242424] rounded-md flex p-3 items-center gap-4">
        <Image src={iconNew} alt="Nova notificacao de icone" />
        <div className="space-y-2">
          <h2 className="text-white">Nova tarefa adicionada</h2>
          <p className="text-xs text-gray-300 leading-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            officiis, aperiam optio aspernatur voluptatibus perferendis fugiat
            consectetur alias culpa in dignissimos
          </p>
        </div>
        <Image src={arrowRight} alt="icone de flecha" />
      </li>
      <li className="bg-[#242424] rounded-md flex p-3 items-center gap-4">
        <Image src={iconNew} alt="Nova notificacao de icone" />
        <div className="space-y-2">
          <h2 className="text-white">Nova tarefa adicionada</h2>
          <p className="text-xs text-gray-300 leading-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            officiis, aperiam optio aspernatur voluptatibus perferendis fugiat
            consectetur alias culpa in dignissimos
          </p>
        </div>
        <Image src={arrowRight} alt="icone de flecha" />
      </li>
    </ul>
  );
}
