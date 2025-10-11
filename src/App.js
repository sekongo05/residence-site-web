import {   Routes, Route } from 'react-router-dom';
import './App.css';
import {  Fragment, useEffect } from 'react';
import Header from './Composants/Header/header';
import Acceuil from './Composants/Acceuil/Acceuil';
import Footer from './Composants/Footer/footer'
import MesReservations from './Pages/MesReservations/MesReservations';
import Reservations from './Composants/Reservations/Reservation';
import ReContainer from './Composants/ReContainer/ReContainer';
import Propos from './Composants/Apropos/propos';
import AOS from 'aos'

import 'aos/dist/aos.css';
import Reservation from './Composants/Reservations/Reservation';

let App = ()=>{

      useEffect(()=>{
            AOS.init({
                  duration: 1000,
                  once: false,
            })
      }, []);
      
      return  <>
           
                  <Header/>
                  <Acceuil/>
                  <ReContainer/>
                  <Propos />
                  <Reservations />
                  <Routes>
                        <Route path="/reservation"  element={<MesReservations/>}/>         
                  </Routes>
                  <Footer/>
           
           
             </>
      
}

export default App