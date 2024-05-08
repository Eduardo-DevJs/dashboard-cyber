import Aside from "@/components/Aside";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div className="flex item-start gap-2">
      <Aside />
      <Main />
    </div>
  );
}
