import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import Favs from "./Pages/Favs";
import Detail from "./Pages/Detail";
import Contact from "./Pages/Contact"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/favs' element={<Favs />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
