import { Link } from "react-router-dom";
import * as S from "./styles"

const Nav = () => {
  return (
    <S.Nav>
      <h2> Tudo sobre o destino dos seus sonhos! </h2>
      <S.LoginReg>

       <Link to= "/register">Registrar</Link>
       <Link to= "/login">  Login</Link>
    
      </S.LoginReg>
   </S.Nav>
  )
}

export default Nav;
