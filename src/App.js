import Header from "./components/header/Header";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Nav from "./components/nav/Nav";
import Services from './components/services/Services'
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
      
  );
}

export default App;
