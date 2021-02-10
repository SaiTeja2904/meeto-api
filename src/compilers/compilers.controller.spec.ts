import { Test, TestingModule } from '@nestjs/testing';
import { CompilersController } from './compilers.controller';

describe('CompilersController', () => {
  let controller: CompilersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompilersController],
    }).compile();

    controller = module.get<CompilersController>(CompilersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
