import React from 'react';
import Navbar from './components/Navbar';
import ImgSlider from './components/ImgSlider';
import AboutUs from './components/AboutUs';
import Acadmics from './components/Acadmics';
import Admission from './components/Admission';
import Faculty from './components/Faculty';
import Students from './components/Students';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <ImgSlider />
      <div className="container mx-auto">
        <AboutUs />
        <Acadmics />
        <Admission />
        <Faculty />
        <Students />
        <Gallery />
        <Location/>
      </div>
      <Footer />
    </div>
  );
}

export default App;

