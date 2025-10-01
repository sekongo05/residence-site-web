import { useState } from 'react';
import './contact.css'
import InputField from '../InputField/InputField';
import Submit from '../Submit/Submit';
let Contact = ()=>{
   



    return <div className='h-[100vh]' id='contact'>
                <p className='h-[100px]'></p>
                <p className='text-2xl font-bold  h-[50px] flex justify-center items-end ' >Envoyez nous un message</p>
                <div className='h-[calc(100vh-150px)] flex justify-center items-center' >

                <div className='border-4 rounded-[10px] w-[450px] h-[90%] border-orange-500 '>
                    <form action=""  className=' gap-8 w-[450px] h-[100%] flex flex-col justify-center items-center'>
                        <InputField type='text' name='name' placeholder='Votre nom' />
                        <InputField type='email' name='email'placeholder='Votre email'  />
                        <textarea placeholder='Votre message' className='w-[350px] h-[200px] border-2 pl-2 focus:outline-orange-400' ></textarea>
                        <Submit nom="Envoyer"/>
                    </form>
                </div>
                    
                </div>
            </div>
}

export default Contact;