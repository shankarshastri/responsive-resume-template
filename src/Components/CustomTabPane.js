import React from 'react';
import { Jumbotron, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Skills from './Skills';

export default class CustomTabPane extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div className="customTabPane">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1'})}
              onClick={() => { this.toggle('1'); }}
            >
              SKILLS
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
             EXPERIENCE
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              EDUCATION
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              ABILITIES
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '5' })}
              onClick={() => { this.toggle('5'); }}
            >
              INTERESTS
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col>
                <Jumbotron>
                <Skills />
                </Jumbotron>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col>
                <Jumbotron>
                  <h1 className="display-3">Hello, world!</h1>
                  <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                  <hr className="my-2" />
                  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                </Jumbotron>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col>
                <Jumbotron>
                  <h1 className="display-3">Hello, world!</h1>
                  <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                  <hr className="my-2" />
                  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                </Jumbotron>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col>
                <Jumbotron>
                  <h1 className="display-3">Hello, world!</h1>
                  <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                  <hr className="my-2" />
                  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                </Jumbotron>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="5">
            <Row>
              <Col>
                <Jumbotron>
                  <h1 className="display-3">Hello, world!</h1>
                  <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                  <hr className="my-2" />
                  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                </Jumbotron>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}