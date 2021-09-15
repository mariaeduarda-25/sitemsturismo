import {Switch, Route} from "react-router-dom"
import {Home,Textos,Indicacoes} from "pages"

const Routes = () => {
  return (
    <Switch>
        <Route path = "/" component = {Home} />
        <Route path = "/Textos" component = {Textos} />
        <Route path = "/indicacoes" component = {Indicacoes} />
    </Switch>
  )
}

export default Routes;