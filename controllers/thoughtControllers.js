const ObjectId = require('mongoose').Types
const { Thought, User } = require('../models')

module.exports = {
    getThoughts(req, res) {
        Thought.find()
          .then((thoughts) => {
            res.json(thoughts)
          })
          .catch((err) => res.status(500).json(err))
    },

    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.userId })
        .then((thoughts) => 
        !thoughts
         ? res.status(404).json({ message: 'No thoughts with this ID'})
         : res.json({thoughts})
         )
         .catch((err) => {
            console.log(err)
            return res.status(500).json(err)
         })
    },

    createThought(req, res) {
        Thought.create(req.body)
          .then((thoughts) => res.json(thoughts))
          .catch((err) => res.status(500).json(err))
    },

    updateThought(req, res)

}