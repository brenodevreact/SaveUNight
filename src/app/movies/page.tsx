import Filter from "@/components/Filter";
import Image from "next/image";
import Link from "next/link";
import "../../styles/movies.css";
import HeaderFilms from "@/components/Header_films";

export default function Home() {
  return (
    <main className="main-films">
      <HeaderFilms />
      <div className="title-movies">
        <h1 className="title4">FILMES</h1>

        <div className="filter-divs">
          <div className="filter-movies">
            <label htmlFor="release">Ano de Lançamento</label>
            <select name="release" id="release">
              <option value="1920">1920</option>
              <option value="1920">1920</option>
              <option value="1920">1920</option>
              <option value="1920">1920</option>
              <option value="1920">1920</option>
            </select>
          </div>

          <div className="filter-movies">
            <label htmlFor="release">Ano de Lançamento</label>
            <select name="release" id="release">
              <option value="1920">1920</option>
              <option value="1920">1920</option>
              <option value="1920">1920</option>
              <option value="1920">1920</option>
              <option value="1920">1920</option>
            </select>
          </div>

          <div className="filter-movies">
            <label htmlFor="release">Ano de Lançamento</label>
            <select name="release" id="release">
              <option value="1920">1920</option>
              <option value="1920">1920</option>
              <option value="1920">1920</option>
              <option value="1920">1920</option>
              <option value="1920">1920</option>
            </select>
          </div>
        </div>

        <Filter />
      </div>
    </main>
  );
}
