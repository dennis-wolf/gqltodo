export const typeDefs = `#graphql
  type Query {
    hello: String
    todo(state: TodoState, id: ID, pageNumber: Int, perPage: Int): [Todo]
    list: [TodoList]
  }

  type Todo {
    id: ID
    title: String
    description: String
    lastUpdated: String
    state: TodoState
    list: TodoList
  }

  type TodoList {
    id: ID
    title: String
    description: String
    lastUpdated: String
    todos: [Todo]
  }

  enum TodoState {
    NOTSTARTED
    INPROGRESS
    COMPLETED
  }

  type Mutation {
    createTodo(title: String, description: String): Todo
    updateTodo(id: String!, state: TodoState!): Todo
    deleteTodo(id: String!): String
  }
`;