import React from "react"
import { Routes, Route } from 'react-router-dom'
import { Home } from "../pages/Home"
import { Items } from "../pages/Items"
import { Login } from "../pages/Login"
import { Events } from "../pages/Events"
import { Notices } from "../pages/Notices"
import { Participants } from "../pages/Participants"

export const RoutesComponents: React.FC = () => {

  return (
    <Routes>
      <Route element={<Login />} path="/" caseSensitive />
      <Route element={<Home />} path="/inicio" />
      <Route element={<Events />} path="/eventos" />
      <Route element={<Items />} path="/produtos" />
      <Route element={<Notices />} path="/avisos" />
      <Route element={<Participants />} path="/participantes" />
    </Routes>
  )
}