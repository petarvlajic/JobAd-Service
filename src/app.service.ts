import { JobAd, JobAdDocument } from './schemas/JobAd.schema';
import { updateJobAd } from './models/JobAd.model';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(JobAd.name) private JobAdModel: Model<JobAdDocument>,
  ) {}

  async GetAllJobs(): Promise<JobAd[]> {
    return this.JobAdModel.find().exec();
  }

  async CreateJobAd(JobAd: JobAd): Promise<JobAd> {
    const newJobAd = new this.JobAdModel(JobAd);
    return newJobAd.save();
  }

  async DeleteJobAd(id: string): Promise<JobAd> {
    return this.JobAdModel.findByIdAndDelete(id);
  }

  async UpdateJobAd(id: string, update: updateJobAd): Promise<JobAd> {
    return this.JobAdModel.findByIdAndUpdate(id, update, { new: true });
  }
}
