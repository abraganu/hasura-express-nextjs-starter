import * as express from 'express';

;(async function() {
  const app = express();
  app.use(express.urlencoded({ extended: true }))

  app.get('/healthCheck', (_req, res) => {
    res.send({
      status: 'healthy',
      version: 'dev',
    })
  })

  const port = process.env.port || 3333;
  const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
  });
  server.on('error', console.error);
})()

