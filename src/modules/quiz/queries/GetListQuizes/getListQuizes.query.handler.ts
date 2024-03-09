import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { ListQuizesQuery } from './getListQuizes.query';
import { QuizRepository } from '../../quizRepositry';

@QueryHandler(ListQuizesQuery)
export class ListQuizesHandler implements IQueryHandler<ListQuizesQuery> {
  constructor(private readonly quizRepositry: QuizRepository) {}

  async execute(query: ListQuizesQuery) {
    return await this.quizRepositry.findAll();
  }
}
