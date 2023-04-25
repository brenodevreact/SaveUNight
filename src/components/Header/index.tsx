import Link from "next/link";

const Header = () => {
  return (
    <header>
        <img src="Logo" alt="Logo" />

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
  )
}

export default Header
