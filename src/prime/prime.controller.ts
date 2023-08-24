import { Controller } from '@nestjs/common';
import { PrimeService } from './prime.service';

@Controller('prime')
export class PrimeController {
  constructor(private readonly primeService: PrimeService) {}
}
