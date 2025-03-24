import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS para o front-end
  app.enableCors({
    origin: 'http://localhost:5173', // Permitir requisições do front-end
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
    credentials: true, // Permitir envio de cookies, se necessário
  });

  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('Api para cadastro de pessoas fisicas e juridicas')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('nicks', app, document);

  await app.listen(3000);
}
bootstrap();