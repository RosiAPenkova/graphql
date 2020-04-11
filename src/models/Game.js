import mongoose from "mongoose";

const Schema = mongoose.Schema;

const GameSchema = new Schema({

    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    vendor: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    imageUrl:{
        type: String,
        required: true
    }
})

const Game = mongoose.model("Game", GameSchema);

export default Game;