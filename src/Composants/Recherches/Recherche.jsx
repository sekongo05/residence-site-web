import { useEffect, useState } from "react";


let Recherche = ()=>{
/*    const [residence, setResidence] = useState([]);
   const [error, setError] = useState(null);
   const [recherche, setRecherche] = useState(true);



   useEffect(()=>{
       const fetchresidence = async ()=>{
        try{
            const res= await fetch ('https://api.open-meteo.com/v1/forecast?latitude=5.34&longitude=-4.03&current=temperature_2m');
            const data = await res.json();
            console.log(data)

            setResidence(data.current.temperature_2m);

        }catch(err){
            setError("Impossible")
        }finally{
            setRecherche(false)
        }
       };
       fetchresidence()

   }, []);
   if(recherche) return <p> Chargement de la residence... </p>
   if(error) return <p>{error}</p>

   const handlechange= (event) => {
        console.log(event.target.value);
    }; */

    return <div>
                <input 
                type="text"
                name="recherche"
                placeholder="Rechercher résidence"
                /* onChange={handlechange} */
                className='border-2 w-[400px] h-[70px] pl-3 rounded-xl flex items-center justify-between focus:outline-orange-400'
                />
          
                <ul className="mt-4">
                            <li className="text-gray-700"> 
                                <span className="font-semibold text-orange-400"></span>
                            </li>
                </ul>
               {/*  <h2>La météo d'abidjan est </h2>
                <p>{residence}°C</p> */}
            </div>
}

export default Recherche;