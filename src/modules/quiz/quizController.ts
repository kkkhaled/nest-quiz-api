import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Get,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateQuizDto } from './dtos/createQuiz.dto';
import {
  CreateQuizCommand,
  DeleteQuizCommand,
  UpdateQuizCommand,
} from './commands/index';
import { ListQuizesQuery } from './queries/GetListQuizes';
import { GetquizByIdQuery } from './queries/GetQuizById';

@Controller('quiz')
export class QuizController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}
  @Get()
  async listQuizes() {
    const quizes = await this.queryBus.execute(new ListQuizesQuery());
    return { quizes };
  }
  @Get(':id')
  async getQuizById(@Param('id') id: string) {
    const quiz = await this.queryBus.execute(new GetquizByIdQuery(id));
    return quiz;
  }
  @Post()
  async create(@Body() data: CreateQuizDto) {
    return this.commandBus.execute(
      new CreateQuizCommand(data.title, data.topic, data.course, data.dueTo),
    );
  }
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() { title, topic, course, dueTo },
  ) {
    return this.commandBus.execute(
      new UpdateQuizCommand({ id, title, topic, course, dueTo }),
    );
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.commandBus.execute(new DeleteQuizCommand(id));
  }
}
