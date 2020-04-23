import mongoose from "mongoose";

const Schema = mongoose.Schema;

const FilmSchema = new Schema({

    title:{
        type: String,
        required: true
    },
    year:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    popularity: {
        type: Number,
        required: true
    },

    coverUrl:{
        type: String,
        required: true
    }
})

const Film = mongoose.model("Film", FilmSchema);

export default Film;