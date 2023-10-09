import Button from "./Button";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}

        <Button>Inicar sesión</Button>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
