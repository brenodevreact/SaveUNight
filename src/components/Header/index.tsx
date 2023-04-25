import Link from "next/link";
import "./header.css"
import Logo from "../../assets/logo.png"
import Image from "next/image";


const Header = () => {
  return (
    <header className="header">
      
      <Link href="/">
        <Image src={Logo} alt="Logo" className="header_image"/>
      
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
  )
}

export default Header
