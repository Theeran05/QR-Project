import React from 'react'
import ProTypes from "prop-types"
// import "../MainComponent/User.css"


const UserData = [
    {
        name:"James",
        city:"London",
        description:"MERN Stack developor",
        online:true,
        profil:"public/img/img-1.webp",
        skill:["UI / UX", "Front End Development", "HTML", "CSS", "Javascript", "React", "Node"]
    },
    {
        name:"John",
        city:"Tokyo",
        description:"MEAN Stack Develpor",
        online:false,
        profil:"public/img/img-23.avif",
        skill:["UI / UX", "Front End Development", "HTML", "CSS", "Javascript", "React", "Node"]
    },
    {
        name:"Alice",
        city:"Denmark",
        description:"Front-end Development",
        online:true,
        profil:"public/img/img-3.webp",
        skill:["UI / UX", "Front End Development", "HTML", "CSS", "Javascript", "React", "Node"]
    }
]

const Users = (props) => {
    return (
        <div className="card-container h-100">
            <span id='pro' className={props.online ? "online" : "offline"}>
                {props.online ? "ONLINE" : "OFFLINE"}
            </span>
            <img src={props.profil} className='img' alt="user1" width={"150px"} height={"150px"} />
            <h3>{props.name}</h3>
            <h3>{props.city}</h3>
            <p>{props.description}</p>
            <div className='buttons'>
                <button className='primary'>Message</button>
                <button className='primary-outline'>Following</button>
            </div>
            <div className='skills'>
                <h6>Skills</h6>
                <ul>
                    {props.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export const User = () => {
    return (
        <>
            {
                UserData.map((user,index)=>(
                    <Users 
                    key = {index}
                    name={user.name}
                    city={user.city}
                    description={user.description}
                    online={user.online}
                    profil={user.profil}
                    skills={user.skill}
                    />
                ))
            }
        </>
    )
}


Users.prototype= {
    name: ProTypes.string.isRequired,
    city: ProTypes.string.isRequired,
    description: ProTypes.string.isRequired,
    skills: ProTypes.arrayOf(ProTypes.string).isRequired,
    online: ProTypes.bool.isRequired,
    profil: ProTypes.string.isRequired
}
// Users.defaultProps={
//     name:"No Name",
//     city:"No City",
//     description:"No Description",
//     skills:["No skills"],
//     online:false,
//     profil:"public/img/nanami-kento.avif"
// }