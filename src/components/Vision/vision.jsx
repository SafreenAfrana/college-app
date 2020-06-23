import React, { Component } from 'react'
import {Accordion,Card,Button,Image } from 'react-bootstrap'
import './vision.css'
class Vision extends Component {
    render() {
        return (
          <div>
            <Accordion>
  <Card>
    <Card.Header className="vision">
      
        <h4>College Vision</h4>
        
    </Card.Header>
    
      <Card.Body><ul>
        <li>To be an Institute of eminence and to evolve disciplined and globally 
        competent engineers and technocrats.</li>
        </ul>
        </Card.Body>
    
  </Card>
  </Accordion>
<br />
<Accordion>
<Card>
  <Card.Header className="mission">
      <h4>College Mission</h4>
    
  </Card.Header>
  <Card.Body><ul>
      <li>Generating an enabling environment for academic excellence through quality work.</li><br />
      <li>Moulding rural students into professionally competent and intellectually proficient employable force through curricular, 
        co-curricular and extra-curricular activities.</li><br />
        <li>Creating globally talented human resources with ethical outlook and moral values, 
          for the larger benefits of the society.</li><br />
      </ul>
      </Card.Body>
  
</Card>

<Card>
  <Card.Header className="mission">
      <h4>Anti-Ragging Committee</h4>
    </Card.Header>
  <Card.Body>
    <h6>In view of the directions of the Hon’ble Supreme Court in SLP No. 24295 of 2006 dated 16-05-2007 and in Civil Appeal number 887 of 2009, dated 08-05-2009 to prohibit, prevent and eliminate the scourge of ragging including any conduct by any student or students whether by words spoken or written or by an act which has the effect of teasing, treating or handling with rudeness a fresher or any other student, or indulging in rowdy or undisciplined activities by any student or students which causes or is likely to cause annoyance, hardship or psychological harm or to raise fear or apprehension thereof in any fresher or any other student or asking any student to do any act which such student will not in the ordinary course do and which has the effect of causing or generating a sense of shame , or torment or embarrassment so as to adversely affect the physique or psyche of such fresher or any other student, with or without an intent to derive a sadistic pleasure or showing off power, authority or superiority by a student over any fresher or any other student, in all higher education institutions in the country, and thereby, to provide for the healthy development, physically and psychologically, of all students, the All India Council for Technical Education,(AICTE) brings forth these Regulations.</h6>
      </Card.Body>
  
</Card>
</Accordion>
<br />
<Card className="image">
<Image src="asserts/anti-ragging.jpg" width="600px" height="600px" img-responsive/>
</Card>
<br />
<Button variant="primary" href="https://syedengg.ac.in/pdf/Anti-ragging.pdf">Read More</Button>
<br />
<br />
</div>
        )
    }
}

export default Vision
