// update-announcement.handler.ts

import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AnnouncementRepository } from '../announcement.repository';
import { UpdateAnnouncementCommand } from '../commands/updateAnnouncement.command';

@CommandHandler(UpdateAnnouncementCommand)
export class UpdateAnnouncementHandler
  implements ICommandHandler<UpdateAnnouncementCommand>
{
  constructor(private readonly repository: AnnouncementRepository) {}

  async execute(command: UpdateAnnouncementCommand) {
    const { id, ownerName, ownerPosition, description } = command;
    return await this.repository.update(id, {
      ownerName,
      ownerPosition,
      description,
    });
  }
}
