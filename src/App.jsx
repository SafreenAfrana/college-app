import React, { Component } from 'react'
import './App.css';
import { Image} from 'react-bootstrap'
import Tablecontent from './components/Table/table'
import Vision from './components/Vision/vision.jsx';
import Contact from './components/Footer/footer.jsx'
import Logo from './components/Header/header';
import Menu from './components/DropDowns/dropdown'
import Info from './components/Card/card'
class App extends Component {
  render() {
    return (
      <div className="container">
        <div>
        <Logo />
        <br />
        <Menu />
        <Image src="asserts/syedengg-banner.jpg" width="100%"/>
        </div>
        <br />
        <Info />
        <br />
        <Tablecontent />
        <br />
        <Vision />
        <br />
        <Contact />
        </div>
      
    )
  }
}

export default App

    
    
  
