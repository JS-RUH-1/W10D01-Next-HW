import Footer from "./Footer"
import Header from "./Header";
import Head from "next/head";


const Layout = ({ children }) => {
  return (
    <div className="content">
      <Header />
      { children }
      <Footer />
    </div>
  );
}

export default Layout;