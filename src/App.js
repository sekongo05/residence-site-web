
import './App.css';
import {  Fragment, useEffect } from 'react';
import Header from './Composants/Header/header';
import Container from './Composants/Container/container';
import Footer from './Composants/Footer/footer'
import Reservation from './Composants/Reservations/Reservation';
import ReContainer from './Composants/ReContainer/ReContainer';
import Propos from './Composants/Apropos/propos';
import AOS from 'aos'
import 'aos/dist/aos.css';

let App = ()=>{

      useEffect(()=>{
            AOS.init({
                  duration: 1000,
                  once: false,
            })
      }, []);
      
      return ( <Fragment>
                  <Header/>
                  <Container/>
                  <ReContainer   />
                  <Propos />
                  <Reservation />
                  <Footer/>
            </Fragment>
      )
}

export default App