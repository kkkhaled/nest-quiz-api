import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { QuizRepository } from '../quizRepositry';
import { DeleteQuizCommand } from '../commands';

@CommandHandler(DeleteQuizCommand)
export class DeleteQuizCommandHandler
  implements ICommandHandler<DeleteQuizCommand>
{
  constructor(private readonly quizRepository: QuizRepository) {}

  async execute(command: DeleteQuizCommand) {
    const { id } = command;
    return await this.quizRepository.delete(id);
  }
}
