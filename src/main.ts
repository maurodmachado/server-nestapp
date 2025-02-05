import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
  .setTitle('Products')
  .setDescription('Description of the API')
  .setVersion('1.0')
  .addTag('products')
  .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api/docs', app, document, {explorer: true, swaggerOptions: {filter: true, showRequestDuration: true}})

  await app.listen(4000);
}
bootstrap();
