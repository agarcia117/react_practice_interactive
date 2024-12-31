import React from "react"
import avatar from "../images/user(1).png"

export default function Header(props) {

    return (
        <header>
            <img src={avatar} />
            <p>{props.name}</p>
        </header>
    )
}
