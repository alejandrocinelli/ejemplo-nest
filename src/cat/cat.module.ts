import { Module } from '@nestjs/common';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatSchema } from 'src/model/ cat.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }]),
    MongooseModule.forRoot('mongodb://localhost/nest'),
  ],
  controllers: [CatController],
  providers: [CatService],
})
export class CatModule {}
