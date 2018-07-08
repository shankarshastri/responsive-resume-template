import React from "react";
import ProfileImage from './ProfileImage';
import { Container, Row, Col } from 'reactstrap';
import ProfileDetails from './ProfileDetails';
import {Name} from '../Constants'
class Profile extends React.Component {
  render() {
    return (
      <div className="profile">
      <Container>
        <Row>
          <Col>
            <ProfileImage />
          </Col>
        </Row>
        <Row>
        <Col>
        <h1 className="name"> {Name} </h1>
        </Col>
        </Row>
        <Row>
        <Col>
        <ProfileDetails />
        </Col>
        </Row>
        </Container>
      </div>);
  }
}

export default Profile;