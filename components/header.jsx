import Link from "next/link";

export default function Header(){
    return <nav class="navbar is-info" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
    <Link href="/" ><a class="navbar-item" href="/">
        <h1 className="is-size-2">Albums</h1>
      </a></Link>
      
  
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
      <Link href="/" ><a className="navbar-item">
        Home
        </a></Link>
  
        <Link href="/about" ><a className="navbar-item">
        About
        </a></Link>
</div>
  
 </div>
  </nav>
  }