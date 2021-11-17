import React from "react"
import { Route, Switch } from 'react-router-dom'
import { Home } from "../pages/Home"
import { Items } from "../pages/Items"
import { Login } from "../pages/Login"
import { Events } from "../pages/Events"
import { Notices } from "../pages/Notices"
import { Participants } from "../pages/Participants"

export const Routes: React.FC = () => {

  return (
    <Switch>
      <Route component={Login} path="/" exact />
      <Route component={Home} path="/inicio" />
      <Route component={Events} path="/eventos" />
      <Route component={Items} path="/produtos" />
      <Route component={Notices} path="/avisos" />
      <Route component={Participants} path="/participantes" />
    </Switch>
  )
}