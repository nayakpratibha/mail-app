import React, { Component } from 'react'
import { Card } from 'react-bootstrap';

class MailBox extends Component {
    render() {
        return (
            <div>
                <Card data-testid="mail-card" className="mail-box">
                    <Card.Body>    
                        <Card.Title>{this.props.note.mId}</Card.Title>
                        <Card.Title>{this.props.note.subject}</Card.Title>
                        <Card.Text className="card-text">
                        {this.props.note.content}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default MailBox;
