import React, { useState, useEffect } from "react";
import './App.css';
import logo from './microsoft-outlook.png';
import { Row } from 'react-bootstrap';
import Header from '../src/components/header/Header';
import SideBar from '../src/components/sidebar/SideBar';
import ContentDisplay from '../src/components/contentDisplay/contentDisplay';
import MailBox from '../src/components/mailbox/MailBox';

function App() {

  const [hasError, setErrors] = useState(false);
  const [mailContent, setContent] = useState({});
  const [mailBoxContent, setMailBoxContent] = useState({});
  const [selectedSate, setSelectedState] = useState('inbox');
  const [inboxCount, setInboxCount] =  useState(0);
  const [flagItems, setFlagItems] =  useState([]);
  const [initialState, setInitialState] =  useState([]);

  async function fetchData() {
    const res = await fetch("http://localhost:8080/home");
    res
      .json()
      .then(res => { 
        console.log(res); 
        setContent(res);
        setInboxCount(res['inbox'].length)})
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (hasError) {
    return <span>Has error: {JSON.stringify(hasError)}</span>
  }
  function resetMailContent(eventKey) {
      setMailBoxContent({});
      setSelectedState(eventKey);
      let result = {...mailContent};
      result[selectedSate] = initialState;
      setContent(result);
  }

  function cardClick(id) {
    const mailItem = mailContent[selectedSate].find(x => x.mId === id); 
     setMailBoxContent(mailItem);
     mailItem.unread=false;
     const index = mailContent[selectedSate].findIndex(item => item.mId === id);
     mailContent[selectedSate].splice(index,1,mailItem);
     setContent(mailContent);
  }

  function clickDelete(id) {
      let result = {...mailContent};
      const index = result[selectedSate].findIndex(item => item.mId === id);
      const deletedArr = result[selectedSate].splice(index,1);
      result.deleted.push(...deletedArr);
        console.log(result);
        setContent(result);
        setInboxCount(result['inbox'].length);
  }

   function clickFlag (id) {
      let result = {...mailContent};
      const obj = result[selectedSate].find(item => {
           const falggedVal = flagItems.find(flagItem => flagItem.mId === id);
           if (!falggedVal) {
               return item.mId === id;
		   }
           return null;
       });
      setFlagItems(obj ? [...flagItems,obj] : flagItems);
  }

  function clickFilter(id) {
      let result = {...mailContent};
      if (id === "unread") {
          result[selectedSate] = mailContent[selectedSate].filter(item => item.unread === true);
	  } else if (id === "flag") {
          result[selectedSate] = flagItems;
	  }
      setInitialState(mailContent[selectedSate]);
      setContent(result);
  }

  return (
   <React.Fragment>
    <Row className="row-header">
          <Header logo={logo}></Header>
     </Row >
     <div className="flex-column">
        <div className="row">
            <div className="column" id="sidebar-wrapper">
               <SideBar count={inboxCount} handleSelect={resetMailContent} />
            </div>
            <div className="column" id="page-content-wrapper">
              <ContentDisplay mailContent = {mailContent} selectedSate={selectedSate} onCardClick={cardClick} onClickDelete={clickDelete} filter={clickFilter} onClickFlag={clickFlag} />
            </div>
            <div className="column" id="mail-content-wrapper">
              <MailBox note={mailBoxContent}/>
            </div>
        </div>
       </div>
    </React.Fragment>
  );
}

export default App;
