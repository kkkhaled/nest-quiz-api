import { Expose, Transform } from 'class-transformer';

export class CreateQuizDto {
  @Expose()
  title: string;
  @Expose()
  topic: string;
  @Expose()
  course: string;
  @Expose()
  dueTo: Date;
}
