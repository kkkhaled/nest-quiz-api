import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Quiz {
  @Prop({ required: true, maxLength: 20 })
  title: string;

  @Prop({ required: true, maxLength: 64 })
  topic: string;

  @Prop({ required: true, maxLength: 80 })
  course: string;

  @Prop({ required: true })
  dueTo: Date;
}

export const QuizSchema = SchemaFactory.createForClass(Quiz);
