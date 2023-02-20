import {
  Controller,
  Get,
  Delete,
  Param,
  Put,
  Body,
  Post,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { updateJobAd } from './models/JobAd.model';
import { JobAd } from './schemas/JobAd.schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/jobads')
  getAllJobAds(
    @Query('status') status: string,
    @Query('title') title: string,
    @Query('page') page: number,
  ) {
    return this.appService.GetAllJobs(status, title, page);
  }

  @Post('/jobad')
  createJobAd(@Body() body: JobAd) {
    return this.appService.CreateJobAd(body);
  }

  @Put('/jobad/:id')
  updateJobAd(@Param('id') id: string, @Body() update: updateJobAd) {
    return this.appService.UpdateJobAd(id, update);
  }

  @Delete('/jobad/:id')
  deleteJobAd(@Param('id') id: string) {
    return this.appService.DeleteJobAd(id);
  }
}
