import React from 'react'
import '../self-css/Self.css'
import ProTypes from "prop-types"

export const ArraySample = (props) => {
    const { color } = props
    return (
        <>
            <div style={{ backgroundColor: color, padding: "20px", color: "#fff" }}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A nam, reprehenderit est harum, dolor veniam quaerat aut similique exercitationem laborum quis neque molestias sunt. Eaque, aliquam ratione praesentium aspernatur fugiat quas doloremque sunt! Atque quia blanditiis maiores corrupti nemo temporibus alias deserunt excepturi praesentium, cumque, aliquid quis aspernatur a error.</p>
            </div>
        </>
    )
}

ArraySample.prototype = {
    color: ProTypes.oneOf(["red", "blue", "green"]).isRequired
}
