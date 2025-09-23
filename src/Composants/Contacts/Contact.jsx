import { useState } from 'react';
import './contact.css'
let Contact = ()=>{
    const [data, setData] = useState({
        name: '',
        email: '',
    });

    const change =(e) =>{
        const {name, value} = e.target
        setData(prev => ({
           ...prev,
           [name]: value 
        }))
    };

    const Submit = (e)=> {
        e.preventDefault();
        alert(`Nom : ${data.name}\nEmail : ${data.email}`)
    }

console.log(change.value)


    return <div className='h-[100vh] border-2 '>
                <p className='text-2xl font-bold  h-[100px] flex justify-center items-end ' >Envoyez nous un message</p>
                <div className='h-[calc(100vh-150px)] flex justify-center items-center' >

                <div className='border-4 rounded-[10px] w-[450px] h-[90%] border-orange-500 '>
                    <form action="" onSubmit={Submit} className=' gap-8 w-[450px] h-[100%] flex flex-col justify-center items-center'>
                        <InputField type='text' name='name' placeholder='Votre nom' />
                        <InputField type='email' name='email'placeholder='Votre '  />
                        <textarea placeholder='Votre message' className='w-[350px] h-[200px] border-2 pl-2 focus:outline-orange-400' ></textarea>
                        <button 
                        type='submit'
                        className='border-2 rounded-[30px] w-[120px] h-[50px] bg-orange-400 hover:bg-orange-600 '>Envoyer</button>
                    </form>
                </div>
                    
                </div>
            </div>
}

export default Contact;