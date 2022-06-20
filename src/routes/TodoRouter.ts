import { Router } from 'express';
import CreateTodoController from '../controllers/CreateTodoController';
import DeleteTodoController from '../controllers/DeleteTodoController';
import FindAllTodoController from '../controllers/FindAllTodoController';
import FindOneTodoController from '../controllers/FindOneTodoController';
import UpdateTodoController from '../controllers/UpdateTodoController';

export default function TodoRouter (router: Router) {
  router.post('/createTodo', CreateTodoController);
  router.get('/findAllTodos', FindAllTodoController);
  router.get('/findOneTodo/:id', FindOneTodoController);
  router.put('/updateTodo/:id', UpdateTodoController);
  router.delete('/deletedTodo/:id', DeleteTodoController);
}
