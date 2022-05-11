import Header from "./components/header/Header";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Nav from "./components/nav/Nav";
import Services from './components/services/Services'
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Mobilenav from "./components/mobilenav/Mobilenav";
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'


function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const showMobileNav = () => {
    setShowMobileMenu(true)
  }
  return (
    <>
      <GiHamburgerMenu className='hamburger-button' onClick={showMobileNav}/>
      <Header />
      {showMobileMenu && <Mobilenav onAdd={() => setShowMobileMenu(!showMobileMenu)} />}
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
