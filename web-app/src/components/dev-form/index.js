import React, { useState, useEffect } from 'react'

export default function DevForm({ onSubmit }) {

    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [github_username, setUser] = useState('')
    const [techs, setTechs] = useState('')

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((data) => {
            const { latitude, longitude } = data.coords
            setLatitude(latitude)
            setLongitude(longitude)
        }, (err) => {
            console.log(err)
        }, {
            timeout: 30000
        })
    }, [])

    async function handleSubmit(e) {
        e.preventDefault()
        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude
        })

        setUser('')
        setTechs('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-block">
                <label htmlFor="github_username">Github user</label>
                <input name="github_username" id="github_username" required value={github_username} onChange={e => setUser(e.target.value)}></input>
            </div>
            <div className="input-block">
                <label htmlFor="techs">Technologies</label>
                <input name="techs" id="techs" required value={techs} onChange={e => setTechs(e.target.value)}></input>
            </div>

            <div className="input-group">
                <div className="input-block">
                    <label htmlFor="latitude">Latitude</label>
                    <input type="number" name="latitude" id="latitude" required value={latitude} onChange={e => setLatitude(e.target.value)}></input>
                </div>

                <div className="input-block">
                    <label htmlFor="longitude">Longitude</label>
                    <input type="number" name="longitude" id="longitude" required value={longitude} onChange={e => setLongitude(e.target.value)}></input>
                </div>
            </div>

            <button type="submit">Save</button>
        </form>
    )
}