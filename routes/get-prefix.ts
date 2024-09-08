async function getPrefix (fastify, options) {
  fastify.get('/test', async (request, reply) => {
    return { hello: 'world' }
  })
}

export default getPrefix;
