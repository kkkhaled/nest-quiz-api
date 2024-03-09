import { CreateQuizHandler } from './createQuiz.Command.Handler';
import { UpdateQuizCommandHandler } from './updateQuiz.Command.Handler';
import { DeleteQuizCommandHandler } from './DeleteQuiz.Command.Handler';
export const CommandHandlers = [
  CreateQuizHandler,
  UpdateQuizCommandHandler,
  DeleteQuizCommandHandler,
];
