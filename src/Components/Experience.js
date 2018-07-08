import React from "react";
import { Row, Col } from 'reactstrap';
import * as Constants from './../Constants'

export default class Experience extends React.Component {

  // renderDesc(desc) {
  //   desc.map
  // }

  renderExperienceProf(obj) {
    return (<Row>
      <Col>
        <Row>
          <Col>
            <h4>{obj.company}</h4>
          </Col>
          <Col>
            {obj.role}
          </Col>
        </Row>
        <Row>
          <Col>
            {obj.date}
          </Col>
          <Col>
            {obj.desc}
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