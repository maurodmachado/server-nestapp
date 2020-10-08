import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';


@Module({
  imports: [ProductModule, MongooseModule.forRoot('mongodb+srv://maurodmachado:root@cluster0.r0rc9.mongodb.net/product-nestapp?retryWrites=true&w=majority',{ useNewUrlParser: true, useFindAndModify: false })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
