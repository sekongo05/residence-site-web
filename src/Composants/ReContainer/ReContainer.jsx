
import Residence from '../Residence/Residence'
let ReContainer = ()=>{
    const residences=[
           {
                  'id': 1,
                  'img': 'Images/v1.jpg',
                  'nom': 'Résidence Nova',
                  'commune' : 'Plateau',
                  'prix': '150.000',
                  'description': 'La Résidence Nova allie design contemporain et confort absolu. Chaque appartement est équipé de la fibre optique, d’un mobilier épuré et d’une cuisine ouverte sur le salon. Idéale pour les professionnels en déplacement ou les couples en quête de modernité.'
            },
            {
                  'id': 2,
                  'img': 'Images/v4.jpg',
                  'nom': 'Résidence Assinie Bleu',
                  'commune' : 'Assinie',
                  'prix': '150.000',
                  'description': 'À quelques pas de la plage, la Résidence Assinie Bleu vous plonge dans une ambiance tropicale. Piscine privée, hamac sous les palmiers, chambres ventilées et vue sur l’océan : le luxe discret d’un séjour balnéaire.'
            },
            {
                  'id': 3,
                  'img': 'Images/v5.jpg',
                  'nom': 'Résidence Ébène',
                  'prix': '130.000',
                  'commune' : 'Cocody',
                  'description': 'Nichée dans un quartier calme de Cocody, la Résidence Ébène offre un cadre verdoyant et apaisant. Avec ses 3 chambres climatisées, son jardin privé et son mobilier en bois noble, elle séduit les amateurs de raffinement et de sérénité.'
            },
            {
                  'id': 4,
                  'img': 'Images/v3.jpg',
                  'nom': 'Résidence Connect',
                  'commune' : 'Cocody',
                  'prix': '110.000',
                  'description': 'Pensée pour les séjours professionnels, la Résidence Connect propose des studios fonctionnels avec espace de travail, Wi-Fi haut débit, service de conciergerie et accès rapide aux zones d’affaires. Un confort discret, une efficacité maximale'
            },
            

      ]
    


    return <>
            <div className='h-min w-[100%]  ' id='residence'>
                <div className='flex flex-col justify-center items-center  sm:items-start sm:pl-[35px]'>
                    <p className='h-[100px]'></p>
                    <p className='text-orange-500 font-semibold text-[35px]'>Meilleurs Choix</p>
                    <p className='text-[35px] font-bold'>Residences Populaires</p>
                </div>
                <div className=' h-min flex flex-col pt-[30px] pb-[10px]  w-[100%]  justify-center gap-10  items-center sm:pt-[100px]  sm:flex-row sm:h-[60vh] '>
                    {
                        residences.map((residence) =>( <Residence resi={residence} key={residence.id} />))
                    }
                </div>
            </div>

    
    
    
    
    
        </>
}



export default ReContainer;