import { Module } from '@nestjs/common';
import { PrimeService } from './prime.service';


@Module({
  
  providers: [PrimeService],
  export:[PrimeService]
})
export class PrimeModule {}
