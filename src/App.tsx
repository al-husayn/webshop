import { Routes, Route } from "react-router-dom";
import {Home, Contact, Admin} from './pages'
import { Header, Footer} from "./components"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
