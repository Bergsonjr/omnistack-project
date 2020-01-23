import React, { useEffect, useState } from 'react';
import './SideBar.css'
import './global.css'
import './Main.css'
import './App.css'

import api from './services/api'

import DevItem from './components/dev'
import DevForm from './components/dev-form'

function App() {

    const [devs, setDevs] = useState([])

    useEffect(() => {
        async function getDevs() {
            const response = await api.get('/devs')
            setDevs(response.data)
        }

        getDevs()
    }, [])

    async function handleSubmit(data) {
        const response = await api.post('/devs', data)

        setDevs([...devs, response.data])
    }

    async function removeUser(user) {
        const response = await api.delete('/devs', user)
        console.log(response.data, 'response.data')
        const iUser = devs.find(dev => dev._id === user._id)
        setDevs([...devs].splice(iUser, 1))
    }

    return (
        <div id="App">
            <aside>
                <strong>Cadastrar</strong>
                <DevForm onSubmit={handleSubmit} />
            </aside>
            <main>
                <ul>
                    {devs.map(dev => <DevItem key={dev._id} dev={dev} handler={removeUser} />)}
                </ul>
            </main>
        </div>
    );
}

export default App;