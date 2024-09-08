async function getStatus(fastify, options) {
  fastify.get('/status', async (request, reply) => {

    const good = true; 

    if (good) {
      return reply
        .code(200)
        .send({
          status: 'good',
          message: 'All systems operational',
        });
    } else {
      return reply
        .code(503)
        .send({
          status: 'bad',
          message: 'Service is currently experiencing issues',
        });
    }
  });
}

export default getStatus;