import { Test, TestingModule } from '@nestjs/testing';
import { BoletaController } from './boleta.controller';

describe('BoletaController', () => {
  let controller: BoletaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoletaController],
    }).compile();

    controller = module.get<BoletaController>(BoletaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
