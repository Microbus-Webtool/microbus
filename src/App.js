
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Slider from "./components/slider";
// import "./App.css";

function App() {
  return (
    <Router>
        <Navbar/>

        <Routes>
           <Route />
        </Routes>

        <Slider/>

        <Footer/>
    </Router>
  );
}

export default App;
