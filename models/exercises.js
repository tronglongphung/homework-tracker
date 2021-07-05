const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  date: {
    type: Date,
    default: new.Date(),
  },
  exercises: [
    {
      name: {
        type: String,
        trim: true,
      },
      value: {
        type: Number,
        required: "Enter an amount",
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const Exercises = mongoose.model("Transaction", exerciseSchema);

module.exports = Exercises;
