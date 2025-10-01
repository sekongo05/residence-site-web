
import './header.css'
import {  Fragment, useState } from 'react';



let Header1 = ()=>{

    const [menuOpen , setMenuOpen] = useState(false);


    return <Fragment>
                <div className='flex justify-between pr-[50px] w-full z-50 pl-[50px] items-center h-[70px] fixed bg-orange-100'>
                        <div className='font-extrabold text-[25px] text-orange-400 flex justify-center' >< img src='Icons/home.png' className='w-[30px] h-[30px]'/> Johnny <span className='text-black font-extrabold text-[25px]'>House</span></div>
                        <ul className='hidden  sm:flex sm:gap-[15px]' >
                            <li><a href='#acceuil'>Acceuil</a></li>
                            <li><a href='#residence'>Résidences</a></li>
                            <li><a href='#contact'>Contacts</a></li>
                            <li><a href='#louer'>Louer</a></li>
                        </ul>
                        <img  src='Icons/menu.png'
                              alt='icon du menu'  
                              onClick={()=> setMenuOpen(!menuOpen)}
                                className='w-[25px] h-[25px] cursor-pointer  sm:hidden'/>
                </div>
                {/* si menuOpen est true alors la div apparaît  */}
                {menuOpen && (

                <div className='affiche overflow-hidden  flex mt-[70px] 
                w-[100%] items-center h-[300px]  text-white justify-center z-40 fixed sm:hidden border-orange-950'>
                    <ul className='flex flex-col  gap-[10px]  w-[200px] h-[200px] text-[25px] items-center justify-center' >
                        {/* fermeture du menu a chaque clique sur un lien */}
                            <li><a href='#acceuil' onClick={()=> setMenuOpen(false)}>Acceuil</a></li>
                            <li><a href='#residence' onClick={()=> setMenuOpen(false)}>Résidences</a></li>
                            <li><a href='#contact' onClick={()=> setMenuOpen(false)}>Contacts</a></li>
                            <li><a href='#louer' onClick={()=> setMenuOpen(false)}>Louer</a></li>
                        </ul>
                </div>
                )}
            </Fragment>
}




export default Header1