import React from 'react'

import { FaTrash, FaUserEdit } from 'react-icons/fa'

import api from '../../services/api'

import './styles.css'

export default function DevItem(props) {

    const { devs, setDevs } = props.handler

    async function removeUser(user) {
        await api.delete(`/devs/${user._id}`)
        const devToRemove = devs.find(dev => dev._id === user._id)
        const iDev = devs.indexOf(devToRemove)
        devs.splice(iDev, 1)
        setDevs([...devs])
    }

    async function updateUser(user) {
        const response = await api.update(`/devs/${user._id}`, user)
        console.log(response, 'response.data')
        const iUser = devs.find(dev => dev._id === user._id)
        const userUpdated = response.data
        setDevs([...devs].splice(iUser, 1))
        setDevs([...devs, userUpdated])
    }
    console.log(devs, 'devs')
    return (
        <ul>

            {devs.map(dev =>
                <li className="dev-item" key={dev._id}>
                    <header>
                        <img src={dev.avatar_url} alt={dev.name}></img>
                        <div className="user-info">
                            <strong>{dev.name}</strong>
                            <span>{dev.techs.join(',')}</span>
                        </div>
                        <div className="user-actions">
                            <FaTrash onClick={() => removeUser(dev)}></FaTrash>
                            <FaUserEdit onClick={() => updateUser(dev)}></FaUserEdit>
                        </div>
                    </header>
                    <p>{dev.bio}</p>
                    <a href={`https://github.com/${dev.github_username}`}>See github profile</a>
                </li>
            )}
        </ul>
    )
}