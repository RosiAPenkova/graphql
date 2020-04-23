import Film from "../../models/Film";
import { response } from "express";

export default {
    Query: {
        film: (root, args) => {
            return new Promise((resolve, reject) => {
                Film.findOne(args).exec((error, response)=> {
                    error ? reject(error) : resolve(response);
                })
            })
        },
        films: () => {
            return new Promise((resolve, reject) => {
                Film.find({}).populate().exec((error, response) => {
                    error ? reject(error) : resolve(response);
                })
            })
        }
    },
    Mutation: {
        addFilm: (root, {title, year, description, genre, popularity, coverUrl}) => {
            const newFilm = new Film({title, year, description, genre, popularity, coverUrl});
            return new Promise((resolve, reject) => {
                newFilm.save((error, response) => {
                    error ? reject(error) : resolve(response);
                })
            })
        },
        deleteFilm: (root, {_id}) => {
            return new Promise((resolve, reject) => {
                Film.findByIdAndRemove({_id}).exec((error, response) => {
                    error ? reject(error): resolve(response);
                })
            })
        },
        editFilm: (root, {_id, title, year, description, genre, popularity, coverUrl}) => {
            return new Promise((resolve, reject) => {
                Film.findByIdAndUpdate({_id}, {$set: {title, year, description, genre, popularity, coverUrl}}, {new: true}).exec((error, response) => {
                    error ? reject(error) : resolve(response);
                })
            })
        }
    }
}