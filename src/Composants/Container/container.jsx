
import './container.css'
import Recherche from './Recherche';

let Container = ()=>{
    
 return <div className=' flex flex-col justify-center items-center z-0' id='acceuil'>
            <p className='h-[100px]'></p>
            <div className='h-[calc(100vh-75px)] flex  justify-center items-center  flex-col  sm:justify-between sm:w-[80%] sm:flex-row'>
                <div className='flex flex-col justify-center items-center  h-[80vh] texte  sm:w-[600px]'  >
                    <p className='text-[45px] text-center font-bold mr-[50px] ml-[50px]'>Decouvrez la residence de vos rêves</p>
                    <p className='text-center m-[50px]'> trouver une residence na jamais été un tel plaisir, naviguez au travers des meilleurs résidences du pays </p>
                        <Recherche />
                </div>
                <div className='image flex border-2 rounded-l-full rounded-t-full  overflow-hidden h-[90vh]
                 sm:shadow-transparent sm:block sm:w-1/2 sm:border-2 sm:overflow-hidden sm:h-[80vh] '>
                   <img  src='Images\r2.jpg' className='object-cover'/>
                </div>
            </div>
        </div>
        
}
export default Container;