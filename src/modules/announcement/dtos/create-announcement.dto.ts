import { Expose } from 'class-transformer';

export class CreateAnnouncementDto {
  @Expose()
  ownerName: string;

  @Expose()
  ownerPosition: string;

  @Expose()
  description: string;
}
