import { IsString, IsNotEmpty } from 'class-validator';

export class DeleteQuizCommand {
  @IsString()
  @IsNotEmpty()
  public readonly id: string;

  constructor(id: string) {
    this.id = id;
  }
}
