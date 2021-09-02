import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat, CatDocument } from './cat.schema';
import { CatInputType } from './dto/cat.dto';

@Injectable()
export class CatService {
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}

  // async create(createCatDto: CatInput): Promise<Cat> {
  //   const createdCat = new this.catModel(createCatDto);
  //   return await createdCat.save();
  // }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

  async create(createCatDto: CatInputType): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async update(id: string, updateCatDto: CatInputType): Promise<Cat> {
    return this.catModel.findByIdAndUpdate(id, updateCatDto);
  }

  async delete(id: string): Promise<Cat> {
    return this.catModel.findByIdAndDelete(id);
  }
}
