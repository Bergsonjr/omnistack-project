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

    return (
        <div id="App">
            <aside>
                <strong>Cadastrar</strong>
                <DevForm onSubmit={handleSubmit} />
            </aside>
            <main>
                <ul>
                    {devs.map(dev => <DevItem key={dev._id} dev={dev} />)}
                </ul>
            </main>
        </div>
    );
}

export default App;