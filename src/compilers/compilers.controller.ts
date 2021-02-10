import { Body, Controller, Post } from '@nestjs/common';
import { JavascriptCompilerService } from './javascript-compiler.service';

@Controller('compilers')
export class CompilersController {
  constructor(public javascriptService: JavascriptCompilerService) {}

  @Post('javascript')
  compileJavascriptCode(@Body() { code }) {
    return this.javascriptService.compile(code);
  }
}
