import { IsString, IsNotEmpty } from 'class-validator';

export class CreateAnnouncementCommand {
  @IsString()
  @IsNotEmpty()
  public readonly ownerName: string;

  @IsString()
  @IsNotEmpty()
  public readonly ownerPosition: string;

  @IsString()
  @IsNotEmpty()
  public readonly description: string;

  constructor(ownerName: string, ownerPosition: string, description: string) {
    this.ownerName = ownerName;
    this.ownerPosition = ownerPosition;
    this.description = description;
  }
}
