import postgres from 'postgres'

if (!process.env.DB_CONNECTION) {
  require('dotenv').config();
}

const sql = postgres(process.env.DB_CONNECTION, { ssl: "prefer" })

export async function getTodos(id: string, state: number) {
  // TODO: better handle intersection of params id and state
  const todos = await sql`
      select
        *
      from todo
      ${id ? sql` where id = ${id}` : sql``}
      ${!id && state !== undefined ? sql` where state = ${state}` : sql``}
    `;
  return todos;
}


export async function insertTodo({ title, description }: any) {
  // TODO: use enum int from shared type instead of "NOTSTARTED"
  const todos = await sql`
      insert into todo
        (title, description, last_updated, state)
      values
        (${title}, ${description}, ${Date.now()}, ${"NOTSTARTED"})
      returning id
    `;
  return todos[0];
}

export async function updateTodoState(id: string, state: string) {
  const todos = await sql`
        update todo 
        set state = ${state}
        where id = ${id}
    `
  return todos[0];
}

export async function deleteTodo(id: string) {
  const todos = await sql`
        delete from todo 
        where id = ${id}
    `
  return todos[0];
}

