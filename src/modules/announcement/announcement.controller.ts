import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Get,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateAnnouncementCommand } from './commands/createAnnouncement.command';
import { UpdateAnnouncementCommand } from './commands/updateAnnouncement.command';
import { DeleteAnnouncementCommand } from './commands/DeleteAnnouncement.command';
import { CreateAnnouncementDto } from './dtos/create-announcement.dto';
import { ListAnnouncementsQuery } from './queries/getListAnnounecment/getListAnnouncement.query';
import { GetAnnouncementQuery } from './queries/getAnnouncement/getAnnouncement.Query';

@Controller('announcements')
export class AnnouncementsController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}
  @Get()
  async listAnnouncements() {
    const announcements = await this.queryBus.execute(
      new ListAnnouncementsQuery(),
    );
    return { announcements };
  }

  @Get(':id')
  async getAnnouncement(@Param('id') id: string) {
    const announcement = await this.queryBus.execute(
      new GetAnnouncementQuery(id),
    );
    return announcement;
  }

  @Post()
  async create(@Body() data: CreateAnnouncementDto) {
    return this.commandBus.execute(
      new CreateAnnouncementCommand(
        data.ownerName,
        data.ownerPosition,
        data.description,
      ),
    );
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() { ownerName, ownerPosition, description },
  ) {
    return this.commandBus.execute(
      new UpdateAnnouncementCommand(id, ownerName, ownerPosition, description),
    );
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.commandBus.execute(new DeleteAnnouncementCommand(id));
  }
}
