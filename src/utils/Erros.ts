const errorFunction = (status: number, message: string) => ({
  status,
  message
});
interface IErrorsFildKeys {
  fieldKey: string;
}

export const Errors = {
  generic: {
    invalidType: ({ fieldKey }: IErrorsFildKeys) => errorFunction(400, `${fieldKey} already exists.`),
    invalidField: ({ fieldKey }: IErrorsFildKeys) => errorFunction(400, `${fieldKey} invalid!`),
    todoNotFound: ({ fieldKey }: IErrorsFildKeys) => errorFunction(404, `${fieldKey} not found!`)
  },
  todoNotFound: () => errorFunction(404, 'Dont have todos.'),
  tokenMissing: () => errorFunction(401, 'Token missing.'),
  invalidToken: () => errorFunction(401, 'Invalid token!')
};
