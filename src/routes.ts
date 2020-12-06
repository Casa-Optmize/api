import { Router, Response, Request } from 'express';
import { getUsersController } from './useCases/GetUsers';
import { createUserController } from './useCases/CreateUser';

const router = Router();

router.get('/', (_: Request, res: Response) => {
  res.send('Estou funcionando');
});

router.get('/user', (request: Request, response: Response) => getUsersController.handle(request, response));

router.post('/user', (request: Request, response: Response) => createUserController.handle(request, response));

export default router;