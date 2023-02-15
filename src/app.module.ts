import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { JobAd, JobAdSchema } from './schemas/JobAd.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://petar:petar@cluster0.m41zi3k.mongodb.net/?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([{ name: JobAd.name, schema: JobAdSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
