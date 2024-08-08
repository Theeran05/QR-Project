import React from 'react'
// import "./Self.css"
// import ProTypes from "prop-types"

export const Student = (props) => {
  return (
    <div className='student mb-3'>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <td>{props.name}</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>{props.age}</td>
          </tr>
          <tr>
            <th>Married</th>
            <td>{props.married ? "Yes" : "No"}</td>
          </tr>
          <tr>
            <th>Degree</th>
            <td>{props.degree}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
Student.defaultProps = {
  name: "No name",
  age: "No age",
  degree: "No Degree"
}