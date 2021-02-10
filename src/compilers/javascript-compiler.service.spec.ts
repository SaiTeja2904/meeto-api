import { Test, TestingModule } from '@nestjs/testing';
import { JavascriptCompilerService } from './javascript-compiler.service';

describe('JavascriptCompilerService', () => {
  let service: JavascriptCompilerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JavascriptCompilerService],
    }).compile();

    service = module.get<JavascriptCompilerService>(JavascriptCompilerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
