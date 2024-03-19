import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import NavBar from './components/nav/NavBar'; 
import Slideshow from './components/slideshow/Slideshow';
import './videos/vanilla.mp4';
import './videos/drawtool.mp4';
import './videos/menandco.mp4';
import './videos/Gok.mp4';
import './videos/cher.mp4';
import './videos/weather.mp4';


const App: React.FC = () => {
  //array of video paths:
  const videos = [
    './videos/cher.mp4',
    './videos/weather.mp4',
    './videos/vanilla.mp4',
    './videos/menandco.mp4',
    './videos/Gok.mp4',
    './videos/drawtool.mp4'
    
  ];
  return (
    
    <Router>
  
        <Header />
        <NavBar />
<br />
        <Slideshow videos={videos} />
        <Footer />
  
    </Router>
  );
};

  

export default App;
