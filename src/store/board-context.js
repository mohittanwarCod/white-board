import { createContext } from "react";

const boardContext = createContext({
    activeToolItem:"",
    toolActionType:"",
    elements:[],
    history:[[]],
    changeToolHandler:()=>{},
    boardMouseDownHandler:()=>{},
    boardMouseMoveHandler:()=>{},
    boardMouseUpHandler:()=>{},
    textAreaBlurHandler:()=>{},
    boardUndoHandler:()=>{},
    boardRedoHandler:()=>{},
    

    


})

export default boardContext;