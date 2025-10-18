let InputField = ({type, name, placeholder})=>{
    return <input              
        type={type}
        placeholder={placeholder}
       
        className=' shadow-[0_2px_5px_rgba(0,0,12,0.4)] w-[70%]  h-[35px] pl-2  sm:h-[50px] sm:w-[70%] focus:shadow-orange-500 focus:outline-none'
        required
    />
    
}


export default InputField;