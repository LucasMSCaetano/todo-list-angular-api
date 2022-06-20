import { Request, Response } from 'express';
import { FindOneTodoService } from '../service/FindOneTodoService';

export default async function FindOneTodoController (request: Request, response: Response) {
  try {
    const { id } = request.params;
    const findOneTodoService = new FindOneTodoService();
    const result: any = await findOneTodoService.execute({ id });

    if (result.status) {
      return response.status(result.status).json({ success: 'false', message: result.message });
    }

    return response.json(result);
  } catch (Error) {
    console.error(Error);
    return response.json(Error);
  }
}
