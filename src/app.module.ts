import { Module } from '@nestjs/common';
import { FibonacciController } from './fibonacci/fibonacci.controller';
import { PrimeController } from './prime/prime.controller';
import { FactorialController } from './factorial/factorial.controller';

@Module({
  imports: [],
  controllers: [FibonacciController, PrimeController, FactorialController],
  providers: [],
})
export class AppModule {}
