import React, { Component } from 'react'
import './App.css';
import Tablecontent from './components/table'
import Vision from './components/vision.jsx';
import { Image} from 'react-bootstrap'
import Contact from './components/footer.jsx'
import Logo from './components/header';
import Menu from './components/DropDowns/dropdown'
import Info from './components/card'
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

    
    
  
