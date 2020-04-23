import {mergeTypes} from "merge-graphql-schemas";
import User from "./User";
import Game from "./Game";
import Film from "./Film";


const typeDefs = [User, Game, Film];


export default mergeTypes(typeDefs, {all:true});