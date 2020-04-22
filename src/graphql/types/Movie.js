export default `
input MovieInput {
    _id: String!
    itle: String!
    year: String!
    description: String!
    genre: String!
    popularity: Float!
    coverUrl: String!
}

type Movie{
    _id: String!
    title: String!
    year: String!
    description: String!
    genre: String!
    popularity: Float!
    coverUrl: String!
}

type Query{
    movie(_id: String!): Movie
    movies: [Movie]
}

type Mutation{

    addMovie(title: String!, year: String!, description: String!, genre: String!, popularity:Float!, coverUrl: String!): Movie
    deleteMovie(_id: String!): Movie
    editMovie(_id: String!, title: String, year: String, description: String, genre: String, popularity: Float, coverUrl: String): Movie
    }


`