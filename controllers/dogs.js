const DogsRouter = require('express').Router();
const Dogs = require('../models/dogs');

//INDEX
DogsRouter.get('/', (req, res) => {
    Dogs.find({}, (error, allDogs) => {
        if (error) {
            res.status(500).send({
                error: error.message
            })
        } else {
            res.render('dogs/Index', {
                dogs: allDogs
            })
        }
    })
})

//NEW
DogsRouter.get('/new', (req, res) => {
    res.render('dogs/New')
})

//DELETE
DogsRouter.delete('/:id', (req, res) => {
    Dogs.findByIdAndDelete(req.params.id, (error, deletedDog) => {
        if (error) {
            res.status(500).send({
                error: error.message
            })
        } else {
            console.log(deletedDog)
            res.redirect('/dogs')
        }
    })
})

//UPDATE
DogsRouter.put('/:id', (req, res) => {
    Dogs.findByIdAndUpdate(req.params.id, req.body, (error, foundDog) => {
        if (error) {
            res.status(500).send({
                error: error.message
            })
        } else {
            res.redirect('/dogs')
        }
    })
})

//CREATE
DogsRouter.post('/', (req, res) => {
    Dogs.create(req.body, (error, createdDog) => {
        if (error) {
            res.status(500).send({
                error: error.message
            })
        } else {
            console.log(createdDog)
            res.redirect('/dogs')
        }
    })

})

//EDIT
DogsRouter.get('/:id/edit', (req, res) => {
    Dogs.findById(req.params.id, (error, foundDog) => {
        if (error) {
            res.status(500).send({
                error: error.message
            })
        } else {
            res.render('dogs/Edit', {
                dogs: foundDog
            })
        }
    })
});

//SHOW
DogsRouter.get('/:id', (req, res) => {
    Dogs.findById(req.params.id, (error, foundDog) => {
        res.render('dogs/Show', {
            dogs: foundDog
        });
    });
});

//EXPORT ROUTER
module.exports = DogsRouter;