import { TodoModel } from '../database/models/TodoModel';
import { Errors } from '../utils/Erros';

interface IFindOneTodo {
  id: String;
}

export class FindOneTodoService {
  async execute ({ id }: IFindOneTodo) {
    const existsTodo = await TodoModel.findOne({
      where: {
        id
      }
    });

    return existsTodo || Errors.generic.todoNotFound({ fieldKey: 'Todo' });
  }
}
