import Link from "next/link";

export default function Header(){
    return <nav class="navbar is-info is-spaced	" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <Link href="/">
            <a href="#">
                <h1 className="is-size-3">Albums Website</h1>
            </a>
        </Link>
  
    
    </div>
</nav>
}