import React from "react"
import ReactDOM from "react-dom"
import Home from "./components/Home"
import NotFound from "./components/NotFound"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import init from "./registerServiceWorker"
import "./style.scss"

init()
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById("app"))
