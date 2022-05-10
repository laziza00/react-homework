
import './App.css';
import Header from './contentBlock/Header/header'
import Navbar from './contentBlock/Navbar/navbar'
import Hero from './contentBlock/Hero/hero'
import Over from './contentBlock/Over/over'

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Navbar></Navbar>
        <Hero></Hero>
        <Over></Over>
    </div>
  );
}

export default App;
