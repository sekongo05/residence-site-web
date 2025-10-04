
import './App.css';
import {  Fragment } from 'react';
import Header from './Composants/Header/header';
import Container from './Composants/Container/container';
import Footer from './Composants/Footer/footer'
import Contact from './Composants/Contacts/Contact';
import ReContainer from './Composants/ReContainer/ReContainer';
import Propos from './Composants/Apropos/propos';

 

let App = ()=>{
      
      return ( <Fragment>
                  <Header/>
                  <Container/>
                  <ReContainer   />
                  <Propos />
                  <Contact />
                  <Footer/>
            </Fragment>
      )
}

export default App