import "./App.css"; 
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer"; 
import TreadingPage from "./Components/TreadingPage/TreadingPage";

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <TreadingPage></TreadingPage>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
