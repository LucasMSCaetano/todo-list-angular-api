import { TodoModel } from '../database/models/TodoModel';
import { Errors } from '../utils/Erros';

interface IDeleteTodo {
  id: String;
}

export class DeleteTodoService {
  async execute ({ id }: IDeleteTodo) {
    const existsTodo = await TodoModel.findOne({
      where: {
        id
      }
    });

    if (existsTodo) {
      await TodoModel.destroy({
        where: {
          id
        }
      });

      return { success: 'true', message: 'Deleted with success' };
    }

    return Errors.generic.todoNotFound({ fieldKey: 'Todo' });
  }
}
