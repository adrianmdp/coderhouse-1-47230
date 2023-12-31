import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import { ModalProvider } from "./context/Modal";
import { Home, UserDetail, Users } from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <ModalProvider>
          <Navbar />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/comics-68dcf.appspot.com/o/200px-Ditto.png?alt=media&token=4576444c-7763-4290-8025-4b90f1906786&_gl=1*2ojbgm*_ga*MzY5NTAwMTYzLjE2OTY5Njk1MzY.*_ga_CW55HF8NVT*MTY5Njk4ODgyOC4yLjEuMTY5Njk4ODk0MC4xMi4wLjA."
            alt=""
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<UserDetail />} />
          </Routes>
        </ModalProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
