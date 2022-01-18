import { Module } from '@nestjs/common';
import { BoletaController } from './boleta.controller';
import { BoletaService } from './boleta.service'; 
import { MongooseModule } from '@nestjs/mongoose';
import { BoletaSchema } from './schemas/boleta.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name:'Boleta', schema:BoletaSchema}
    ])  
  ],
  controllers: [BoletaController],
  providers: [BoletaService]
})
export class BoletaModule {}
