const Authors = [
  { id: 1, firstName: 'Tom'    , lastName: 'Coleman'  },
  { id: 2, firstName: 'Sashko' , lastName: 'Stubailo' },
  { id: 3, firstName: 'Mikhail', lastName: 'Novikov'  },
]

const Categories = [
  { id: 1, name: 'Meteor'       , slug:'meteor'        },
  { id: 2, name: 'Apollo Client', slug:'apollo-client' },
  { id: 3, name: 'Apollo Server', slug:'apollo-server' },
  { id: 4, name: 'GraphQL'      , slug:'graphql'       },
]

const Posts = [
  { id: 1, authorId: 1, catId: 4, title: 'Introduction to GraphQL', votes: 2 },
  { id: 2, authorId: 2, catId: 1, title: 'Welcome to Meteor'      , votes: 3 },
  { id: 3, authorId: 2, catId: 4, title: 'Advanced GraphQL'       , votes: 1 },
  { id: 4, authorId: 3, catId: 2, title: 'Launchpad is Cool'      , votes: 7 },
]

export { Authors, Categories, Posts }
