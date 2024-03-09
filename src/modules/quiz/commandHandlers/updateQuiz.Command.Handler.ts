import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { QuizRepository } from '../quizRepositry';
import { UpdateQuizCommand } from '../commands/updateQuiz.Command';

@CommandHandler(UpdateQuizCommand)
export class UpdateQuizCommandHandler
  implements ICommandHandler<UpdateQuizCommand>
{
  constructor(private readonly quizRepository: QuizRepository) {}

  async execute(command: UpdateQuizCommand) {
    const { id, course, dueTo, title, topic } = command;
    return await this.quizRepository.update(id, {
      title,
      topic,
      course,
      dueTo,
    });
  }
}
