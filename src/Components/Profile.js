import React from "react";
import ProfileImage from './ProfileImage';
import { Row, Col } from 'reactstrap';
class Profile extends React.Component {
  render() {
    return (
      <div className="profile"> 
      <Row>
      <Col>
      <ProfileImage />
      </Col>
      </Row>
      <Row>
      <Col>
      <h1> SHANKAR RC </h1>
      </Col>
      </Row>
      </div>);
  }
}

export default Profile;