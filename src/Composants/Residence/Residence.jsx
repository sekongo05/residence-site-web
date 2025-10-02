let Residence = ({resi})=>{
        
        const { nom,img, prix, description} = resi;
        console.log("les resi sont ", resi)

    return <>
    
            <div className="   w-[80%] h-[450px] flex justify-between flex-col  sm:w-[300px] " >
                <div  className="h-[300px] w-[100%] shadow-xl/30   rounded-t-[20px] rounded-b-[20px] flex justify-center items-center overflow-hidden sm:hover:scale-90  sm:w-[300px]">
                    <img src={img} alt={nom} className="object-cover shadow-lg w-full h-auto"/>
                </div>
                <div className="  flex   h-[150px] flex-col justify-center items-center ">
                    <p className="text-[25px] font-bold">{nom}</p>
                    <p className="text-[20px] text-orange-500 font-bold">{prix} Fcfa | 24H</p>
                    <p className=" text-[10px]  w-[300px] sm:w-[250px] text-center ">{description}</p>
                </div>
                
            </div>
    
    
            </>
}


export default Residence;