const TypeDefs = `
  type Author {
    id: Int!
    firstName: String
    lastName: String
    """
    the list of Posts by this author
    """
    posts: [Post]
  }

  type Category {
    id: Int!
    name: String
    slug: String
    posts: [Post]
  }

  type Post {
    id: Int!
    title: String
    category: Category
    author: Author
    votes: Int
  }

  # the schema allows the following query:
  type Query {
    author(id: Int!): Author
    authors: [Author]
    category(id: Int!): Category
    categories: [Category]
    post(id: Int!): Post
    posts: [Post]
  }

  # this schema allows the following mutation:
  type Mutation {
    upvotePost (
      postId: Int!
    ): Post
  }
`

export default TypeDefs
