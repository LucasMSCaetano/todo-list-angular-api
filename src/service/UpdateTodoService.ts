import { TodoModel } from '../database/models/TodoModel';
import { Errors } from '../utils/Erros';

interface IUpdateTodo {
  id: String;
  body: String;
}

export class UpdateTodoService {
  async execute ({ id, body }: IUpdateTodo) {
    const existsTodo = await TodoModel.findOne({
      where: {
        id
      }
    });

    if (existsTodo) {
      await TodoModel.update(body, {
        where: {
          id
        }
      });

      return { success: 'true', message: 'Updated with success' };
    }

    return Errors.generic.todoNotFound({ fieldKey: 'Todo' });
  }
}
