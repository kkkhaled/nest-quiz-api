import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { QuizRepository } from '../quizRepositry';
import { CreateQuizCommand } from '../commands/createQuiz.Command';

@CommandHandler(CreateQuizCommand)
export class CreateQuizHandler implements ICommandHandler<CreateQuizCommand> {
  constructor(private readonly quizRepository: QuizRepository) {}

  async execute(command: CreateQuizCommand) {
    return await this.quizRepository.create(command);
  }
}
