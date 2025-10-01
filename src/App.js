
import './App.css';
import {  Fragment } from 'react';
import Header from './Composants/Header/header';
import Container from './Composants/Container/container';
import Footer from './Composants/Footer/footer'
import Contact from './Composants/Contacts/Contact';
import Residence from './Composants/Residence/Residence';

 

let App = ()=>{
      return ( <Fragment>
                  <Header/>
                  <p className='h-[70px]'></p>
                  <Container/>
                  <Residence />
                  <Contact />
                  <Footer/>
            </Fragment>
      )
}

export default App