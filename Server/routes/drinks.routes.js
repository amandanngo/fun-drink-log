const express = require('express');
const router = express.Router();

const Drink = require('../models/Drink.model');
const User = require('../models/User.model');

const { isAuthenticated } = require('../middlewares/jwt.middleware');


router.post('/drinks', (req,res,next) =>{

    const {name, description, date, userId} = req.body;


    Drink.create({
        name,
        description,
        date,
        user: userId 
        
    })
        .then(createdDrink => {
            res.json({ message: 'POST drinks worked', drink: createdDrink });

        })
        .catch(err => {
            res.json({ message: err});

        })

})

router.get('/drinks', (req,res,next) =>{

    const {_id} = req.payload;

    // res.json({user: _id})


    Drink.find({user: _id})
        .then(foundDrinks => {
            res.json({message: 'GET drinks worked', drinks: foundDrinks})
        })
        .catch(err => res.json(err))
    
})

router.delete('/drinks/:drinkId', (req,res,next) =>{
    
    const {drinkId} = req.params;

    Drink.findByIdAndDelete(drinkId)
        .then(deletedDrink => {
            res.json({ message: 'DELETE projects/:projectId worked ', project: deletedDrink })
        })
        .catch(err => res.json(err))

})

router.get('/all-drinks', (req,res,next)=>{

    Drink.find().sort({date: -1})
    .populate('user')
        .then(foundDrinks => {
            res.json({drinks: foundDrinks})
        })
        .catch(err => res.json(err))

})

module.exports = router;