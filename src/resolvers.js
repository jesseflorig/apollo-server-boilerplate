import { Authors, Categories, Posts } from './data'
import { find, filter } from 'lodash'

const authors = Authors
const categories = Categories
const posts = Posts

const Resolvers = {
  Query: {
    author: (_, { id }) => find(authors, { id }),
    authors: () => authors,
    category: (_, { id }) => find(categories, { id }),
    categories: () => categories,
    post: (_, { id }) => find(authors, { id }),
    posts: () => posts,
  },
  
  Mutation: {
    upvotePost: (_, { postId }) => {
      const post = find(posts, { id: postId })
      if (!post) {
        throw new Error(`Couldn't find post with id ${postId}`)
      }
      post.votes += 1
      return post
    },
  },
  
  Author: {
    posts: author => filter(posts, { authorId: author.id }),
  },

  Category: {
    posts: category => filter(posts, { catId: category.id }),
  },

  Post: {
    author: post => find(authors, { id: post.authorId }),
    category: post => find(categories, { id: post.catId }),
  },
}

export default Resolvers
