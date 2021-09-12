import * as S from "./styles"
import imagem1 from "assets/img/image1.svg"

const Footer = () => {
    return (
       <S.Footer>
         <picture>
           <img src={imagem1} alt="Logoinsta"/>
         </picture>
         <h2>@msturismo</h2>
         <div>&copy;CopyLeft</div>
       </S.Footer>
    )
}

export default Footer;