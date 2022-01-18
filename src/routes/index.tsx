import {Switch, Route} from "react-router-dom"
import {Home,Textos,Indicacoes,Textos2, Register,Login, AdmProject} from "pages"
import { PrivateRoute } from "./PrivateRoutes"

const Routes = () => {
  return (
    <Switch>
        <PrivateRoute path = "/adm" exact component = {AdmProject} />
        <Route path = "/Login" component = {Login} />
        <Route path = "/Register" component = {Register} />
        <Route path = "/Textos" component = {Textos} />
        <Route path = "/Indicacoes" component = {Indicacoes} />
        <Route path = "/Textos2" component = {Textos2} />
        <Route path = "/" component = {Home} />
    </Switch>
  )
}

export default Routes;