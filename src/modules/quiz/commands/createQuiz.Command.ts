import { IsString, IsNotEmpty, IsDate } from 'class-validator';

export class CreateQuizCommand {
  @IsString()
  @IsNotEmpty()
  public readonly title: string;

  @IsString()
  @IsNotEmpty()
  public readonly topic: string;

  @IsString()
  @IsNotEmpty()
  public readonly course: string;

  @IsDate()
  public readonly dueTo: Date;

  constructor(title: string, topic: string, course: string, dueTo: Date) {
    this.title = title;
    this.topic = topic;
    this.course = course;
    this.dueTo = dueTo;
  }
}
