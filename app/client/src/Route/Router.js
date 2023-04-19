import React from 'react'
import { Routes, Route } from "react-router-dom";
import {ResponeChat , FormChatBot , Index} from '../Route/index'

const Router = () => {
    return (
    <Routes>
        <Route  path="/" element={<Index/>}/>
        <Route  path="/planningtrip" element={<ResponeChat/>}/>
        <Route path="*" element={(()=> <h1>Page NOT FOUND - 404 :( </h1>) ()}></Route> 
    </Routes>
    )
}
export default Router