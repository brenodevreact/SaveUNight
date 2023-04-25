import Header from "@/components/Header";
import Retangulo from "../assets/rectangle.svg"
import Image from "next/image";
import "../styles/home.css"

export default function Home() {
  return (
    <main>
      <Image src={Retangulo} alt="Retangulo"/>
      <Header />    
    </main>
  )
}
