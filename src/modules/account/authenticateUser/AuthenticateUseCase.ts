import { compare } from 'bcrypt';
import { prisma } from "../../../database/prismaClient";

interface IAuthenticateClient {
  username: string;
  password: string;
}
export class AuthenticateUserUseCase {
  async execute({username, password}: IAuthenticateClient) {
    const client = await prisma.clients.findFirst({
      where: {
        username
      }
    })

    if(!client) {
      throw new Error("Username or password invalid")
    }

    const passwordMatch = await compare(password, client.password)

    if(!passwordMatch) {
      throw new Error("Username or password invalid")
    }
  }
}
