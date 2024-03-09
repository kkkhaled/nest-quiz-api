import { IsString, IsNotEmpty } from 'class-validator';

export class UpdateAnnouncementCommand {
  @IsString()
  @IsNotEmpty()
  public readonly id: string;

  @IsString()
  public readonly ownerName?: string;

  @IsString()
  public readonly ownerPosition?: string;

  @IsString()
  public readonly description?: string;

  constructor(
    id: string,
    ownerName?: string,
    ownerPosition?: string,
    description?: string,
  ) {
    this.id = id;
    this.ownerName = ownerName;
    this.ownerPosition = ownerPosition;
    this.description = description;
  }
}
