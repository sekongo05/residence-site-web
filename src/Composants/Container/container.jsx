
import './container.css'
import Recherche from '../Recherches/Recherche';

let Container = ()=>{
    
 return <div className=' flex flex-col justify-center  items-center z-0' id='acceuil' >
            <p className=' h-[50px] sm:h-[100px]' id='haut'></p>
            <div className='h-min flex    justify-center items-center  flex-col  sm:justify-between sm:w-[80%] sm:flex-row'>
                <div className='flex flex-col justify-center items-center  h-[80vh] texte  sm:w-[600px]'  >
                    <p className='text-[45px] text-center font-bold mr-[50px] ml-[50px]'>Decouvrez la residence de vos rêves</p>
                    <p className='text-center m-[50px]'> trouver une residence na jamais été un tel plaisir, naviguez au travers des meilleurs résidences du pays </p>
                        <Recherche />
                </div>
                <div className='image flex  mb-[20px] rounded-[50%_50%_0_0] w-[350px] h-[300px]  overflow-hidden
                 sm:shadow-transparent sm:rounded-t-full sm:rounded-l-full sm:block sm:w-1/2 sm:overflow-hidden sm:h-[80vh] '>
                   <img  src='Images\r2.jpg' className='object-cover w-[100%] h-[100%]'/>
                </div>
            </div>
        </div>
        
}
export default Container;