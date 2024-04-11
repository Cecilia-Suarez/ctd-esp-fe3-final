import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import Favs from "./Pages/Favs";
import Detail from "./Pages/Detail";
import Contact from "./Pages/Contact"
import { useContextGlobal } from './Components/utils/global.context'


function App() {
  const { theme } = useContextGlobal();
  return (
    <div className={theme}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favs' element={<Favs />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
