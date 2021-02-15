const router = require("express").Router();
const Workout = require("../models/workoutModel");

// get workout
module.exports = router => {
    router.get("/api/workouts", (req, res) => {
        Workout.find({}).then(dbWorkout => {
            console.log(dbWorkout);
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });

    });

    // create new workout
    router.post("/api/workouts", (req, res) => {
        Workout.create({}).then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err)
        });
    });

   


};








