import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { ListAnnouncementsQuery } from './getListAnnouncement.query';
import { AnnouncementRepository } from '../../announcement.repository';

@QueryHandler(ListAnnouncementsQuery)
export class ListAnnouncementsHandler
  implements IQueryHandler<ListAnnouncementsQuery>
{
  constructor(
    private readonly announcementRepository: AnnouncementRepository,
  ) {}

  async execute(query: ListAnnouncementsQuery) {
    return await this.announcementRepository.findAll();
  }
}
