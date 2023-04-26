import Filter from "@/components/Filter";
import Image from "next/image";
import Link from "next/link";
import "../../styles/movies.css";

export default function Home() {
  return (
    <main>
      <div className="title-movies">
        <h1 className="title4">FILMES</h1>

        <div className="buttons-movies">
          <button className="text1">MAIS ASSISTIDOS</button>
          <button className="text1">MAIORES NOTAS</button>
          <button className="text1">CATEGORIAS</button>
          <button className="text1">DURAÇÃO</button>
        </div>
        <Filter />
      </div>
    </main>
  );
}
