import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// j'écoute sur le ports 3000
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
