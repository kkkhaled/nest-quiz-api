import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Announcement } from '../../schema/announcement.schema';
import { BusinessException } from '../../helpers/businessExpection';
import { UpdateAnnouncementDto } from './dtos/update-announcement.dto';

@Injectable()
export class AnnouncementRepository {
  constructor(
    @InjectModel(Announcement.name)
    private readonly announcement: Model<Announcement>,
  ) {}

  async findAll(): Promise<Announcement[]> {
    try {
      return await this.announcement.find();
    } catch (error) {
      throw new BusinessException(
        'Failed to fetch announcements.',
        'FETCH_FAILED',
        500,
      );
    }
  }

  async findById(id: string): Promise<Announcement> {
    try {
      return await this.announcement.findById(id).lean().exec();
    } catch (error) {
      throw new BusinessException(
        'Failed to find announcement by ID.',
        'FIND_FAILED',
        500,
      );
    }
  }
  async create(data: {
    ownerName: string;
    ownerPosition: string;
    description: string;
  }): Promise<Announcement> {
    try {
      const createdAnnouncement = new this.announcement(data);
      return await createdAnnouncement.save();
    } catch (error) {
      throw new BusinessException(
        'Failed to create announcement.',
        'CREATE_FAILED',
        500,
      );
    }
  }

  async update(
    id: string,
    data: {
      ownerName?: string;
      ownerPosition?: string;
      description?: string;
    },
  ): Promise<UpdateAnnouncementDto> {
    try {
      return await this.announcement.findByIdAndUpdate(id, data, {
        new: true,
      });
    } catch (error) {
      throw new BusinessException(
        'Failed to update announcement.',
        'UPDATE_FAILED',
        500,
      );
    }
  }

  async delete(id: string) {
    try {
      const deletedAnnouncement = await this.announcement.findByIdAndDelete(id);
      if (!deletedAnnouncement) {
        throw new BusinessException(
          'Announcement not found.',
          'ANNOUNCEMENT_NOT_FOUND',
          404,
        );
      }
      return 'Announcement Deleted Succfully !!!';
    } catch (error) {
      throw new BusinessException(
        'Failed to delete announcement.',
        'DELETE_FAILED',
        500,
      );
    }
  }
}
