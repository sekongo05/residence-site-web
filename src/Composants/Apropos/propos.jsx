let Propos = ()=>{


    return <>
            <div id="propos" className="h-min w-full flex flex-col  sm:flex sm:flex-row sm:mt-[100px]" >
                <div className="w-[100%]  h-[80vh] flex justify-center items-center flex-col sm:w-1/2 ">
                    <p className="text-orange-500 mt-[30px]   text-center font-bold text-[35px]  h-[100px] w-[400px] sm:mt-[40px]  "> À Propos <span className="text-black"> de Nous </span> </p>
                    <p className=" flex text-center items-center w-[90%]  h-[400px]  sm:h-[500px] sm:w-[80%] sm:text-[20px] sm:hover:scale-110 duration-300 ease-in">
                        Chez Johnny House, nous réinventons la recherche de résidences en Côte d’Ivoire. Notre plateforme vous propose une sélection raffinée de logements alliant confort, design et localisation idéale — du bord de mer d’Assinie aux quartiers paisibles de Cocody.
                        Pensée pour une navigation fluide et agréable, notre interface vous permet de filtrer, comparer et découvrir chaque résidence comme si vous y étiez. Derrière chaque fiche se cache une attention particulière portée à l’esthétique, à la clarté des informations et à l’expérience mobile.
                        Que vous soyez en déplacement professionnel, en quête d’un week-end balnéaire ou à la recherche de votre futur chez-vous, Johnny House vous accompagne avec élégance et simplicité.
                        Bienvenue dans un univers où chaque détail compte.
                    </p>
                </div>  
                <div className="w-[100%] h-[50vh] flex  justify-center items-center  sm:h-[80vh] sm:w-1/2">
                    <div className=" h-[350px] w-[90%]  rounded-br-[180px] rounded-tl-[180px]  overflow-hidden   sm:h-[500px] sm:w-[70%] sm:hover:scale-110 duration-300 ease-in" > 
                        <img src="Images/a.jpg" alt="image d'illustration"  className="object-cover w-[100%] h-[100%]" />
                       
                    </div>
                </div>
    
            </div>
            </>
}


export default Propos;