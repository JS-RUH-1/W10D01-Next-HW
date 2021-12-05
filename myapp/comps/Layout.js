import Header from "../comps/Header";
import Footer from "../comps/Footer";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
