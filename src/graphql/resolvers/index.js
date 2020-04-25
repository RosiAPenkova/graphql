import {mergeResolvers} from "merge-graphql-schemas";
import User from "./User";
import Game from "./Game";
import Film from "./Film";


const resolvers = [User, Game, Film];


export default mergeResolvers(resolvers);