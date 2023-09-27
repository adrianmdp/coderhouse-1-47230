import { Footer } from "./Footer";
import { Header } from "./Header";

const Layout = ({ children, className, style }) => {
  return (
    <div id="layout" className={className} style={style}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export { Layout };
