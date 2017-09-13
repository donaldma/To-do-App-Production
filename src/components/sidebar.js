import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SideBar extends Component {

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">Users</div>
        <ul className="list-group">
          {this.props.renderUsers()}
        </ul>
      </div>
    );
  }
}