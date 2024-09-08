import Fastify from 'fastify';
import getPrefix from './routes/get-prefix'
import p from 'primebit.js';
import gradient from 'gradient-string';
import figlet from 'figlet';
import getStatus from './routes/status';


function displayBanner() {
  console.log('\n');
    console.log(
      gradient.pastel.multiline(
        figlet.textSync('Tsuki', {
          font: 'Standard',
          horizontalLayout: 'default',
          verticalLayout: 'default',
        })
      )
    );
    console.log('\n');
  }


const fastify = Fastify()

fastify.get('/', function (request, reply) {
  displayBanner()
  p.success('API Service is running...')
  p.success('Listening to https://localhost:3000')
  reply.send('Ready! 🚀')
});

fastify.register(getPrefix)
fastify.register(getStatus)

fastify.listen({ 
  port: 3000,
}, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})