import './App.css';
import NavigationBar from './components/NavigationBar';
import Hero from './components/Hero';
import KontenPertama from './components/KontenPertama';
import Cards from './components/Cards';
import KontenKedua from './components/KontenKedua';
import "./style/LandingPage.css";

function App() {
  return (
    <div>
      <div>
        <NavigationBar/>
        <Hero />
        <KontenPertama />
        <Cards />
        <KontenKedua />
      </div>
    </div>
  );
}

export default App;
