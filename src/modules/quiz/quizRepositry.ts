import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Quiz } from '../../schema/quiz.schema';
import { BusinessException } from 'src/helpers/businessExpection';
import { UpdateQuizDto } from './dtos/updateQuiz.dto';

@Injectable()
export class QuizRepository {
  constructor(@InjectModel(Quiz.name) private readonly quiz: Model<Quiz>) {}

  async findAll(): Promise<Quiz[]> {
    try {
      return await this.quiz.find();
    } catch (error) {
      throw new BusinessException(
        'Failed to fetch quizes.',
        'FETCH_FAILED',
        500,
      );
    }
  }

  async findById(id: string): Promise<Quiz> {
    try {
      return await this.quiz.findById(id);
    } catch (error) {
      throw new BusinessException(
        'Failed to find quiz by ID.',
        'FIND_FAILED',
        500,
      );
    }
  }

  async create(data: {
    title: string;
    topic: string;
    course: string;
    dueTo: Date;
  }): Promise<Quiz> {
    try {
      const createdQuiz = new this.quiz(data);
      return await createdQuiz.save();
    } catch (error) {
      throw new BusinessException(
        'Failed to create quiz.',
        'CREATE_FAILED',
        500,
      );
    }
  }

  async update(
    id: string,
    data: {
      title?: string;
      topic?: string;
      course?: string;
      dueTo?: Date;
    },
  ): Promise<UpdateQuizDto> {
    try {
      return await this.quiz.findByIdAndUpdate(id, data, {
        new: true,
      });
    } catch (error) {
      throw new BusinessException(
        'Failed to update quiz.',
        'UPDATE_FAILED',
        500,
      );
    }
  }

  async delete(id: string) {
    try {
      const deletedQuiz = await this.quiz.findByIdAndDelete(id);
      if (!deletedQuiz) {
        throw new BusinessException('Quiz not found.', 'QUIZ_NOT_FOUND', 404);
      }
      return 'Quiz Deleted Succfully !!!';
    } catch (error) {
      throw new BusinessException(
        'Failed to delete Quiz.',
        'DELETE_FAILED',
        500,
      );
    }
  }
}
