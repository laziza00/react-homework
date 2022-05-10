
import './App.css';
import Header from './contentBlock/Header/header'
import Navbar from './contentBlock/Navbar/navbar'
import Hero from './contentBlock/Hero/hero'
import Over from './contentBlock/Over/over'
import Footer from './contentBlock/Footer/footer'


function App() {
  return (
    <div className="App">
        <Header></Header>
        <Navbar></Navbar>
        <Hero></Hero>
        <Over></Over>
        <Footer></Footer>
    </div>
  );
}

export default App;
