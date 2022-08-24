const { gql } = require("apollo-server");

const typeDefs = gql`
  type user {
    id: ID!
    name: String!
    username: String!
    age: Int!
    gender: String!
  }
  type Query {
    users: [user!]!
    user(id: ID!): user!
  }

  # mutation

  input CreateUserInput {
    name: String!
    username: String!
    age: Int!
    gender: String!
  }

  type Mutation {
    createUser(input: CreateUserInput): user
    deleteUser(id: ID!): [user]
  }
`;

module.exports = { typeDefs };
