import { Table, Row, Col } from 'reactstrap';
import React from "react";
import * as Constants from '../Constants';
export default class ProfileDetails extends React.Component {
  render() {
    return (<Table borderless>
      <tbody>
        <tr>
          <td>Call</td>
          <td>{Constants.PhoneNumber}</td>
        </tr>
        <tr>
          <td>Mail</td>
          <td>{Constants.EmailAddress}</td>
        </tr>
        <tr>
          <td>Home</td>
          <td>{Constants.Home}</td>
        </tr>
      </tbody>
    </Table>)
  }
}