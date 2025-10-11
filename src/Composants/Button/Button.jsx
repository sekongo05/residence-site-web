

let Button = ({nom,type,name})=>{
    return  <>
            <button type={type} name={name} className='border-2 rounded-[30px] w-[120px] h-[50px] bg-orange-400 hover:bg-orange-600 '>{nom} </button>
            </>
}



export default Button;