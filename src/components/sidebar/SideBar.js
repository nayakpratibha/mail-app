import React, { Component } from "react";
import { Nav } from "react-bootstrap";

class SideBar extends Component {
  render() {
    const { count } = this.props;
    return (
        <React.Fragment>
            <Nav className="col-md-12 d-none d-md-block bg-light sidebar" activeKey="inbox" onSelect={(eventKey) => this.props.handleSelect(eventKey)}>
                <div className="sidebar-sticky"></div>
                    <Nav.Item>
                        <Nav.Link eventKey="inbox">Inbox</Nav.Link>
                        <span className="badge badge-pill badge-dark small font-weight-light ml-1" title="inbox">{count}</span>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="spam">Spam</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="deleted">Deleted Items</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="custom">Custom Folder</Nav.Link>
                </Nav.Item>
           </Nav>
        </React.Fragment>
        );
    }
  }

export default SideBar;