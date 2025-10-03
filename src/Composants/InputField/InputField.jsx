let InputField = ({type, name, placeholder})=>{
    return <input              
        type={type}
        placeholder={placeholder}
        name={name}
        className=' shadow-[0_2px_5px_rgba(0,0,12,0.4)] w-[80%] sm:w-[350px] h-[50px] pl-2 focus:outline-orange-400 sm:focus:outline-orange-500'
        required
    />
    
}


export default InputField;