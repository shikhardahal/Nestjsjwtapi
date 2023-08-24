import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SharedModule } from './shared/shared.module';
import { AuthController } from 'src/auth/auth.controller';
import { AuthService } from 'src/auth/auth.service';
import { AuthModule } from 'src/auth/auth.module';
import { PrimeModule } from './prime/prime.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/jwt'), // Correct the placement here
    SharedModule,
    AuthModule,
    PrimeModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})


