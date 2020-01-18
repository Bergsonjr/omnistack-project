const Developer = require('../models/developer')

module.exports = {

    async index(req, res) {
        try {
            const { latitude, longitude, techs } = req.query

            const devs = await Developer.find({
                techs: {
                    $in: techs.split(',')
                },
                location: {
                    $near: {
                        $geometry: {
                            type: 'Point',
                            coordinates: [longitude, latitude]
                        },
                        $maxDistance: 10000,
                    }
                }
            })

            return res.status(200).json({ devs: devs })
        } catch (error) {
            console.error(error)
        }
    },
}