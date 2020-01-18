const fetch = require('node-fetch')
const Developer = require('../models/developer')

module.exports = {

    async index(req, res) {
        try {
            const devs = await Developer.find()

            return res.status(200).json(devs)
        } catch (error) {
            console.error(error)
        }
    },

    async store(req, res) {
        try {

            const { github_username, techs, latitude, longitude } = req.body

            let dev = await Developer.findOne({ github_username })

            if (!dev) {
                const responseGit = await fetch(`https://api.github.com/users/${github_username}`,
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                )
                const { name = login, avatar_url, bio } = await responseGit.json()

                const location = { type: 'Point', coordinates: [longitude, latitude] }

                dev = await Developer.create({
                    github_username,
                    name,
                    avatar_url,
                    bio,
                    techs,
                    location,
                })
            }

            return res.status(201).json(dev)
        } catch (error) {
            console.error(error)
        }
    },

    async update() {
        //TODO:
    },

    async destroy() {
        //TODO:
    }
}