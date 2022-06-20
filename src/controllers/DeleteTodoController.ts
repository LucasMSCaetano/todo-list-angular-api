import { Request, Response } from 'express';
import { DeleteTodoService } from '../service/DeleteTodoService';

export default async function DeleteTodoController (request: Request, response: Response) {
  try {
    const { id } = request.params;

    const deleteTodoService = new DeleteTodoService();
    const result: any = await deleteTodoService.execute({ id });

    if (result.status) {
      return response.status(result.status).json({ success: 'false', message: result.message });
    }

    return response.json(result);
  } catch (Error) {
    console.error(Error);
    return response.json(Error);
  }
}
