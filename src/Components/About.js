import React from "react";
import { Row, Col } from 'reactstrap';
import * as Constants from '../Constants';

export default class About extends React.Component {
  renderAboutFromObj(obj) {
    return (
      <Row>
        <Col xs={2} lg={1}>
          <img src={obj.icon} alt={obj.icon} style={{
            width: '25px',
            height: '25px'}}/>
        </Col>
        <Col xs={4} lg={2}>
          {obj.name}
        </Col>
        <Col xs={6} lg={9}>
          <a href={obj.profileLink}> {obj.profileLink} </a>
        </Col>
      </Row>
    )
  }

  render() {
    return (<div className="about">
      {Constants.AboutLinksObj.map(x => this.renderAboutFromObj(x))}
    </div>)
  }
}