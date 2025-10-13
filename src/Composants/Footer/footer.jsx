
import './footer.css'

let Footer = ()=>{


    return <div className='bg-black mt-[100px] w-full  h-[90px] flex flex-col  justify-center items-center  '>
                <div className='flex  w-[100%] justify-center items-center text-white'>
                    <div className='flex pl-[20px] sm:pl-[100px]  h-[50px] w-[80%] justify-center  items-center text-white gap-5 '>
                        <p><img src='Icons/facebook (1).png' className='w-[30px]' alt="Lien vers Facebook"/></p>
                        <p><img src='Icons/linkedin.png' className='w-[30px]' alt="Lien vers linkedin"/></p>
                        <p><img src='Icons/twitter (1).png' className='w-[30px]' alt="Lien vers twitter"/></p>
                        <p><img src='Icons/youtube.png' className='w-[30px]' alt="Lien vers youtube"/></p>
                    </div>
                <div className='w-[10%]  flex justify-center items-center  ' id='haut'>
                    <a href="#haut"><img src='Icons/up-arrow.png' className='w-[30px] cursor-pointer' alt="Aller vers le haut" /></a>
                </div>
                </div>
                <p className='text-white text-[10px]   sm:text-[18px]'>Copyright &copy; 2025 par Sekongo Moussa | Tous droits réservés.</p>
            </div>
}

export default Footer;