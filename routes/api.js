const router = require("express").Router();
const { Workout } = require("../models");

router.get("/workouts", async (req, res) => {
  const workouts = await Workout.find({});
  console.log(workouts);
  res.json(workouts);
});

router.get("/workouts/range", async (req, res) => {
  Workout.find({}, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  });
});

router.post("/workouts", async (req, res) => {
  const workout = await new Workout();
  await workout.save();
  res.json(workout);
});

router.put("/workouts/:id", async (req, res) => {
  const workout = await Workout.findByIdAndUpdate(
    req.params.id,
    {
      $push: {
        exercises: req.body,
      },
    },
    { new: true, runValidators: true }
  );
  res.json(workout);
});

module.exports = router;
