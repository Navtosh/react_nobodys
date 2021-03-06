import logo from './logo.svg';
import './App.css';
import $ from 'jquery'; 
import {BootstrapCarousel} from './components/BootstrapCarousel ';
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";


import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { MainContaint } from "./components/MainContaint";
import { ContactStrip } from "./components/ContactStrip";
import { Footer } from "./components/Footer";
import { FooterBottom } from "./components/FooterBottom";

function App() {
  return (
    <div className="App">
      <Header />
      <BootstrapCarousel />
      <MainContaint />
      <ContactStrip />
      <Footer />
      <FooterBottom />
    </div>
  );
}

export default App;
