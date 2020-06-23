import React, { Component } from 'react';
import { Card,Accordion } from 'react-bootstrap'
import './header.css'
class Logo extends Component {
  render() {
    return (
        <Accordion>
        <Card className="header">
        <img src="asserts/syedengg-logo.png" alt="logo" />
      </Card>
      
      </Accordion>
      
      
    );
  }
}

export default Logo;

