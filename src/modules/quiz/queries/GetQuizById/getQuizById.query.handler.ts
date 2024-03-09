import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetquizByIdQuery } from './getQuizById.query';
import { QuizRepository } from '../../quizRepositry';

@QueryHandler(GetquizByIdQuery)
export class GetQuizByIdQueryHandler
  implements IQueryHandler<GetquizByIdQuery>
{
  constructor(private readonly quizRepository: QuizRepository) {}

  async execute(query: GetquizByIdQuery) {
    const { quizId } = query;
    return await this.quizRepository.findById(quizId);
  }
}
