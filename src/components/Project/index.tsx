import * as S from "./styles"
import imagem3 from "assets/img/image3.svg"
import imagem4 from "assets/img/image4.svg"
import imagem5 from "assets/img/image5.svg"
import { Link } from "react-router-dom"

const Project = () => {
  return (
    <S.Section>
       <div>
         <picture>  
          <img src={imagem3}alt="Campos do Jordão"/>
         </picture>
          <h2> Campos do Jordão - Brasil </h2>
       </div>
       <div>
         <picture> 
           <img src={imagem4} alt="Amsterdã"/>
        </picture>
         <h2> Amsterdã - Holanda </h2>
        </div>
        <div>
          <picture>
           <img src={imagem5} alt="Istambul"/>
         </picture>
           <h2> Istambul - Turquia   </h2>
         <Link to = "CJAmIs.html">Textos</Link>
         <Link to = "pag2.html">+indicações</Link>
         </div>
   </S.Section>
  )
}

export default Project;