import React from "react";
import { Row, Col } from 'reactstrap';
import * as Constants from './../Constants';

export default class Education extends React.Component {

  renderEducation(obj) {
    return (
      <Row>
        <Col>
          <Row>
            <Col>
              <h3>{obj.college}</h3>
            </Col>
            <Col>
              <h4> {obj.role} </h4>
            </Col>
          </Row>
          <Row>
            <Col>
            {obj.date}
              </Col>
            <Col>
              <h5>{obj.desc}</h5>
            </Col>
          </Row>
        </Col>
      </Row>)
  }

  render() {
    return (
      <div className="education">
        {Constants.EducationObject.map(x => this.renderEducation(x))}
      </div>);
  }
}

