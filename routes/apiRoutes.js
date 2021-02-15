const router = require("express").Router();
const db = require("../models/workoutModel");

router.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });

});

















module.exports = router;