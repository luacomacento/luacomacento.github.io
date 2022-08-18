import './App.css';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Projects from './components/Projects';
// import ContactForm from './components/ContactForm';

function App() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <About />
        <Projects />
        {/* <ContactForm /> */}
        <Footer />
      </main>
    </>
  );
}

export default App;
