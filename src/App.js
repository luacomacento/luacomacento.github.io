import clevertap from 'clevertap-web-sdk';
import './App.css';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Projects from './components/Projects';
// import ContactForm from './components/ContactForm';

function App() {
  clevertap.init("TEST-4W5-945-W96Z", "eu1", "https://luacomacento.github.io", "TEST-54c-504")
  clevertap.spa = true

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
