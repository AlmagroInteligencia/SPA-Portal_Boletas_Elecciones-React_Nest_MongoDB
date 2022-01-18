import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoletaModule } from './boletas/boleta.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [BoletaModule, MongooseModule.forRoot('mongodb://localhost/boletas-utn')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
