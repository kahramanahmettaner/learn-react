import React from 'react'

//const Header = ({ title }) => {
const Header = (props) => {
    
    return (
        <header>
            <h1>
                {props.title}
            </h1>
        </header>
    )
}

Header.defaultProps = {
    title: "Default Title"
}

export default Header;