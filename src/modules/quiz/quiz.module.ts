import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CqrsModule } from '@nestjs/cqrs';
import { QuizRepository } from './quizRepositry';
import { QuizSchema } from 'src/schema/quiz.schema';
import { CommandHandlers } from './commandHandlers/index';
import { QuizController } from './quizController';
import { QueryHandlers } from './queries/index';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Quiz', schema: QuizSchema }]),
    CqrsModule,
  ],
  providers: [QuizRepository, ...CommandHandlers, ...QueryHandlers],
  controllers: [QuizController],
})
export class QuizModule {}
