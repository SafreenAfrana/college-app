import React, { Component } from "react";
import { Card, Accordion, Image , Nav,Navbar } from "react-bootstrap";
import "./footer.css";
class Contact extends Component {
  render() {
    const links = [
      {
        href: "https://syedengg.ac.in/index.php",
        name: "Home",
      },
      {
        href: "https://syedengg.ac.in/aboutus-saec.php",
        name: "About Us",
      },
      {
        href: "https://syedengg.ac.in/departments.php",
        name: "Departments",
      },
      {
        href: "https://syedengg.ac.in/menshostel.php",
        name: "Students",
      },
      {
        href: "https://syedengg.ac.in/Research-Director.php",
        name: "Research",
      },
      {
        href: "http://syedengg.indiacareerportal.com",
        name: "Placement",
      },
      {
        href: "https://syedengg.ac.in/library_details.php",
        name: "Library",
      },
      {
        href: "https://syedengg.ac.in/gallery.php",
        name: "Gallery",
      },
      {
        href: "https://syedengg.ac.in/grps.php",
        name: "Alumni",
      },
      {
        href: "https://mail.google.com/a/syedengg.ac.in",
        name: "WebMail",
      },
      {
        href: "https://syedengg.ac.in/contact-us.php",
        name: "Contact Us",
      },
    ];
    return (
      <Accordion>
      <Card className="footer">
        <Navbar collapseOnSelect expand="lg"  variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                
            {links.map((l) => {
              return (
                
                  <Nav.Link href={l.href}>{l.name}
                  <span class="fpad">   |</span>
                  </Nav.Link>
              );
            })}
            </Nav>
            </Navbar.Collapse>
          </Navbar>
          <p>
            Copyright © 2011 - 2020. All Rights Reserved. Syed Ammal Engineering
            College.
            <span className="id">Designed & Maintained by: </span>
          </p>
          
          <p>
            <a href="http://www.syedengg.ac.in/">www.syedengg.ac.in</a>
            <span className="logo">
              <Image src="asserts/images.png" alt="image" />
            </span>
          </p>
        </Card>
      </Accordion>
    );
  }
}

export default Contact;
