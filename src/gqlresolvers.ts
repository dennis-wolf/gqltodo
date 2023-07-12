import * as db from './db';

export const resolvers = {
    Query: {
        hello: () => 'world',
        todo(_: any, args: any) {
            // returns list of todos
            // filtered by ID or state
            // pagination possible (pageNo, perPage)
            return db.getTodos(args.id, args.state);
        },
        list: (): [any?] => {
            // return all lists
            return [{ id: "123", title: "howdy" }];
        }
    },
    Mutation: {
        createTodo: (_: any, { title, description }: any) => {
            return db.insertTodo({ title, description })
        },
        updateTodo: (_: any, { id, state }: any) => db.updateTodoState(id, state),
        deleteTodo: (_: any, { id }: any) => db.deleteTodo(id),
    }
};