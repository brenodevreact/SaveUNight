import Filter from "@/components/Filter";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="title-movies">
        <h1>FILMES</h1>
      </div>

      <div className="buttons-movies">
        <button>MAIS ASSISTIDOS</button>
        <button>MAIORES NOTAS</button>
        <button>CATEGORIAS</button>
        <button>DURAÇÃO</button>
      </div>

      <Filter />
    </main>
  );
}
