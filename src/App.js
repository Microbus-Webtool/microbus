
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/navbar.css"

function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
           <Route />
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
