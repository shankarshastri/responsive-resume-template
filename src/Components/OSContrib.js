import { Table } from 'reactstrap';
import React from "react";
import * as Constants from '../Constants';

export default class OSContrib extends React.Component {
  renderTableRows(obj) {
    return obj.map(x => {
      return (
        <tr>
          <th> <a href={x.repoLink}> {x.repoName} </a> </th>
          <th> <a href={x.pullRequest}> {x.pullRequest} </a></th>
          <th> {x.status} </th>
        </tr>
      );
    })
  }
  render() {
    return (<div className="osContrib">
      <Table bordered>
        <thead>
          <tr>
            <th>Repository</th>
            <th>Pull Requests</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {this.renderTableRows(Constants.PRObject)}
        </tbody>
      </Table>
    </div>)
  }
}