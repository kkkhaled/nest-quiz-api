import { Expose } from 'class-transformer';

export class UpdateAnnouncementDto {
  @Expose()
  id: string;
  @Expose()
  ownerName?: string;
  @Expose()
  ownerPosition?: string;
  @Expose()
  description?: string;
}
