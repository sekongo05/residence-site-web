
import './App.css';
import {  Fragment } from 'react';
import Header1 from './Composants/Header/header_1';
import Container from './Composants/Container/container';
import Footer from './Composants/Footer/footer'
import Contact from './Composants/Contacts/Contact';

 

let App = ()=>{
      return ( <Fragment>
                  <Header1/>
                  
                  <Container/>
                  <Contact />
                  <Footer/>
            </Fragment>
      )
}

export default App