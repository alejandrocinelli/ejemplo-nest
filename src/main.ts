import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoose from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await mongoose.connect('mongodb://localhost/nestjs');
  await app.listen(3000);
}
bootstrap();
