import Link from 'next/link'
import styles from '../styles/Home.module.css'


const Header = () => {
  return (

<nav className={styles.middle}>
  <div >
    <Link href="/Home"><a className= {styles.nav}>  Home     </a></Link>
    <Link href="/About"><a className= {styles.nav}>    About    </a></Link>
  </div>
</nav>


  
  );
}
 
export default Header;