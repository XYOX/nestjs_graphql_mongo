import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatResolver } from './cat.resolver';
import { CatSchema } from './schemas/cat.schema';
import { CatService } from './cat.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }])],
  providers: [CatResolver, CatService],
})
export class CatModule {}
