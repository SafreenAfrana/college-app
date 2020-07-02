import React, { Component } from 'react';
import { Card,Accordion } from 'react-bootstrap'
import './header.css'
class Logo extends Component {
  render() {
    return (
      <Accordion>
        <Card className="header">
          <a href="asserts/syedengg-logo.png">
        <img src="asserts/syedengg-logo.png"  alt="logo" />
        </a>
        </Card>
      </Accordion>
      );
  }
}

export default Logo;

