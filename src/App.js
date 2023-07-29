import './App.css';
import About from './componenents/about/About';
import Contact from './componenents/contact/Contact';
import Footer from './componenents/footer/Footer';
import Header from './componenents/header/Header';
import Home from './componenents/header/home/Home';
import Qualification from './componenents/qualification/Qualification';
import Services from './componenents/services/Services';
import Skills from './componenents/skills/Skills';
import Working from './componenents/work/Working';





function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Working />
        <Contact />
        <Footer/>
        
      </main>
      
    </>
  );
}

export default App;
