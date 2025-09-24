
import './header.css'
import {  Fragment } from 'react';



let Header1 = ()=>{
    return <Fragment>
                <div className='flex justify-between border-2 pr-[50px] w-full z-50 pl-[50px] items-center h-[70px] fixed bg-orange-100'>
                        <div className='font-extrabold text-[25px] text-orange-400 flex justify-center' >< img src='Icons/home.png' className='w-[30px] h-[30px]'/> Johnny <span className='text-black font-extrabold text-[25px]'>House</span></div>
                        <ul className='hidden     sm:flex sm:gap-[15px]' >
                            <li><a href='#acceuil'>Acceuil</a></li>
                            <li><a href='#residence'>Résidences</a></li>
                            <li><a href='#contact'>Contacts</a></li>
                            <li><a href='#louer'>Louer</a></li>
                        </ul>
                        <img src='Icons/menu.png'  className='w-50[25px] h-[25px] cursor-pointer        sm:hidden'/>
                  
                </div>
            </Fragment>
}




export default Header1