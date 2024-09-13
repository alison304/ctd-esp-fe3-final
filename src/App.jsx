import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import { useDentistStates } from "./Components/utils/Context"

function App() {
  const { state } = useDentistStates();
  return (
    <div className={'App' + " " + state.theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/favs" element={<Favs />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<h1>Error 404 - Page Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
