export default `
input FilmInput {
    _id: String!
    itle: String!
    year: String!
    description: String!
    genre: String!
    popularity: Float!
    coverUrl: String!
}

type Film{
    _id: String!
    title: String!
    year: String!
    description: String!
    genre: String!
    popularity: Float!
    coverUrl: String!
}

type Query{
    film(_id: String!): Film
    films: [Film]
}

type Mutation{

    addFilm(title: String!, year: String!, description: String!, genre: String!, popularity:Float!, coverUrl: String!): Film
    deleteFilm(_id: String!): Film
    editFilm(_id: String!, title: String, year: String, description: String, genre: String, popularity: Float, coverUrl: String): Film
    }


`