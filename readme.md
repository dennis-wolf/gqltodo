
# serverless graphql todo api

This is a sketch of a todolist api using typescript/graphql /(postgres)sql DB/serverless. It includes definitions and tooling for deployment to AWS API Gateway<>Lambda<>RDS using serverless framework.

state: poc


## try it live
Apollo workbench and API access is available at:
https://y1kx7ph4o8.execute-api.eu-west-1.amazonaws.com/

## run it locally

Prerequisites:
- access to a postgres SQL DB with the todo table pre-created (see sql/todo.sql)
- add a .env file with the DB connection string, see .env.example

On your machine:
```
git clone https://github.com/dennis-wolf/gqltodo.git
npm i
npm run dev
```

This will transpile, run and watch for changes. Play with your Apollo endpoint at localhost:4000
  

## what it can do

- Store, fetch and modify simple todo items (title, description, state)
- app access through gql endpoint or -for dev purposes- Apollo workbench web app
- deploy to AWS from IaC (DB not in code)

## what it can't do (vs challenge)
- pagination to handle the amount of data returned
- list functionality
- integrate with other todo list service
- production readiness


## more to be done

(assumed one sticks with the infrastructure choice, AWS API Gw, Lambda, RDS)

- settle on mvp features and implement application logic
- more type usage, e.g. gql generated types
- internal error handling and logging environment
- dev setup: support debugging using breakpoints
- lambda-optimized DB connection handling and DB performance measures, e.g. search indices
- finish IaC setup
- hook up CICD pipeline
- set up unit and integration tests
- operations: monitoring dashboard on key performance metrics, e.g. API response times, call volume, error rates, DB load, long running queries


## deploy to AWS

Uses *serverless framework* to create a nodejs lambda that is accessible through API Gateway. credits: [playbook in apollo docs](https://www.apollographql.com/docs/apollo-server/deployment/lambda)


	npm run slsdeploy
...or destroy the stack again

	npm run slsnuke

To quickly deploy a new version of the lambda without touching the entire CFN stack

	npm run slsdeploy-lambda