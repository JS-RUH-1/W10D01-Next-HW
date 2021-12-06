import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link href="/">
          <li>
            <a class="active">Home</a>
          </li>
        </Link>
        <Link href="/about">
          <li>
            <a>About</a>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;

// <div className="logo">{/* <h1>logo</h1> */}</div>
// <Link href="/">
//   <a>Home</a>
// </Link>
// <Link href="/about">
//   <a>About</a>
// </Link>
