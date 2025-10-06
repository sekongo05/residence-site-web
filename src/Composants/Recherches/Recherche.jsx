import { useEffect, useState } from "react";


let Recherche = ({data})=>{
    const [search, setSearch]= useState('');

    /* fonction permettant de decomposé les mots grace a normalize puis de remplacer les accent en espace vide */
    const remvAccent = (mot)=>{
       
       return mot.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    const filtreData = data.filter(d => 
       remvAccent( d.commune).toLowerCase().includes(search.toLocaleLowerCase()) || d.prix.toString().includes(search)
    );
console.log(filtreData)
  
 

    return <div className=" flex flex-col justify-center items-center w-[400px] sm:w-[500px]">
                <input 
                type="text"
                name="recherche"
                value={search}
                placeholder="Rechercher résidence"
                /* l'événement qui se declenche lorsqu'on clique dans le input *setSearch * met a jour la valeur tapée dans le input */
                onChange={e => setSearch(e.target.value)}
                className='border-2 w-[300px] sm:w-[400px] h-[70px] pl-3 rounded-xl flex items-center justify-between focus:outline-orange-500 sm:focus:outline-orange-400'
                />
               
                   

                <ul className="mt-4   h-[100px] text-[12px] w-[80%] flex flex-col justify-start  overflow-y-auto  sm:text-[16px]">
                            {search !== "" ?(
                                filtreData.length >0 ?(

                                    filtreData.map((item) => (
                                        <li key={item.id}> 
                                            {item.nom} - <span className="text-orange-500"> {item.prix} Fcfa </span><span className="font-light">({item.commune})</span> 
                                        </li>
                                    ))): (
                                        <li>Aucune résidence trouvé </li>
                                )):(

                                        <li></li>
                                )
          
                            }
                            
                           
                </ul>
                    
                
               
            </div>
}

export default Recherche;