import Game from "../../models/Game";
import { response } from "express";

export default {

    Query: {

        game: (root, args) => {
            return new Promise((resolve, reject) => {
                Game.findOne(args).exec((error, response) => {
                    error ? reject(error) : resolve(response);
                })
            })

        },

        games: () => {
            return new Promise ((resolve, reject) => {
                Game.find({}).populate().exec((error, response) =>{
                    error ? reject(error) : resolve(response);
                
                })
            })

        },

        Mutation:{
            
            addGame: (root, {name, description, vendor, price, imageUrl}) =>{
                const newGame = new Game ({name, description, vendor, price, imageUrl});
                return new Promise((resolve, reject) =>{
                    newGame.save((error, response) =>{
                        error ? reject(error) : resolve(response);
                    })
                })
            },

            deleteGame: (root, {_id}) => {
                return new Promise ((resolve, reject) =>{
                    Game.findByIdAndRemove({_id}).exec((error,response) =>{
                        error ? reject(error) : resolve(response);
                    })
                })
            },

            editGame: (root, {_id, name, description, vendor, price, imageUrl}) =>{
                return new Promise((resolve,reject) => {
                    Game.findByIdAndUpdate({_id}, {$set: {name, description, vendor, price, imageUrl}}, {new:true}).exec((error,response) => {
                        error ? reject(error) : resolve(response);
                    })

                })
            }

        }
    }



}