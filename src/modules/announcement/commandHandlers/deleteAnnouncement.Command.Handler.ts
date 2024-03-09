import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AnnouncementRepository } from '../announcement.repository';
import { DeleteAnnouncementCommand } from '../commands/DeleteAnnouncement.command';

@CommandHandler(DeleteAnnouncementCommand)
export class DeleteAnnouncementHandler
  implements ICommandHandler<DeleteAnnouncementCommand>
{
  constructor(private readonly repository: AnnouncementRepository) {}

  async execute(command: DeleteAnnouncementCommand) {
    const { id } = command;
    return await this.repository.delete(id);
  }
}
