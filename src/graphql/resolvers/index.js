import {mergeResolvers} from "merge-graphql-schemas";
import User from "./User";
import Game from "./Game";
import Movie from "./Movie";


const resolvers = [User, Game, Movie];


export default mergeResolvers(resolvers);