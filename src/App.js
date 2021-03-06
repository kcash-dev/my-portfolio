import './App.css';

//Components
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import BottomNav from './components/BottomNav';


function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <BottomNav />
    </main>
  );
}

export default App;
