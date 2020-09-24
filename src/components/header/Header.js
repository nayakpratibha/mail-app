import React, { Component } from "react";
import { Navbar, FormControl } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar className="nav-header" fixed="top">
            <Navbar.Brand>
                <img alt="" src={this.props.logo} width="30" height="30" className="d-inline-block align-top"/>{' '}
                <span className="heading">Outlook Mail</span>
            </Navbar.Brand>
        </Navbar>
        <Navbar className="nav-subhheader">
            <Navbar.Brand>
                <FormControl type="text" placeholder="Search Mail and People" className="mr-sm-4 search" />
            </Navbar.Brand>
        </Navbar>
      </React.Fragment>
    );
  }
}
 
export default Header;