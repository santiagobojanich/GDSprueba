
import './App.css';
import Slider from './components/Slider';
import image1 from './assets/slides/image1.jpg'
import image2 from './assets/slides/image2.jpg'
import image3 from './assets/slides/image3.jpg'
import Form from './components/Form';
import Head from './components/Head';



function App() {

const images = [
  image3,
  image2,
 image1
]



  
  
    return (
    <div className="App">
     
     <Head/>
      

     <div className='flex items-center sm:flex-row flex-col justify-center mt-4 '>
          
          <div className=' sm:w-[50%] sm:h-[80vh]  py-4 sm:px-16 px-8'>
           <Slider images={images} interval={4000}/>
          </div>
          <Form/>
    </div>  
        
   
    </div>
  );
}

export default App;
