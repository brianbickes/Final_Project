const CatsRouter = require('express').Router();
const Cats = require('../models/cats');

//INDEX
CatsRouter.get('/', (req, res) => {
    Cats.find({}, (error, allCats) => {
        if (error) {
            res.status(500).send({
                error: error.message
            })
        } else {
            res.render('cats/Index', {
                cats: allCats
            })
        }
    })
})

//NEW
CatsRouter.get('/new', (req, res) => {
    res.render('cats/New')
})

//DELETE
CatsRouter.delete('/:id', (req, res) => {
    Cats.findByIdAndDelete(req.params.id, (error, deletedCat) => {
        if (error) {
            res.status(500).send({
                error: error.message
            })
        } else {
            console.log(deletedCat)
            res.redirect('/cats')
        }
    })
})

//UPDATE
CatsRouter.put('/:id', (req, res) => {
    Cats.findByIdAndUpdate(req.params.id, req.body, (error, foundCat) => {
        if (error) {
            res.status(500).send({
                error: error.message
            })
        } else {
            res.redirect('/cats')
        }
    })
})

//CREATE
CatsRouter.post('/', (req, res) => {
    Cats.create(req.body, (error, createdCat) => {
        if (error) {
            res.status(500).send({
                error: error.message
            })
        } else {
            console.log(createdCat)
            res.redirect('/cats')
        }
    })

})

//EDIT
CatsRouter.get('/:id/edit', (req, res) => {
    Cats.findById(req.params.id, (error, foundCat) => {
        if (error) {
            res.status(500).send({
                error: error.message
            })
        } else {
            res.render('cats/Edit', {
                cats: foundCats
            })
        }
    })
});

//SHOW
CatsRouter.get('/:id', (req, res) => {
    Cats.findById(req.params.id, (error, foundCat) => {
        res.render('cats/Show', {
            cats: foundCat
        });
    });
});

//EXPORT ROUTER
module.exports = CatsRouter;