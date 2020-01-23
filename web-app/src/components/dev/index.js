import React from 'react'

import { FaTrash } from 'react-icons/fa'

import './styles.css'

export default function DevItem(props) {
    console.log(props)
    const { dev } = props
    const { removeUser } = props

    return (
        <li className="dev-item">
            <header>
                <img src={dev.avatar_url} alt={dev.name}></img>
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(',')}</span>
                </div>
                <div className="user-actions">
                    <FaTrash onClick={removeUser}></FaTrash>
                </div>
            </header>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`}>See github profile</a>
        </li>
    )
}