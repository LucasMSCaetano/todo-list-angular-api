import { TodoModel } from '../database/models/TodoModel';
import { Errors } from '../utils/Erros';

export class FindAllTodoService {
  async execute () {
    const existsTodo = await TodoModel.findAll();

    if (existsTodo.length < 0) {
      return Errors.todoNotFound();
    }

    return existsTodo;
  }
}
