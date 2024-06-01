import React from 'react';
import Navbar from './components/navbar';
import Carousel from './components/carousel';
import About from './components/about';
import PizzaTypes from './components/types';
import Items from './components/items';
import Footer from './components/footer';

class App extends React.Component {
    render() {
      return <div>
        <Navbar />
        <Carousel />
        <About />
        <PizzaTypes />
        <Footer />
      </div>   
    
    }
}

export default App;