import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CqrsModule } from '@nestjs/cqrs';
import { AnnouncementModule } from './modules/announcement/announcement.module';
import { QuizModule } from './modules/quiz/quiz.module';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI),
    AnnouncementModule,
    QuizModule,
    CqrsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
