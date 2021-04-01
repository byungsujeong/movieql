// import { addMovie, deleteMovie, getById, getMovies } from "./db";

// const resolvers = {
//     Query: {
//         movies: () => getMovies(),
//         movie: (_, { id }) => {
//             return getById(id);
//             //getById()
//         }
//     },
//     Mutation: {
//         addMovie: (_, {name, score}) => addMovie(name, score),
//         deleteMovie: (_, {id}) => deleteMovie(id)
//     }
// };

// export default resolvers;

// import { getMovies } from "./db";

// const resolvers = {
//     Query: {
//         movies: (_, { limit, rating }) => getMovies(limit, rating)
//     }
// };

// export default resolvers;

import { getMovies, getMovie, getSuggestions } from "./db";

const resolvers = {
  Query: {
    movies: (_, { rating, limit }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getSuggestions(id)
  }
};

export default resolvers;