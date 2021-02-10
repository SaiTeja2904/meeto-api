import { Module } from '@nestjs/common';
import { CompilersController } from './compilers.controller';
import { JavascriptCompilerService } from './javascript-compiler.service';

@Module({
  controllers: [CompilersController],
  providers: [JavascriptCompilerService]
})
export class CompilersModule {}
