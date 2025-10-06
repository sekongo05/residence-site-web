import { useEffect, useState } from "react"

let Resi = ()=>{
    const [residences, setResidences] = useState([]);

    useEffect(() => {
        const fetchResidences = async () =>{
            try{
                const response = await fetch('http://localhost:3001/residences')
                if(!response.ok){
                    throw new Error (`Erreur HTTP : ${response.status}`)
                }
                const data = await response.json();
                setResidences(data);

            }catch (error){
                console.log('Erreur API', error);
            }
        };
    
        fetchResidences();
    }, [] );


    return <>
            <h2>Residences disponibles </h2>
            {residences.map(res => (
                <div key={res.id}>
                    <h3>{res.nom}</h3>
                    <p>{res.prix} Fcfa</p>
                </div>
            ))}

            </>
}

export default Resi;