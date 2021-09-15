import * as S from "./styles"
import { Link } from "react-router-dom" 
import imagem6 from "assets/img/image6.svg" 
import imagem7 from "assets/img/image7.svg" 
import imagem8 from "assets/img/image8.svg" 

const Text = () => { 

    return ( 
      <S.Text> 
        <div>  
         <picture>    
           <img src={imagem6}alt="Machu Picchu"/>  
         </picture>  
         <h2> Machu Picchu - Peru </h2>  
        </div>  

        <div> 
         <picture>   
          <img src={imagem7} alt="Fernando de Noronha"/>  
         </picture>  
          <h2>Fernando de Noronha - Brasil </h2>  
        </div>  
  
       <div>  
         <picture>  
          <img src={imagem8} alt="Nova Iorque"/>  
          </picture>  
          <h2> Nova Iorque - EUA   </h2>  
          <Link to ="/Textos2">
             <h1> Textos2</h1>
             </Link>   
       </div>  
  
     </S.Text> 
  
    ) 
  
  } 

  export default Text;
  
   