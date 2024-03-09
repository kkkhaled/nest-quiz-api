import { CreateAnnouncementHandler } from './createAnnouncement.Command.Handler';
import { UpdateAnnouncementHandler } from './updateAnnouncement.Command.Handler';
import { DeleteAnnouncementHandler } from './deleteAnnouncement.Command.Handler';

export const CommandHandlers = [
  CreateAnnouncementHandler,
  UpdateAnnouncementHandler,
  DeleteAnnouncementHandler,
];
