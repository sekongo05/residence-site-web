
import './container.css'
import Recherche from './Recherche';

let Container = ()=>{
    
 return <div className='border-2 flex flex-col justify-center items-center'>
            <div className='h-[calc(100vh-75px)] flex  justify-center items-center border-2   sm:justify-between sm:w-[80%]'>
                <div className='flex flex-col justify-center items-center  h-[80vh] texte  sm:w-[600px]'  >
                    <p className='text-[45px] text-center font-bold mr-[50px] ml-[50px]'>Decouvrez la residence de vos rêves</p>
                    <p className='text-center m-[50px]'> trouver une residence na jamais été un tel plaisir, naviguez au travers des meilleurs résidences du pays </p>
                    <div className='border-2 w-[90%] h-[70px] rounded-xl flex items-center justify-between '>
                        <Recherche />
                    </div>
                </div>
                <div className='image hidden  sm:rounded-r-full  sm:rounded-t-full sm:shadow-transparent sm:block sm:w-1/2 sm:border-2 sm:overflow-hidden sm:h-[80vh] '>
                   <img  src='Images\r2.jpg' className='object-cover'/>
                </div>
            </div>
        </div>
        
}
export default Container;