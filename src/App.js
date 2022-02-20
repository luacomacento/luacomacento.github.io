import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Intro from './components/Intro';
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
