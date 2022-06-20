import { Request, Response } from 'express';
import { CreateTodoService } from '../service/CreateTodoService';

export default async function CreateTodoController (request: Request, response: Response) {
  try {
    const { name } = request.body;
    const createTodoService = new CreateTodoService();
    const result: any = await createTodoService.execute({ name });

    if (result.status) {
      return response.status(result.status).json({ success: 'false', message: result.message });
    }

    return response.json(result);
  } catch (Error) {
    console.error(Error);
    return response.json(Error);
  }
}
