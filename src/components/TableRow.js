import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class TableRow extends Component {
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.name}
          </td>
          <td>
            {this.props.obj.username}
          </td>
          <td>
            {this.props.obj.email}
          </td>
          <td>
            {this.props.obj.address.street}
          </td>
          <td>
           <Link to={"/edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
           <Link to={"/edit/"+this.props.obj.id} className="btn btn-danger">Delete</Link>
          </td>
        </tr>
    );
  }
}

export default TableRow;
