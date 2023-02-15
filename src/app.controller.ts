import {
  Controller,
  Get,
  Delete,
  Param,
  Put,
  Body,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { updateJobAd } from './models/JobAd.model';
import { JobAd } from './schemas/JobAd.schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  getAllJobAds() {
    return this.appService.GetAllJobs();
  }

  @Post('/create')
  createJobAd(@Body() body: JobAd) {
    return this.appService.CreateJobAd(body);
  }

  @Put('/update/:id')
  updateJobAd(@Param('id') id: string, @Body() update: updateJobAd) {
    return this.appService.UpdateJobAd(id, update);
  }

  @Delete('/delete/:id')
  deleteJobAd(@Param('id') id: string) {
    return this.appService.DeleteJobAd(id);
  }
}
