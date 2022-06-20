import { Request, Response } from 'express';
import { UpdateTodoService } from '../service/UpdateTodoService';

export default async function UpdateTodoController (request: Request, response: Response) {
  try {
    const { id } = request.params;

    const updateTodoService = new UpdateTodoService();
    const result: any = await updateTodoService.execute({ id, body: request.body });

    if (result.status) {
      return response.status(result.status).json({ success: 'false', message: result.message });
    }

    return response.json(result);
  } catch (Error) {
    console.error(Error);
    return response.json(Error);
  }
}
