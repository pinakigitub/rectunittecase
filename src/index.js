import React,{useState, useEffect} from 'react'
import {render} from 'react-dom';
import {AntTable} from "./components/antTable";

function App() {
  return (
    <div>
      
      <div>
       <AntTable></AntTable>
      </div>
    </div>
  )
}

render(<App />, document.getElementById('root'))
