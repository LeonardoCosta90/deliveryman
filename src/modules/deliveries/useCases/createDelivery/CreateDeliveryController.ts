import { Request, Response } from 'express';
import { CreateDeliveryUseCase } from './CreateDeliveryUseCase';

export class CreateDeliveryController {
  async handle(req: Request, resp: Response) {
    const { item_name } = req.body;
    const { id_client } = req;
    const createDeliveryUseCase = new CreateDeliveryUseCase();
    const delivery = await createDeliveryUseCase.execute({
      id_client,
      item_name,
    });

    return resp.json(delivery);
  }
}
