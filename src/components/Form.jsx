import emailjs from '@emailjs/browser'
import React, { useRef, useState, useEffect} from 'react'


const Form = () => {
   
   
    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        name:'',
        email:'',
        phone:'',
        date:'',
        time:''
    })

    
    const validate = (input) => {
      let errors = {};
    
      if (!input.name) {
        errors.name = 'El nombre es requerido';
      }
    
      if (!input.email) {
        errors.email = 'El correo electrónico es requerido';
      }
    
      if (!input.phone) {
        errors.phone = 'El teléfono es requerido';
      }
     
      if(!input.date){
        errors.date ='La fecha es requerida'
      }
      
      if(!input.time){
        errors.time ='El horario es requerido'
      }

      return errors;
    }
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setInput((prevInput) => ({
        ...prevInput,
        [name]: value,
      }));
    
      setErrors(validate({
        ...input,
        [e.target.name]: e.target.value
      }));
    
      console.log("inputs", input)
      console.log(errors)
    };
   
    useEffect(() => {
        setErrors(validate(input));
      }, [input]);


    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_mgmo3tr', 'template_d5pxgtj', form.current, 'okH9TV83CMCQOOakp')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      }

   

    return (
 <div className='sm:w-[50%] h-[80vh] font-maven py-4  px-4 sm:px-0 flex flex-col  sm:pr-52'>
              
        <div className='flex flex-col mb-6 font-nextsemi text-[25px]'>
             <h1>viví una experiencia única</h1>
             <h1> y gratuita</h1>
        </div>
        
        <p className='mb-6 xl:mb-12 text-[18px]'>Acercate a nuestras oficinas para recorrer tu futura casa con nuestos anteojos de realidad virtual.</p>




    <form ref={form} onSubmit={sendEmail} className='flex flex-col h-full xl:space-y-8 text-[18px]'>
              
              <div className='flex-col flex mb-3'>
                <span className='text-black mb-3'>Nombre</span>
                <input type='text' name='name'  className='border border-black h-[38px] p-2' onChange={handleChange}/>
                {errors.name && (<p style={{color:'red', fontSize:'10px'}}>{errors.name}</p>)}
              </div>
              

              <div className='flex-col flex mb-3'>
                <span className='text-black mb-3'>Email</span>
                <input type='text' name='email'  className='border border-black h-[38px] p-2' onChange={handleChange}/>
                 {errors.email && (<p style={{color:'red', fontSize:'10px'}}>{errors.email}</p>)}
              </div>
              

              <div className='flex-col flex mb-10'>
                <span className='text-black mb-3'>Telefono</span>
                <input type='text' name='phone'  className='border border-black h-[38px] p-2' onChange={handleChange}/>
                {errors.phone && (<p style={{color:'red', fontSize:'10px'}}>{errors.phone}</p>)}
              </div>
       
       
       
         <div className='flex flex-col '>
            
              <div className='flex flex-row justify-between' >
               
                 <div className='flex flex-col'> 
                    <p className='mb-2'>¿Qué día te gustaría asistir?</p>
                    <input className='border border-black' name='date' type='date' onChange={handleChange} />
                    {errors.date && (<p style={{color:'red', fontSize:'10px'}}>{errors.date}</p>)}
                 </div>
  
                 <div className='flex flex-col'> 
                     <p className='mb-2'>Hora de preferencia</p>
                     <input className='border border-black' name='time' type='time' onChange={handleChange} />
                     {errors.time && (<p style={{color:'red', fontSize:'10px'}}>{errors.time}</p>)}
                 </div>
              
              
              </div>
            
            <div className='w-full mt-4 flex justify-center font-nextsemi'>
                <button 
                 disabled={Object.keys(errors).length > 0} className={Object.keys(errors).length > 0 ? 
                'border w-44 border-white bg-gray-400 h-10 text-white' : 'border h-10 w-44 border-white bg-bgBlack text-white' }
                type='submit'> Enviar </button>
            </div>
       
         </div>
          
           
    </form>

</div>
    )
}

export default Form