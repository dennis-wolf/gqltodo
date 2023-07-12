import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './gqltypes';
import { resolvers } from './gqlresolvers';

const server = new ApolloServer({ typeDefs, resolvers });

startStandaloneServer(server).then(({ url }) => console.log(`listening on ${url}`));
