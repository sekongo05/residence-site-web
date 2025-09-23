let InputField = ({type, name, placeholder})=>{

    <input              
        type={type}
        placeholder={placeholder}
        name={name}
        className='border-2 w-[350px] h-[50px] pl-2 focus:outline-orange-400'
        required
    />
}


export default InputField;