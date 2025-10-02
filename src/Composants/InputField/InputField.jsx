let InputField = ({type, name, placeholder})=>{
    return <input              
        type={type}
        placeholder={placeholder}
        name={name}
        className='border-2 w-[80%] sm:w-[350px] h-[50px] pl-2 focus:outline-orange-400'
        required
    />
    
}


export default InputField;