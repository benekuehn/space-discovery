import React from 'react'
import { FiUser, FiMenu } from 'react-icons/fi'
import './header.css'

type Props = {}

function Header({}: Props) {
    return (
        <header className="header">
            <img
                className="logo"
                src="https://upload.wikimedia.org/wikipedia/commons/2/2e/SpaceX_logo_black.svg"
            />
            <div className="rightHeader">
                <div className="iconContainer">
                    <FiUser />
                </div>
                <div className="iconContainer">
                    <FiMenu />
                </div>
            </div>
        </header>
    )
}

export default Header
