import React from "react";
import { Table } from 'reactstrap';
import * as Constants from '../Constants';

export default class GitHubProjects extends React.Component {
  renderTableRows(obj) {
    return obj.map(x => {
      return (
        <tr>
          <td> {x.projectName} </td>
          <td> <a href={x.projectLink}> {x.projectLink} </a> </td>
          <td> {x.languages} </td>
        </tr>
      );
    })
  }

  render() {
    return (<div className="githubProjects">
      <Table bordered>
        <thead>
          <tr>
            <td>Name</td>
            <td>Link</td>
            <td>Programming Language</td>
          </tr>
        </thead>
        <tbody>
          {this.renderTableRows(Constants.GithubProjects)}
        </tbody>
      </Table>
    </div>)
  }
}