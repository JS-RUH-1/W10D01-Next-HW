import Link from 'next/link'
import styles from '../styles/Home.module.css'


const Header = () => {
  return (

<nav className="navStyle">
  <div >
    <Link href="/Home"> Home</Link>
    <Link href="/about"> About</Link>
  </div>
</nav>



  );
}

export default Header;