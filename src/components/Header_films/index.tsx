import Link from "next/link";
import "./header.css";
import Logo from "../../assets/logo.png";
import Image from "next/image";

const HeaderFilms = () => {
  return (
    <header className="header">
      <Link href="/">
        <h2 className="title1">SAVEUNIGHT</h2>
      </Link>

      <nav>
        <ul>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/series">SÉRIES</Link>
          </li>
          <li>
            <Link href="/tops">TOP10</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderFilms;
