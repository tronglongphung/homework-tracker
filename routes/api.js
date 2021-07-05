const router = require("express").Router();
const { Workout } = require("../models/Workout");

router.get("/workouts", (req, res) => {
  Workout.find({}, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  });
});

router.get("/workouts/range", (req, res) => {
  Workout.insert(req.body, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  });
});

router.post("/workouts", (req, res) => {
  Workout.find({}, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  });
});

router.put("/workouts/:id", (req, res) => {
  Workout.update(
    {
      _id: mongojs.ObjectId(req.params.id),
    },
    {
      $set: {
        title: req.body.title,
        note: req.body.note,
        modified: Date.now(),
      },
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});

module.exports = router;
