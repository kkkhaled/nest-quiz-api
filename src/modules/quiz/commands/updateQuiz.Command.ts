import { IsString, IsNotEmpty, IsDate } from 'class-validator';

export class UpdateQuizCommand {
  @IsString()
  @IsNotEmpty()
  public readonly id: string;

  @IsString()
  public readonly title?: string;

  @IsString()
  public readonly course?: string;

  @IsString()
  public readonly topic?: string;
  @IsDate()
  public readonly dueTo?: Date;

  constructor(data: {
    id: string;
    title?: string;
    topic?: string;
    course?: string;
    dueTo?: Date;
  }) {
    this.id = data.id;
    this.title = data.title;
    this.topic = data.topic;
    this.course = data.course;
    this.dueTo = data.dueTo;
  }
}
