import { Router } from 'express';
import { AuthenticateClientController } from './modules/account/authenticateUser/AuthenticateClientController';
import { CreateClientController } from './modules/clients/useCases/createClient/createClientController';
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';

const routes = Router();

const createClientController = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateClientController = new AuthenticateClientController();

routes.post('/authenticate', authenticateClientController.handle);

routes.post('/client', createClientController.handle);
routes.post('/deliveryman', createDeliverymanController.handle);

export { routes };
