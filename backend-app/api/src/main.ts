require('dotenv').config();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function dopartis() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(8000);
}
dopartis();
