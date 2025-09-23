import './contact.css'
let Contact = ()=>{


    return <div className='h-[100vh] border-2 '>
                <p className='text-2xl font-bold  h-[100px] flex justify-center items-end ' >Envoyez nous un message</p>
                <div className='h-[calc(100vh-150px)] flex justify-center items-center' >

                <div className='border-4 rounded-[10px] w-[450px] h-[90%] border-orange-500 '>
                    <form action="" className=' gap-8 w-[450px] h-[100%] flex flex-col justify-center items-center'>
                        <input  type='texte' placeholder='Votre nom'    className='border-2 w-[350px] h-[50px] pl-2 focus:outline-orange-400' />
                        <input  type='email' placeholder='Votre email' className='border-2 w-[350px] h-[50px] pl-2 focus:outline-orange-400' />
                        <textarea placeholder='Votre message' className='w-[350px] h-[200px] border-2 pl-2 focus:outline-orange-400' ></textarea>
                        <button className='border-2 rounded-[30px] w-[120px] h-[50px] bg-orange-400 hover:bg-orange-600 '>Envoyer</button>
                    </form>
                </div>
                    
                </div>
            </div>
}

export default Contact;