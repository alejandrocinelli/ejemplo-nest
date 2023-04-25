import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CatService } from './cat.service';
import CreateCatDto from 'src/dto/create-cat-dto';
import { Cat } from 'src/interface/cat/cat.interface';

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    this.catService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Cat> {
    return this.catService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() cat: Cat): Promise<Cat> {
    return this.catService.update(id, cat);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Cat> {
    return this.catService.delete(id);
  }
}
