import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('main');

  app.enableCors({ origin: '*' }); // ajustar origen en producción

  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  

  await app.listen(process.env.port ?? 3000);
  logger.log(`App running in port ${process.env.port}`);
}
bootstrap();
