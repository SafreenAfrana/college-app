import React, { Component } from 'react'
import { Table,Card} from 'react-bootstrap'
import './table.css'
export class Tablecontent extends Component {
    render() {
        return (
          <div>
          <Card>
    <Card.Header
      style={{backgroundColor:"red",color:"white"}}>
        <h4>Courses Offered</h4>
      
    </Card.Header>
    </Card>
    <br />
            <Table striped bordered hover>
  <thead style={{color:"black"}}>
    <tr>
      <th>UG</th>
      <th>PG</th>
      <th>Ph.D</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>B.E. Civil Engineering</td>
      <td>M.E. Computer Science and Engineering</td>
      <td>Electrical and Electronics Engineering</td>
      
    </tr>
    <tr rowSpan="2">
      <td>B.E. Mechanical Engineering<br />
      <span style={{color:"#00F"}}>( NBA Accredited )</span></td>
      <td>M.E. Embedded System Technologies</td>
      <td>Mechanical Engineering</td>
      
    </tr>
    <tr rowSpan="3">
      <td>B.E. Computer Science and <br />Engineering<br />
      <span style={{color:"#00F"}}>( NBA Accredited )</span></td>
      <td>M.E. VLSI Design</td>
      <td>Computer Science and Engineering</td>
    </tr>
    <tr rowSpan="3">
      <td>B.E. Electronics and <br />Communication Engineering<br />
      <span style={{color:"#00F"}}>( NBA Accredited )</span></td>
      <td>M.E. Manufacturing Engineering</td>
      <td>Electronics and Communication<br /> Engineering</td>
    </tr>
    <tr rowSpan="3">
      <td>B.E. Electrical and Electronics<br /> Engineering<br />
      <span style={{color:"#00F"}}>( NBA Accredited )</span></td>
      <td>MBA (Marketing, Finance, HRM,<br /> Operations & Systems)</td>
      <td></td>
    </tr>
  </tbody>
</Table>
</div>
        )
    }
}

export default Tablecontent
