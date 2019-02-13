const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')

const resolvers = {
  Query: {
    user: () => 'testing',
  },
  Mutation: {
    async updateUser(parent, args, context) {
      return await prisma.updateUser({
        data: { ...args.data },
        where: { id: args.id },
      })
    },
  },
}

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
})

server.start();