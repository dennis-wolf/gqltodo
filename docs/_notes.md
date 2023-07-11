## Data model

<todo>
// note: a list of todos is just a todo but with a parent
- id: objectId
- versionId: objectId
- title: string
- desc: string
- last updated: timestamp
- ownerId: objectId (shortcut: string)
- state: enum
- parentTodo: objectId


## Steps
- data model
- how avoid sync issues?
    - versionId
    - know the last version you're based on; post new version while mentioning the last version known to you
- how to hook up integration?
    - keeping in sync if integrated service does not publish update note?
- automated test
- graphQl
    - 
- implement CRUD api
- wire to DB


## services
- todo-coreApi
- ?todo-integrationSync
- todo-cli
    - todo use localhost|remote
    - todo user <userName>
    - todo ls
    - todo c

## shortcuts
- no auth
- no user entity
- no lint config
- (cloud) deployment?

## additional features
- todo version history
- todo attachments
- user orgs / teams
- timing & reminders


## time tracking
10.7.: 
1.5hrs
reading up on tech, make decisions & planning on tech stack

11.7.:
x
- code bootstrapping
- CRUD & DB access

12.7.:
- integrate
- polish
