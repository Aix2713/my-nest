import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BmsModule } from './bms/bms.module';

@Module({
  imports: [
    BmsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
