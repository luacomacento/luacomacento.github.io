import './App.css';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <About />
        <Projects />
        <Footer />
      </main>
    </>
  );
}

export default App;
