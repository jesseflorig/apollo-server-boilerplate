import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'

import TypeDefs from './typeDefs'
import Resolvers from './resolvers'

const typeDefs = [TypeDefs]
const resolvers = Resolvers

const schema = makeExecutableSchema({ typeDefs, resolvers })
const  app = express()

app.use(
  '/graphql',
  cors(),
  bodyParser.json(),
  graphqlExpress({
    schema
  })
)

app.use(
'/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql'
  })
)

app.listen(
  4000,
  () => {
    console.log('\n')
    console.log('Graphql serving at localhost:4000/graphql')
    console.log('GraphiQL serving at localhost:4000/graphiql')
  }
)
