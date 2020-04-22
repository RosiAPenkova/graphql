import Movie from "../../models/Movie";
import { response } from "express";

export default {
    Query: {
        movie: (root, args) => {
            return new Promise((resolve, reject) => {
                Movie.findOne(args).exec((error, response)=> {
                    error ? reject(error) : resolve(response);
                })
            })
        },
        movies: () => {
            return new Promise((resolve, reject) => {
                Movie.find({}).populate().exec((error, response) => {
                    error ? reject(error) : resolve(response);
                })
            })
        }
    },
    Mutation: {
        addMovie: (root, {title, year, description, genre, popularity, coverUrl}) => {
            const newMovie = new Movie({title, year, description, genre, popularity, coverUrl});
            return new Promise((resolve, reject) => {
                newMovie.save((error, response) => {
                    error ? reject(error) : resolve(response);
                })
            })
        },
        deleteMovie: (root, {_id}) => {
            return new Promise((resolve, reject) => {
                Movie.findByIdAndRemove({_id}).exec((error, response) => {
                    error ? reject(error): resolve(response);
                })
            })
        },
        editMovie: (root, {_id, title, year, description, genre, popularity, coverUrl}) => {
            return new Promise((resolve, reject) => {
                Movie.findByIdAndUpdate({_id}, {$set: {title, year, description, genre, popularity, coverUrl}}, {new: true}).exec((error, response) => {
                    error ? reject(error) : resolve(response);
                })
            })
        }
    }
}