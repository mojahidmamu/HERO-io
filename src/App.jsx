import "./App.css"; 
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer"; 
import TreadingPage from "./Components/TreadingPage/TreadingPage";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Hero></Hero>
        <TreadingPage></TreadingPage>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
