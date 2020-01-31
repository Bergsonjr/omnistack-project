const fetch = require('node-fetch')
const Developer = require('../models/developer')

module.exports = {

    async index(req, res) {
        try {
            const devs = await Developer.find()
            res.status(200).json(devs)
        }
        catch (error) {
            console.error(error)
        }
    },

    async store(req, res) {
        try {

            const { github_username, techs, latitude, longitude, _id } = req.body

            let dev = await Developer.findOne({ github_username })

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

            if (!dev) {
                dev = await Developer.create({
                    github_username,
                    name,
                    avatar_url,
                    bio,
                    techs,
                    location,
                })
                res.status(201).json(dev)
            }
            else {
                dev = await Developer.findOneAndUpdate({}, {
                    github_username,
                    name,
                    avatar_url,
                    bio,
                    techs,
                    location,
                }, { new: true })
                res.status(200).send(dev)
            }
        }
        catch (error) {
            console.error(error)
        }
    },

    async update(req, res) {
        try {
            const { _id } = req.params
            const { github_username, name, avatar_url, bio, techs, location } = req.body

            const dev = await Developer.findOneAndUpdate(_id, {
                github_username,
                name,
                avatar_url,
                bio,
                techs,
                location,
            })
            console.log(dev, 'dev')
            res.status(204).send()
        }
        catch (error) {
            console.error(error)
            res.status(500).send()
        }
    },

    async destroy(req, res) {
        try {
            const { _id } = req.params
            await Developer.deleteOne({ _id })
            res.status(204).send()
        }
        catch (error) {
            console.error(error)
            res.status(500).send()
        }
    }
}