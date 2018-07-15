import express from 'express'
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
    console.log('Now browse to localhost:4000/graphiql')
  }
)
