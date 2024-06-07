import React from "react";
import Board from "./components/Board/index";
import ToolBar from "./components/ToolBar";
import BoardProvider from "./store/BoardProvider";
import ToolBoxProvider from "./store/ToolBoxProvider";
import Toolbox from "./components/Toolbox";

function App() {
  return (
    <>
    
       <BoardProvider>
       <ToolBoxProvider>
        <ToolBar/>  
        <Board />
        <Toolbox />
        </ToolBoxProvider>
       </BoardProvider>
 

   
    </>
   
  );
}

export default App;
