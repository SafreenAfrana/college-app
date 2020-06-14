import React, { Component } from 'react';
import { Card, Accordion,Image } from 'react-bootstrap';
import './footer.css'
class Contact extends Component {
  render() {
    return (
        <Accordion>
        <Card style={{backgroundColor:"#303838",color:"white"}} className="footer">
        <p><a href="index.php">Home  </a><span class="fpad">|  </span>
        <a href="aboutus-saec.php"> About Us </a><span class="fpad"> |  </span>
        <a href="departments.php"> Departments </a><span class="fpad"> |  </span>
        <a href="menshostel.php"> Students </a><span class="fpad"> |  </span>
        <a href="Research-Director.php"> Research </a><span class="fpad"> |  </span>
        <a href="http://syedengg.indiacareerportal.com/"> Placement </a><span class="fpad"> |  </span>
        <a href="library_details.php"> Library </a><span class="fpad"> |  </span>
        <a href="gallery.php"> Gallery </a><span class="fpad"> |  </span>
        <a href="grps.php"> Alumni </a><span class="fpad"> |  </span>
        <a href="https://mail.google.com/a/syedengg.ac.in"> WebMail </a><span class="fpad"> |  </span>
        <a href="contact-us.php"> Contact Us</a>
        </p>
        <p>Copyright © 2011 - 2020. All Rights Reserved. Syed Ammal Engineering College.
          <span className="id">Designed & Maintained by : </span></p>
        <p><a href="http://www.syedengg.ac.in/">www.syedengg.ac.in</a>
        <span className="logo"><Image src="asserts/images.png" alt="image" /></span></p>
    </Card>
    </Accordion>
    );
  }
}

export default Contact;
