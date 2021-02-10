import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompilersModule } from './compilers/compilers.module';

@Module({
  imports: [CompilersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
