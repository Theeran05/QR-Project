import React, { useState } from 'react'
// import './Self.css'


export const Myname = () => {
  
  const [names, listname] = useState("Theeran")
  const [count, countList] = useState(0)

  const login = true
  const greeting = login ? <p>Welcome</p> : <p>Please Login</p>

  const find = () => {
    const name = ["Theeran", "Balaji", "Jai", "Harish", "Logi", "Renukesver"];
    const num = Math.floor(Math.random() * (name.length))
    listname(name[num])
    // console.log(name.length)
  }
  
  return (
    <>
      <h1>My name is {names}</h1>
      <h1 style={{
        color: "#000",
        fontSize: "50px"
      }}>{greeting}</h1>
      <button onClick={find}>Click</button>

      <h1>{count}</h1>
      <button className='add' onClick={() => {
        countList(count + 1)
      }}>Add</button>
      <button className='sub' onClick={() => {
        countList(count - 1)
      }}>Sub</button> 

    </>
  )
}
// export default Myname;