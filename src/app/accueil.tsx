import Image from "next/image";
import Navbar from "./components/navbar";
import Carousel from "./components/caroussel";
import About from "./About/page";

export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Navbar />
      
      <div className="logo">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/logo.png"
          alt="Next.js Logo"
          width={180}
          height={37}
          
        />
      </div>

    </main>
  );
}
