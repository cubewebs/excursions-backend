import express, { Application, Request, Response } from 'express';
import routesExcursion from '../routes/excursion';

class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '3001';
    this.listen();
    // IMPORTANT the middlewares must come before the routes or it won't work
    this.middlewares();
    this.routes();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`App is running on port ${this.port}`);
    });
  }

  routes() {
    this.app.get('/', (req: Request, res: Response) => {
      res.json({
        msg: 'API Working!',
      });
    });
    this.app.use('/api/excursions', routesExcursion);
  }

  middlewares() {
    // Parse body
    this.app.use(express.json());
  }
}

export default Server;
