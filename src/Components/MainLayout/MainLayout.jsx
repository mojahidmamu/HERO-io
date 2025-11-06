import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Hero from '../../Components/Hero/Hero';
import TrendingPage from '../../Components/TreadingPage/TreadingPage';


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Hero></Hero>
            <TrendingPage></TrendingPage>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;