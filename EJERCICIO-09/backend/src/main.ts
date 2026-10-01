import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module';

const API_URL = 'http://172.17.21.32:3000';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();


