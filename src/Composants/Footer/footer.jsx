import { Component } from 'react';
import './footer.css'

let Footer = ()=>{


    return <div className='bg-black rounded-t-full h-[100px] flex flex-col justify-center items-center'>
                <div className='flex  h-[50px] w-[100%] justify-center items-center text-white gap-5'>
                    <p><img src='Icons/facebook (1).png' className='w-[30px]'/></p>
                    <p><img src='Icons/linkedin.png' className='w-[30px]'/></p>
                    <p><img src='Icons/twitter (1).png' className='w-[30px]'/></p>
                    <p><img src='Icons/youtube.png' className='w-[30px]'/></p>
                </div>
                <p className='text-white text-[10px]   sm:text-[18px]'>Copyright &copy; 2025 par Sekongo Moussa | Tout droits reservés.</p>
            </div>
}

export default Footer