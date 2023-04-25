import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat } from 'src/interface/cat/cat.interface';
import CreateCatDto from 'src/dto/create-cat-dto';

@Injectable()
export class CatService {
  constructor(@InjectModel('Cat') private readonly catModel: Model<Cat>) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }
  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }
  async findOne(id: string): Promise<Cat> {
    return this.catModel.findOne({ _id: id });
  }

  async delete(id: string): Promise<Cat> {
    return this.catModel.findByIdAndRemove(id);
  }

  async update(id: string, cat: Cat): Promise<Cat> {
    return this.catModel.findByIdAndUpdate(id, cat, { new: true });
  }
}
