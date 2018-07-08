import React from 'react';
import { Progress, Row, Col } from 'reactstrap';
import * as Constants from './../Constants';

export default class Skills extends React.Component {
  renderProgressOnSkills(skills) {
    return skills.map(element => {
      return (
        <Row key={element.language}>
          <Col xs={3}>
            {element.language}
          </Col>
          <Col xs={9}>
            <Progress value={element.progress}>
              {element.progress}
            </Progress>
          </Col>
        </Row>)
    })
  }


  renderFrameworks(fs) {
    return fs.map(element => {
      return (
        <Row key={element.language}>
          <Col xs={3}>
            {element.language}
          </Col>
          <Col xs={9}>
            {element.frameworks}
          </Col>
        </Row>
      )
    });
  }

  renderGeneric(arr) {
    return (<Row> 
      <Col>
      {arr.join(", ").concat(".")}
    </Col>
    </Row>);
  }

  renderProgrammingSkills() {
    return this.renderProgressOnSkills(Constants.ProgrammingSkills);
  }

  renderMarkUpSkills() {
    return this.renderProgressOnSkills(Constants.MarkUpSkills);
  }

  render() {
    return (<div className="skills">
      <Row>
        <Col>
          <Row>
            <Col>
              <h3> Programming Languages </h3>
            </Col>
          </Row>
          {this.renderProgrammingSkills()}
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col>
              <h3> MarkUp Languages </h3>
            </Col>
          </Row>
          {this.renderMarkUpSkills()}
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col>
              <h3> Frameworks </h3>
            </Col>
          </Row>
          {this.renderFrameworks(Constants.Frameworks)}
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col>
              <h3> Test-Frameworks </h3>
            </Col>
          </Row>
          {this.renderFrameworks(Constants.TestFrameworks)}
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col>
              <h3> Databases </h3>
            </Col>
          </Row>
          {this.renderGeneric(Constants.Databases)}
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col>
              <h3> Caches </h3>
            </Col>
          </Row>
          {this.renderGeneric(Constants.Caches)}
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col>
              <h3> Tools </h3>
            </Col>
          </Row>
          {this.renderGeneric(Constants.Tools)}
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col>
              <h3> IDE </h3>
            </Col>
          </Row>
          {this.renderGeneric(Constants.IDE)}
        </Col>
      </Row>
    </div>);
  }
}