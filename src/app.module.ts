import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { Service } from './.service';


@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [MoviesService, Service],
})
export class AppModule {}
