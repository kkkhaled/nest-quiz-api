import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Announcement {
  @Prop({ required: true })
  ownerName: string;
  @Prop({ required: true })
  ownerPosition: string;
  @Prop({ required: true, maxLength: 128 })
  description: string;
}

export const AnnouncementSchema = SchemaFactory.createForClass(Announcement);
