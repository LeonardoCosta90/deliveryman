import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { prisma } from '../../../database/prismaClient';

interface IAuthenticateClient {
  username: string;
  password: string;
}
export class AuthenticateUserUseCase {
  async execute({ username, password }: IAuthenticateClient) {
    const client = await prisma.clients.findFirst({
      where: {
        username,
      },
    });

    if (!client) {
      throw new Error('Username or password invalid');
    }

    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new Error('Username or password invalid');
    }

    const token = sign({ username }, String(process.env.JWT_SECRET_CLIENT), {
      subject: client.id,
      expiresIn: '1d',
    });

    return token;
  }
}
