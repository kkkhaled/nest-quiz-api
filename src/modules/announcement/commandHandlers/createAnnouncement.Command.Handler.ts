import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AnnouncementRepository } from '../announcement.repository';
import { CreateAnnouncementCommand } from '../commands/createAnnouncement.command';

@CommandHandler(CreateAnnouncementCommand)
export class CreateAnnouncementHandler
  implements ICommandHandler<CreateAnnouncementCommand>
{
  constructor(private readonly repository: AnnouncementRepository) {}

  async execute(command: CreateAnnouncementCommand) {
    return await this.repository.create(command);
  }
}
