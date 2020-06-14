import React, { Component } from 'react';
import { Card,Accordion } from 'react-bootstrap'
class Logo extends Component {
  render() {
    return (
        <Accordion>
        <Card style={{backgroundColor:"black"}}>
        <img src="asserts/syedengg-logo.png" alt="logo" />
      </Card>
      
      </Accordion>
      
      
    );
  }
}

export default Logo;

