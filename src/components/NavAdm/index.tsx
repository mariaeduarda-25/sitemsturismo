import { Link } from "react-router-dom";
import * as S from "./styles"

const NavAdm = () => {
  return (
    <S.Nav>
      <h2> Tudo sobre o destino dos seus sonhos! </h2>
      <S.LoginReg>

       <Link to= "/projeto"> Projeto</Link>
       <Link to= "/logout"> Sair</Link>
    
      </S.LoginReg>
   </S.Nav>
  )
}

export default NavAdm;
