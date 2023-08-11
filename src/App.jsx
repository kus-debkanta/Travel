import React, { Component } from 'react'
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Map from './Component/Map/Map';
import Footer from './Component/Footer/Footer';
import Slider from './Component/Slider/Slider';
import Bottom from './Component/Bottom/Bottom';
import Middle from './Component/Middle/Middle';
import Hidden from './Component/Hidden/Hidden';
import Contact from './Component/Contact/Contact';
import Home from './Component/HomeFile';
import Travel from './Component/Travel Places/Travel';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showing: true
    }
  }
  showingHandler = () => {
    this.setState({
      showing: !this.state.showing
    })
  }
  render() {
    return (
      <div>
        <Router>
        <Navbar></Navbar>
          <Routes>
            <Route path='/' element={
              <Home></Home>
            }>              
            </Route>
            <Route path='/contact' element={
              <Contact></Contact>
            }>              
            </Route>
            <Route path='/travel' element={
              <Travel></Travel>
            }>              
            </Route>
          </Routes>
          <Footer></Footer>
        </Router>
      </div>
    )
  }
}
export default App;