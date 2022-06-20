import { TodoModel } from '../database/models/TodoModel';
import { Errors } from '../utils/Erros';

interface ICreateTodo {
  name: string;
}

export class CreateTodoService {
  async execute ({ name }: ICreateTodo) {
    const existsTodo = await TodoModel.findOne({
      where: {
        name
      }
    });

    if (existsTodo) {
      return Errors.generic.invalidType({ fieldKey: 'Todo' });
    }
    const createdTodo = await TodoModel.create({ name, isCompleted: false });

    return createdTodo;
  }
}
