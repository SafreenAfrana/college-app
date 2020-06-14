import React, { Component } from 'react';
import { Dropdown,SplitButton,Accordion} from 'react-bootstrap'
import './dropdown.css'

class Menu extends Component {
  render() {
    return (
      <Accordion style={{backgroundColor:"gray"}}>
      <SplitButton
              key="Home"
              id="dropdown-split-variants-secondary"
              variant="secondary"
              title="Home"
            >
              <Dropdown.Item eventKey="1" href="aboutus-saec.php">About Us</Dropdown.Item>
              <Dropdown.Item eventKey="2" href="#">Administration</Dropdown.Item>
              <Dropdown.Item eventKey="3" href="syedammal-trust.php">Syed Ammal Trust</Dropdown.Item>
              <Dropdown.Item eventKey="4" href="aboutus-secretary.php">Correspondent</Dropdown.Item>
              <Dropdown.Item eventKey="5" href="aboutus-principal.php">Principal</Dropdown.Item>
            </SplitButton>
            <SplitButton
              key="Departments"
              id="dropdown-split-variants-secondary"
              variant="secondary"
              title="Departments"
            >
              <Dropdown.Item eventKey="1" href="https://syedengg.ac.in/pdf/Courses-Approved-Intake-2019-2020.pdf">UG</Dropdown.Item>
              <Dropdown.Item eventKey="2" href="https://syedengg.ac.in/pdf/Courses-Approved-Intake-2019-2020.pdf">PG</Dropdown.Item>
              
              
            </SplitButton>
            <SplitButton
              key="Students"
              id="dropdown-split-variants-secondary"
              variant="secondary"
              title="Students"
            >
              <Dropdown.Item eventKey="1" href="conduct_students.php">Code of Conduct</Dropdown.Item>
              <Dropdown.Item eventKey="2" href="curriculum-and-syllabus.php" >Curriculum & Syllabus</Dropdown.Item>
              <Dropdown.Item eventKey="3" href="studymaterials.php">Study Materials</Dropdown.Item>
              <Dropdown.Item eventKey="4" href="useful-links.php">Useful links</Dropdown.Item>
            </SplitButton>
            <SplitButton
              key="Research"
              id="dropdown-split-variants-secondary"
              variant="secondary"
              title="Research"
            >
              <Dropdown.Item eventKey="1" href="Research-Scholars.php">Scholars</Dropdown.Item>
              <Dropdown.Item eventKey="2" href="Research-Lab.php">Lab</Dropdown.Item>
              <Dropdown.Item eventKey="3" href="Research-Activities.php">Activities</Dropdown.Item>
              <Dropdown.Item eventKey="4" href="Recognized-Supervisors.php">Recognized Supervisors</Dropdown.Item>
              
            </SplitButton>
            <SplitButton
              key="Placements"
              id="dropdown-split-variants-secondary"
              variant="secondary"
              title="Placements"
            >
              <Dropdown.Item eventKey="1" href="http://syedengg.indiacareerportal.com" target="_blank">Portal</Dropdown.Item>
              <Dropdown.Item eventKey="2" href="corporate-relationships.php">Corporate Relationships</Dropdown.Item>
      
              
            </SplitButton>
            <SplitButton
              key="Library"
              id="dropdown-split-variants-secondary"
              variant="secondary"
              title="Library"
            >
              <Dropdown.Item eventKey="1" href="library_details.php">Library Details</Dropdown.Item>
              <Dropdown.Item eventKey="2" href="library_faculty.php">Faculty</Dropdown.Item>
              
              
            </SplitButton>
            <SplitButton
              key="Alumni"
              id="dropdown-split-variants-secondary"
              variant="secondary"
              title="Alumni"
            >
              <Dropdown.Item eventKey="1" href="http://alumni.syedengg.ac.in/aluregfrm">Alumni Registration</Dropdown.Item>
              <Dropdown.Item eventKey="2" href="grps.php">Group Mail</Dropdown.Item>
              
              
            </SplitButton>
            </Accordion>
    
    );
  }
}

export default Menu;
