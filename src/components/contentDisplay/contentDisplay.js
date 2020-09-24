import React, { Component } from 'react'
import DisplayCard from '../displayCard/DisplayCard';
import { Card, DropdownButton, Dropdown } from 'react-bootstrap';

class ContentDisplay extends Component {
   onSelect = (a, e) => {
      this.props.filter(e.target.id);
   }

   render() {
     const { mailContent, selectedSate } = this.props;
     return (
        <div>
            <div>
                <Card data-testid="card" className="card-header-content">
                    <Card.Body>    
                        <div className="filer">
                            <DropdownButton id="dropdown-basic-button" title="Filter" onSelect={(a,e) => this.onSelect(a,e)}>
                                <Dropdown.Item id="unread">UNREAD</Dropdown.Item>
                                <Dropdown.Item id="flag">FLAGGED</Dropdown.Item>
                            </DropdownButton>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        {
            mailContent && mailContent[selectedSate] && mailContent[selectedSate].map((mail, index) => {
               return (
                    <DisplayCard key={index} note={mail} onClick={(id) => this.props.onCardClick(id)} onClickDelete={(id) => this.props.onClickDelete(id)} onClickFlag={(id) => this.props.onClickFlag(id)}></DisplayCard>
                );
            })
        }
        </div>
	 );
   }
 }

 export default ContentDisplay;