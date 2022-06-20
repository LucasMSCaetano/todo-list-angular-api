import { Request, Response } from 'express';
import { FindAllTodoService } from '../service/FindAllTodoService';

export default async function FindAllTodoController (request: Request, response: Response) {
  try {
    const findAllTodoService = new FindAllTodoService();
    const result: any = await findAllTodoService.execute();

    if (result.status) {
      return response.status(result.status).json({ success: 'false', message: result.message });
    }

    return response.json(result);
  } catch (Error) {
    console.error(Error);
    return response.json(Error);
  }
}
