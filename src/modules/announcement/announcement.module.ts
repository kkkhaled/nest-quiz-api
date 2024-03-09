import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Announcement,
  AnnouncementSchema,
} from '../../schema/announcement.schema';
import { CqrsModule } from '@nestjs/cqrs';
import { AnnouncementRepository } from './announcement.repository';
import { AnnouncementsController } from './announcement.controller';
import { QueryHandlers } from './queries';
import { CommandHandlers } from './commandHandlers';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Announcement.name,
        schema: AnnouncementSchema,
      },
    ]),
    CqrsModule,
  ],
  providers: [...CommandHandlers, ...QueryHandlers, AnnouncementRepository],
  controllers: [AnnouncementsController],
})
export class AnnouncementModule {}
