import {Switch, Route} from "react-router-dom"
import {home,textos,indicacoes} from "pages"

const Routes = () => {
  return (
    <Switch>
        <Route path = "/" component = {home} />
        <Route path = "/textos" component = {textos} />
        <Route path = "/indicacoes" component = {indicacoes} />
    </Switch>
  )
}

export default Routes;