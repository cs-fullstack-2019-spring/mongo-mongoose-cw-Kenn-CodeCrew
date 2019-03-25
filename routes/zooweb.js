var express = require('express');
var router = express.Router();
var ZooAnimalCollection = require('../models/ZooAnimalSchema');

router.get('/add/:id/:type/:descr', (req, res) =>{
    ZooAnimalCollection.create(
        {   animal_id: req.params.id,
            animal_type: req.params.type,
            animal_description: req.params.descr},
        (error, results)=>
        {
            if(error) res.send(error);
            else res.send("Animal created!!!!!!!")
        });
    // res.send("test URL");
});

router.get('/get/:id', (req, res) =>{
    ZooAnimalCollection.find({animal_id:req.params.id},
        (error, results)=>{
            if (error) res.send(error);
            else res.send(results);
    });
});


router.get('/update/:id/:type/:descr', (req, res) =>{
    ZooAnimalCollection.findOneAndUpdate(
        {
            animal_id: req.params.id
        },{
            animal_type: req.params.type,
            animal_description: req.params.descr,
        },
        (error, results) =>{
            if (error) res.send(error);
            else res.send(results);
        })
});


router.get('/delete/:id', (req, res) => {
    ZooAnimalCollection.deleteOne({animal_id:req.params.id}, (error) =>{
        if (error) return console.log(error);
    });
    res.send("Done?!?!?!")
});

module.exports = router;