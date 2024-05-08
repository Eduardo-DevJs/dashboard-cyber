import Header from "@/components/Header";
import MeusCursos from "../Cursos";
import Calendario from "../Calendario";
import Notificacoes from "../Notificacoes";

export default function Main() {
  return (
    <main className="w-full grid grid-cols-2 gap-5 p-5">
      <Header />
      <MeusCursos />
      <div className="flex flex-col justify-between gap-5">
        <div className="bg-[#1D1D1F] p-4 rounded-md">
          <header className="flex items-center justify-between mb-5">
            <h2 className="text-white text-xl">Notificações</h2>
            <p className="text-white text-xl">Veja todas</p>
          </header>
          <Notificacoes />
        </div>
        <div className="bg-[#1D1D1F] p-4 rounded-md">
          <header className="flex items-center justify-between">
            <h2 className="text-white text-xl">Meu horário</h2>
            <p className="text-white text-xl">Ver calendário</p>
          </header>
          <Calendario />
        </div>
      </div>
    </main>
  );
}
