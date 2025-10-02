import { useState } from 'react';
import './contact.css'
import InputField from '../InputField/InputField';
import Submit from '../Submit/Submit';
let Contact = ()=>{
   



    return <div className='h-[100vh]  ' id='contact' >
                <p className='h-[100px]'></p>
                <p className='text-2xl font-bold  h-[50px] flex justify-center items-end ' >Envoyez nous un message</p>
                <div className='h-[calc(100vh-150px)] flex justify-center items-center ' >
                    <div className='border-4 rounded-[10px] h-[90%] w-[80%] border-orange-500  sm:w-[450px] '>
                        <form action=""  className=' gap-7  h-[100%] w-[100%] flex flex-col justify-center items-center  sm:w-[450px]'>
                            <InputField type='text' name='name' placeholder='Votre nom' />
                            <InputField type='email' name='email'placeholder='Votre email'  />
                            <textarea placeholder='Votre message' className='sm:w-[350px] w-[80%] h-[200px] border-2 pl-2 focus:outline-orange-400' ></textarea>
                            <Submit nom="Envoyer"/>
                        </form>
                    </div>
                    
                </div>
            </div>
}

export default Contact;