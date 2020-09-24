import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

class MailCard extends Component {
    render() {
        const { note, onClickDelete, onClick, onClickFlag } = this.props;
        return (
            <div>
                <Card data-testid="card" className="inbox-items">
                    <Card.Body>    
                        <div className="fav-icons">
                            <Button variant="outline-primary" onClick={() => onClickDelete(note.mId)}>Delete</Button>
                            <Button variant="outline-primary" onClick={() => onClickFlag(note.mId)}>Flag</Button>
                        </div>
                        <div className="card-content" onClick={() => onClick(note.mId)}>
                            <Card.Title>{note.mId}</Card.Title>
                            <Card.Title>{note.subject}</Card.Title>
                                <Card.Text style={ note.unread ? { fontWeight: 'bold' } : { fontWeight: 'normal' } } className="card-text text-truncate" dangerouslySetInnerHTML={{ __html: note.content }}>
                            </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default MailCard;
