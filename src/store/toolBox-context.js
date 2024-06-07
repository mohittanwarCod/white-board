import { createContext } from "react";
import React from 'react'

const toolBoxContext = createContext({
    toolboxState:{},
    changeStroke: ()=>{},
    cchangeFill:()=>{}, 
    changeSize:()=>{},
}) 

export default toolBoxContext;