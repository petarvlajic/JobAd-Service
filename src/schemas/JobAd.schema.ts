import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { JobAdStatus } from 'src/models/JobAd.model';
import { HydratedDocument } from 'mongoose';

export type JobAdDocument = HydratedDocument<JobAd>;

@Schema()
export class JobAd {
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop()
  skills: string[];
  @Prop()
  status: JobAdStatus;
}

export const JobAdSchema = SchemaFactory.createForClass(JobAd);
