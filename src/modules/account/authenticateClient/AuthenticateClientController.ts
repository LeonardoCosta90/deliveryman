import { Request, Response } from 'express';
import { AuthenticateUserUseCase } from './AuthenticateClientUseCase';

export class AuthenticateClientController {
  async handle(req: Request, res: Response) {
    const { username, password } = req.body;

    const authenticateClientUseCase = new AuthenticateUserUseCase();
    const result = await authenticateClientUseCase.execute({
      username,
      password,
    });

    return res.json(result);
  }
}
