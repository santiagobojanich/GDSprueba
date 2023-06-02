import logo from '../assets/Frame.svg'

const Head = () => {
 
 return (
 <div className='w-full bg-bgBlack text-white flex flex-row justify-center items-center pl-2 sm:pl-0 sm:text-[23px] py-6'>
           
  <div className='sm:w-12 sm:h-12 mr-6'>
    <img className='h-full w-full' src={logo} alt="Logo" />  
  </div>
  
  <div className='tracking-wide mt-1'>
    <span className='font-nextLigth'>construimos el espacio ideal</span>{" "} 
    <span className='font-nextsemi '>para vos y tu familia</span>
  </div>      

</div>

)
}


export default Head