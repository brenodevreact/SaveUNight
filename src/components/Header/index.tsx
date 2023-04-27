import Link from "next/link";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <Link href="/">
        <h2 className="title1">SAVEUNIGHT</h2>
      </Link>

      <nav>
        <ul>
          <li>
            <Link href="/movies">FILMES</Link>
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

export default Header;
