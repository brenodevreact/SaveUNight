import Image from "next/image";
import Link from "next/link";
import miranha from "../../assets/fotolateral.svg";
import poo from "../../assets/poo.png";
import ellipsis from "../../assets/Ellipse.svg";
import "./menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <h3>Olá, bem-vindo(a) ao SaveUNight</h3>

      <h2>
        A plataforma que vai salvar a sua noite achando a série ou o filme ideal
      </h2>

      <h4>Então, o que você deseja encontrar hoje?</h4>

      <div className="divButton">
        <Link href={"/series"}>
          <button>Séries</button>
        </Link>
        <Link href={"/movies"}>
          <button>Filmes</button>
        </Link>
      </div>

      <Image src={miranha} alt="Homem Aranha" className="miranha" />

      <div className="container">
        <Image src={ellipsis} alt="ellipsis" className="ellipsis" />
        <Image src={poo} alt="Kung Fu Panda" className="poo poo2" />
      </div>
    </div>
  );
};

export default Menu;
