const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: true
            },

            name: {
                type: String,
                trim: true,
                required: true
            },

            duration: {
                type: Number,
                required: true
            },

            distance: {
                type: Number,
                required: true
            },

            weight: {
                type: Number,
                required: true
            },

            reps: {
                type: Number,
                required: true
            },

            sets: {
                type: Number,
                required: true
            }
        }
    ],
},
    {
        toJSON: {
            virtuals: true
        }
    }
   
);



// Total duration
WorkoutSchema.virtual("totalDuration").get(function () {
    const duration = this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);

    return duration;
});




const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;