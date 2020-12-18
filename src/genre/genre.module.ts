import { Module } from '@nestjs/common';
import GenreServices from './genre.service';
import GenreController from './genre.controller';

@Module({
  imports: [],
  providers: [GenreServices],
  controllers: [GenreController]
})
export class GenreModule { }
