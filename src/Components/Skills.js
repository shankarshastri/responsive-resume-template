import React from 'react';
import { Progress, Row, Col  } from 'reactstrap';
import * as Constants from './../Constants';

export default class Skills extends React.Component {
  renderProgrammingSkills() {
    return Constants.ProgrammingSkills.map(element => {
      return (
        <Row key={element.language}>
        <Col xs={3}>
        {element.language}
        </Col>
        <Col xs={9}>
            <Progress value={element.progress}>{ element.progress }</Progress>
        </Col> 
        </Row>)
    })
  }

  renderMarkUpSkills() {
    return Constants.Constants.skills.map(element => {
      return (
        <Row key={element.language}>
          <Col xs={3}>
            {element.language}
          </Col>
          <Col xs={9}>
            <Progress value={element.progress}>{element.progress}</Progress>
          </Col>
        </Row>)
    })
  }

  render() {
    return (<div className="skills">
      <Row>
      <Col>
      <h3> Programming Languages </h3>
      </Col>
      </Row>
      {this.renderProgrammingSkills()}
      </div>);
  }
}