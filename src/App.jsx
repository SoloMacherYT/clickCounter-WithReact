

import React from 'react'


export default function App(){

const [count, setcount] = React.useState(0)
document.title ="Count: " +count

function increment(){
    setcount(c => c+1)
}
function decrement(){
    setcount(c =>c-1)
}
function save(){
    document.getElementById("pe").innerText +=` ${count} `
    setcount(0)
}

    return(<>
    <div className="container">
        <h1 id="count" style={{ color: count<0 ? "red" : count>0? "#12d325" : "black"}}>{count}</h1>
        <div class="content">
            <button id="add" onClick={increment}>Add ( + )</button>
            <button id="subtract" onClick={decrement}>Subtract ( - )</button>
        </div>
        <h3 id="pe">Previous Entries:</h3>
        <button id="save" onClick={save}><span>Save</span></button>
    </div>
    </>)
}