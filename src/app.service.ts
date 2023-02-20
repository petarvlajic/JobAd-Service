import { JobAd, JobAdDocument } from './schemas/JobAd.schema';
import { updateJobAd } from './models/JobAd.model';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

export interface Query {
  status?: string;
  title?: {
    $regex: RegExp;
  };
}
@Injectable()
export class AppService {
  constructor(
    @InjectModel(JobAd.name) private JobAdModel: Model<JobAdDocument>,
  ) {}

  async GetAllJobs(
    status?: string,
    title?: string,
    page?: number,
  ): Promise<JobAd[]> {
    const Query: Query = {};
    if (status) Query.status = status;
    if (title) Query.title = { $regex: new RegExp(title, 'i') };
    return this.JobAdModel.find(Query)
      .limit(5)
      .skip((page - 1) * 5)
      .exec();
  }

  async CreateJobAd(JobAd: JobAd): Promise<JobAd | Error> {
    try {
      const newJobAd = new this.JobAdModel(JobAd);
      return newJobAd.save();
    } catch (error) {
      return new Error('Email already exists');
    }
  }

  async DeleteJobAd(id: string): Promise<JobAd> {
    return this.JobAdModel.findByIdAndDelete(id);
  }

  async UpdateJobAd(id: string, update: updateJobAd): Promise<JobAd> {
    return this.JobAdModel.findByIdAndUpdate(id, update, { new: true });
  }
}
