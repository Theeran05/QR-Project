import React from 'react'
// import "./App.css"
import { ArraySample } from '../self/ArraySample.jsx';
// import { Demo } from './self/Demo';
// import { Myname } from './self/Myname.jsx'
import { Student } from "../self/Student.jsx";
// import { Child } from './self/Child.jsx';


export const App = () => {
   
    return (
        <>
            {/* <Myname /> */}
            <Student name={"Theeran"} age={20} married={false} degree={"BBA"} />
            <Student name={"Ram"} age={26} married={true} />
            {/* <Student /> */}
            {/* <Child>
                <p>Sample paragrapic 1</p>
                <p>Sample paragrapic 2</p>
                <p>Sample paragrapic 3</p>
            </Child> */}
            <ArraySample color={"black"}/>
            {/* <Demo/> */}
        </>
    )
}
export default App;
