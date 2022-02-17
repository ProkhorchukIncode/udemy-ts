import express, { Request, Response } from 'express';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
import './controllers/LoginController';
import './controllers/RootController';

const app = express();

// app.get('/', (req: Request, res: Response) => {
//   res.send(`
//     <div>
//       <h1>Hey there!</h1>
//     </div>
//   `);
// });

app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['fvoinrivni'] }));
app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
