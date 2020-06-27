import React, { Component } from "react";
import { Table, Card } from "react-bootstrap";
import "./table.css";

const courses = [
  {
    degree: "UG",
    dept1: "B.E. Civil Engineering",
    dept2: "B.E. Mechanical Engineering ( NBA Accredited )",
    dept3: "B.E.Computer Science and Engineering ( NBA Accredited )",
    dept4: "B.E. Electronics and Communication Engineering ( NBA Accredited )",
    dept5: "B.E. Electrical and Electronics Engineering ( NBA Accredited )",
  },
  {
    degree: "PG",
    dept1: "M.E. Computer Science and Engineering",
    dept2: "M.E. Embedded System Technologies",
    dept3: "M.E. VLSI Design",
    dept4: "M.E. Manufacturing Engineering",
    dept5: "Electronics and Communication Engineering",
  },
  {
    degree: "Ph.D",
    dept1: "Electrical and Electronics Engineering",
    dept2: "Mechanical Engineering",
    dept3: "Computer Science and Engineering",
    dept4: "MBA (Marketing, Finance, HRM, Operations & Systems)",
  },
];
export class Tablecontent extends Component {
  render() {
    return (
      <div>
        <Card>
          <Card.Header className="tableheading">
            <h4>Courses Offered</h4>
          </Card.Header>
        
        </Card>
        <br />
        <table className="table table-hover table-striped table-light">
          <thead className="table-dark">
            <tr class="tablehead">
              {courses.map((course) => {
                return <th>{course.degree}</th>;
              })}
            </tr>
          </thead>

          <tbody>
            <tr>
              {courses.map((course) => {
                return <td>{course.dept1}</td>;
              })}
            </tr>

            <tr rowSpan="2">
              {courses.map((course) => {
                return <td>{course.dept2}</td>;
              })}
            </tr>
            <tr rowSpan="3">
              {courses.map((course) => {
                return <td>{course.dept3}</td>;
              })}
            </tr>
            <tr rowSpan="3">
              {courses.map((course) => {
                return <td>{course.dept4}</td>;
              })}
            </tr>
            <tr rowSpan="3">
              {courses.map((course) => {
                return <td>{course.dept5}</td>;
              })}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Tablecontent;
