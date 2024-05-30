import Link from 'next/link';
import styles from '../Navbar.module.css';
import Image from 'next/image'
import About from '../About/page';



export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
      <li className={styles.navItem}>
    

          <Link href="/">
          <Image className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
      src="/logo.png"
      width={50}
      height={50}
      alt="logo Ingeprof"/>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/">
              Accueil  
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/trouver-tuteur">
              Trouver un tuteur  
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contact">
              Contact  
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/profil">
              Profil  
          </Link>
        </li>

        <li className={styles.navItem}>
          <Link href="/About">
              About  
          </Link>
        </li>
        
      </ul>
    </nav>
  );
}
