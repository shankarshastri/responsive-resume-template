import React from "react";
import { Row, Col } from 'reactstrap';
import * as Constants from './../Constants'

export default class Experience extends React.Component {

  renderExperienceProf(obj) {
    return (<Row>
      <Col>
        <Row>
          <Col>
            <h3>{obj.company}</h3>
          </Col>
          <Col>
            <h4> {obj.role} </h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>{obj.date}</h4>
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
      <div className="experience">
        {Constants.ExperienceObject.map(x => this.renderExperienceProf(x))}
      </div>);
  }
}