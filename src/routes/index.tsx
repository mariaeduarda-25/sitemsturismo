import {Switch, Route} from "react-router-dom"
import {home} from "pages"

const Routes = () => {
  return (
    <Switch>
        <Route path = "/" component = {home} />
    </Switch>
  )
}

export default Routes;