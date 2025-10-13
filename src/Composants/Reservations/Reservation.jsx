import { useState } from 'react';
import './Reservation.css'
import InputField from '../InputField/InputField';
import Button from '../Button/Button';
let Reservation = ()=>{
   



    return <div className='h-min  ' id='reserv' >
                <p className='h-[100px]'></p>
                <p data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='text-2xl font-bold  text-[35px] text-orange-500   h-[100px] gap-2 w-full flex justify-center items-center ' > Reservez<span className='text-black'> maintenant </span> </p>
                <div className='h-min flex justify-center items-center p-2  -red-400 sm:hidden'  >
                    <div data-aos="fade-up"  data-aos-duration="1000"  className=' ct  rounded-[10px] h-[40%] w-[85%] shadow-[0_4px_20px_rgba(0,0,22,0.4)] sm:w-[450px] '>
                        <form action=""  className=' gap-7  h-min p-2 w-[100%] flex flex-col justify-center items-center  sm:w-[450px]'>
                           <div className='flex justify-between  w-[100%] ' > 
                                <label htmlFor="nom" className='w-[40%] flex text-orange-500  font-bold justify-start items-center'>Nom</label>
                                <InputField type='text' name='nom'  id='nom' placeholder='Votre nom'/>
                           </div>
                           <div className='flex justify-between  w-[100%]'>
                                <label htmlFor="pre" className='w-[40%] flex text-orange-500  font-bold  justify-start items-center'>Prenom</label>
                                <InputField type='text' name='prenom'  id='pre' placeholder='Votre prenom'/>
                           </div>
                           <div className='flex justify-between  w-[100%]'>
                                <label htmlFor="mail" className='w-[40%] flex text-orange-500  font-bold justify-start items-center' > Email</label>
                                <InputField type='email' name='email' id='mail'  placeholder=' votre mail'/>
                           </div>
                           <div className='flex justify-between w-[100%]'>
                                <label htmlFor="choix" className='w-[40%] flex font-bold  text-orange-500 justify-start items-center' >Résidence</label>
                                <select id='choix' className='shadow-[0_2px_5px_rgba(0,0,12,0.4)] w-[70%]  h-[35px] pl-2 focus:shadow-orange-500 focus:outline-none'>
                                    <option value=""></option>
                                    <option>Residence Nova</option>
                                    <option>Résidence Assinie Bleu</option>
                                    <option>Résidence Yop Sunset</option>
                                </select>
                           </div>

                           
                           <div className='flex justify-between  w-[100%]'>
                                <label htmlFor="deb" className='w-[40%] flex  font-bold text-orange-500  justify-start items-center'> Date début </label>
                                <InputField type='date' name='debut' id='deb'/>
                           </div>
                           <div className='flex justify-between  w-[100%]'>
                                <label htmlFor="end" className='w-[40%] flex  font-bold text-orange-500  justify-start items-center'> Date fin </label>
                                <InputField type='date' name='fin' id='end'/>
                           </div>
                           <div>
                            <p className='font-bold justify-center items-center text-center'>{/* Vous allez devoir payer 50.000f pour les 2 jours */}</p>
                           </div>
                            <div className='flex  justify-between items-center  w-[70%]'>
                            <Button type='reset' name='annuler' nom="Annuler"/>
                            <Button type='submit' name='valider' nom="Reserver"/>
                            </div>
                        </form>
                    </div>
                    
                </div>
                <div className=' hidden  h-screen sm:flex justify-center items-start p-2  -red-400 '  >

                    <div data-aos="fade-up"  data-aos-duration="1000"  className='   rounded-[10px] h-[85%] shadow-[0_4px_20px_rgba(0,0,22,0.4)] w-min '>
                        <form action=""  className=' gap-8  h-full p-5 flex flex-col justify-center items-center '>
                            
                            <div className='flex -4 -green-600 w-[1000px] justify-center gap-20 items-center'>
                                <div className='flex     w-[45%]'>
                                    <label htmlFor="nom" className='w-[30%] flex text-orange-500  font-bold justify-start items-center' > Nom</label>
                                    <InputField type='text' name='nom' id='nom'  placeholder=' votre nom'/>
                                </div>
                                <div className='flex justify-between  w-[45%]'>
                                    <label htmlFor="choix" className='w-[30%] text-orange-500  flex font-bold justify-start items-center' >Résidence</label>
                                    <select id='choix' className='shadow-[0_2px_5px_rgba(0,0,12,0.4)] w-[70%]  h-[50px] pl-2 focus:shadow-orange-500 focus:outline-none'>
                                        <option value=""></option>
                                        <option>Residence Nova</option>
                                        <option>Résidence Assinie Bleu</option>
                                        <option>Résidence Yop Sunset</option>
                                    </select>                                  
                                </div>
                            </div>
                            <div className='flex  -4 -pink-700 w-[1000px] justify-between items-center'>
                                <div className='flex justify-between    w-[45%]'>
                                    <label htmlFor="prenom" className='w-[30%]  text-orange-500  flex font-bold   justify-start items-center' > Prenom</label>
                                    <InputField type='text' name='' id='prenom'  placeholder=' votre prenom'/>
                                </div>
                                <div className='flex justify-between  w-[45%]'>
                                    <label htmlFor="deb" className='w-[30%] flex font-bold text-orange-500  justify-start items-center'> Date début </label>
                                    <InputField type='date' name='debut' id='deb'/>
                                </div>
                            </div>
                            <div className='flex -4 -red-800 w-[1000px] justify-between items-center'>
                                 <div className='flex justify-between  w-[45%]'>  
                                    <label htmlFor="mail" className='w-[30%] flex font-bold text-orange-500  justify-start items-center' > Email</label>
                                    <InputField type='email' name='email' id='mail'  placeholder=' votre mail'/>
                                </div>
                                <div className='flex justify-between  w-[45%]'>
                                    <label htmlFor="end" className='w-[30%] flex font-bold text-orange-500  justify-start items-center'> Date fin </label>
                                    <InputField type='date' name='fin' id='end'/>
                                </div>
                            </div>
                            <div className='flex w-full flex-col justify-center items-center -4 gap-10 -black h-[200px]'>           
                                    <p className='font-bold justify-center items-center text-center'>{/* Vous allez devoir payer 50.000f pour les 2 jours */}</p>   
                                    <div className='flex  justify-between items-center  w-[50%]'>
                                    <Button type='reset' name='annuler' nom="Annuler"/>
                                    <Button type='submit' name='valider' nom="Reserver"/>
                                    </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
}

export default Reservation;