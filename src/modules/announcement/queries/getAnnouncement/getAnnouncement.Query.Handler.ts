import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAnnouncementQuery } from './getAnnouncement.Query';
import { Announcement } from '../../../../schema/announcement.schema';
import { AnnouncementRepository } from '../../announcement.repository';

@QueryHandler(GetAnnouncementQuery)
export class GetAnnouncementHandler
  implements IQueryHandler<GetAnnouncementQuery>
{
  constructor(
    private readonly announcementRepository: AnnouncementRepository,
  ) {}

  async execute(query: GetAnnouncementQuery): Promise<Announcement> {
    const { announcementId } = query;
    return await this.announcementRepository.findById(announcementId);
  }
}
