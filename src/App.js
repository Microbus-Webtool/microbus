
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./components/Home.js";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>

        <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>

        <Footer/>
        
    </Router>
  );
}

export default App;
