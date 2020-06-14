import React, { Component } from 'react';
import { Card,CardGroup,Button, Accordion } from 'react-bootstrap'
class Info extends Component {
  render() {
    return (
        <Accordion>
        <CardGroup>
        <Card>
          <Card.Img variant="top" src="asserts/5.jpg" height="250px" />
          <Card.Body>
            <Card.Title style={{color:"black"}}>Welcome<br />
                <span style={{color:"red"}}>Syed Ammal Engineering College</span></Card.Title>
            <Card.Text style={{color:"black"}}>
            Syed Ammal Engineering college , Ramanathapuram a Self-Financing Institution, is one among the several
                educational institutions founded by Late. Dr. E.M.Abdullah.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" href="https://syedengg.ac.in/aboutus-saec.php">Read more</Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="asserts/secretary.jpg" height="250px" />
          <Card.Body>
            <Card.Title style={{color:"black"}}>Correspondent<br />
            <span style={{color:"red"}}>Rtn.Dr.Chinnadurai Abdullah</span></Card.Title>
            <Card.Text style={{color:"black"}}>
            Rtn.Dr.Chinnadurai Abdullah, Correspondent of the institution and Syed Ammal Trust. Being a Radiologist,
            he has a lot of ambitions to bring about landmark developments........
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <Button variant="primary" href="https://syedengg.ac.in/aboutus-secretary.php">Read more</Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="asserts/principal.jpg" height="250px" />
          <Card.Body>
            <Card.Title style={{color:"black"}}>Principal<br />
            <span style={{color:"red"}}>Dr. M. PERIYASAMY M.E., Ph.D.,<br /> MISTE, AMIETE, MIEEE</span></Card.Title>
            <Card.Text style={{color:"black"}}>
            Dr. M. PERIYASAMY M.E., Ph.D., MISTE, AMIETE, MIEEE., obtained his
             Bachelor’s degree in Electronics and Communication Engineering from 
             Alagappa Chettiar College of Engineering and Technology .......
             </Card.Text>
          </Card.Body>
          <Card.Footer>
          <Button variant="primary" href="https://syedengg.ac.in/aboutus-principal.php">Read more</Button>
          </Card.Footer>
        </Card>
      </CardGroup>
      </Accordion>

    );
  }
}

export default Info;
