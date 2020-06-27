import React, { Component } from "react";
import { Dropdown, SplitButton, Accordion } from "react-bootstrap";
import "./dropdown.css";

const menus = [
  {
    key: "Home",
    id: "dropdown-split-variants-secondary",
    variant: "secondary",
    title: "Home",
    items: [
      {
        eventkey: "1",
        title: "About us",
        href: "https://syedengg.ac.in/aboutus-saec.php",
      },
      {
        eventkey: "2",
        title: "Administration",
        href: "#",
      },
      {
        eventkey: "3",
        title: "Syed Ammal Trust",
        href: "https://syedengg.ac.in/syedammal-trust.php",
      },
      {
        eventkey: "4",
        title: "Correspondent",
        href: "https://syedengg.ac.in/aboutus-secretary.php",
      },
      {
        eventkey: "5",
        title: "Principal",
        href: "https://syedengg.ac.in/aboutus-principal.php",
      },
    ],
  },
  {
    key: "Departments",
    id: "dropdown-split-variants-secondary",
    variant: "secondary",
    title: "Departments",
    items: [
      {
        eventkey: "1",
        title: "UG",
        href:
          "https://syedengg.ac.in/pdf/Courses-Approved-Intake-2019-2020.pdf",
      },
      {
        eventkey: "2",
        title: "PG",
        href:
          "https://syedengg.ac.in/pdf/Courses-Approved-Intake-2019-2020.pdf",
      },
    ],
  },
  {
    key: "Students",
    id: "dropdown-split-variants-secondary",
    variant: "secondary",
    title: "Students",
    items: [
      {
        eventkey: "1",
        title: "Code of Conduct",
        href: "https://syedengg.ac.in/conduct_students.php",
      },
      {
        eventkey: "2",
        title: "Curriculum & Syllabus",
        href: "https://syedengg.ac.in/curriculum-and-syllabus.php",
      },
      {
        eventkey: "3",
        title: "Study Materials",
        href: "https://syedengg.ac.in/studymaterials.php",
      },
      {
        eventkey: "4",
        title: "Useful links",
        href: "https://syedengg.ac.in/useful-links.php",
      },
    ],
  },
  {
    key: "Research",
    id: "dropdown-split-variants-secondary",
    variant: "secondary",
    title: "Research",
    items: [
      {
        eventkey: "1",
        title: "Scholars",
        href: "https://syedengg.ac.in/Research-Scholars.php",
      },
      {
        eventkey: "2",
        title: "Lab",
        href: "https://syedengg.ac.in/Research-Lab.php",
      },
      {
        eventkey: "3",
        title: "Activities",
        href: "https://syedengg.ac.in/Research-Activities.php",
      },
      {
        eventkey: "4",
        title: "Recognized Supervisors",
        href: "https://syedengg.ac.in/Recognized-Supervisors.php",
      },
    ],
  },
  {
    key: "Placements",
    id: "dropdown-split-variants-secondary",
    variant: "secondary",
    title: "Placements",
    items: [
      {
        eventkey: "1",
        title: "Portal",
        href: "https://syedengg.indiacareerportal.com",
      },
      {
        eventkey: "2",
        title: "Corporate Relationships",
        href: "https://syedengg.ac.in/corporate-relationships.php",
      },
    ],
  },
  {
    key: "Library",
    id: "dropdown-split-variants-secondary",
    variant: "secondary",
    title: "Library",
    items: [
      {
        eventkey: "1",
        title: "Library Details",
        href: "https://syedengg.ac.in/library_details.php",
      },
      {
        eventkey: "2",
        title: "Faculty",
        href: "https://syedengg.ac.in/library_faculty.php",
      },
    ],
  },
  {
    key: "Alumni",
    id: "dropdown-split-variants-secondary",
    variant: "secondary",
    title: "Alumni",
    items: [
      {
        eventkey: "1",
        title: "Alumni Registration",
        href: "https://alumni.syedengg.ac.in/aluregfrm",
      },
      {
        eventkey: "2",
        title: "Group Mail",
        href: "https://syedengg.ac.in/grps.php",
      },
    ],
  },
];

class Menu extends Component {
  dropDown(item) {
    return (
      <Dropdown.Item eventkey={item.eventKey} href={item.href}>
        {item.title}
      </Dropdown.Item>
    );
  }

  render() {
    return (
      <Accordion className="dropdown">
        {menus.map((menu) => {
          return (
            <SplitButton
              key={menu.key}
              id={menu.id}
              variant={menu.variant}
              title={menu.title}
            >
              {menu.items.map((item) => {
                return this.dropDown(item);
              })}
            </SplitButton>
          );
        })}
      </Accordion>
    );
  }
}

export default Menu;
