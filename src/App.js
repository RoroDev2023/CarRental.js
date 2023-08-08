import React from 'react';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Calendar from './components/Calendar';
import Heading from './components/Heading';
import Carousel from './components/Carousel'
import Car from './components/Car';


function App() {

  return (
    <>
    <Navbar />
    <Homepage />
    <Heading />
    <Car />
    <Carousel />
    </>
  );
}

export default App;