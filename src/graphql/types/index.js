import {mergeTypes} from "merge-graphql-schemas";
import User from "./User";
import Game from "./Game";
import Movie from "./Movie";


const typeDefs = [User, Game, Movie];


export default mergeTypes(typeDefs, {all:true});