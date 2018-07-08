import React from 'react';
import { AwardsObject } from '../Constants';
import { UncontrolledCarousel } from 'reactstrap';

export default class Awards extends React.Component {
  render() {
    return (<div className="awards">
      <UncontrolledCarousel items={AwardsObject}/>
      </div>);
  }
}