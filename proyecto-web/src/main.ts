import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));
  app.enableCors();

  const config = new DocumentBuilder().setTitle('NestJS API').setDescription('Una descripcion de la api').setVersion('1.0').build();


  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document)
  

  
  await app.listen(3001)
}
bootstrap();
