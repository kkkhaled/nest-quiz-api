import { IsString, IsNotEmpty } from 'class-validator';

export class DeleteAnnouncementCommand {
  @IsString()
  @IsNotEmpty()
  public readonly id: string;

  constructor(id: string) {
    this.id = id;
  }
}
