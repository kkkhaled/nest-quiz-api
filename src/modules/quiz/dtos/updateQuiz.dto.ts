import { Expose } from 'class-transformer';

export class UpdateQuizDto {
  @Expose()
  id: string;
  @Expose()
  title?: string;
  @Expose()
  topic?: string;
  @Expose()
  course?: string;
  @Expose()
  dueTo: Date;
}
