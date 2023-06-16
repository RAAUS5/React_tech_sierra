import React from 'react'
import {BrowserRouter as Browser , Routes,Route} from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export const Navmenu = () => {
  return (
    <ul>
        <NavLink to={"/"} className={({isActive})=>(isActive ? "actives":"inactive")}><li>Home </li></NavLink>
       <NavLink to={"/Stopwatch"} className={({isActive})=>(isActive ? "actives":"inactive")}><li>Stopwatch </li></NavLink>
       <NavLink to={"/Textarea"} className={({isActive})=>(isActive ? "actives":"inactive")}><li> Teaxt Area </li></NavLink>
       {/* <NavLink to={"/User/1234"} className={({isActive})=>(isActive ? "actives":"inactive")}><li> User </li></NavLink> */}
       <NavLink to={"/movie"} className={({isActive})=>(isActive ? "actives":"inactive")}><li> Foods </li></NavLink>
       <NavLink to={"/Products"} className={({isActive})=>(isActive ? "actives":"inactive")}><li> Products </li></NavLink>
    </ul>
  )
}
