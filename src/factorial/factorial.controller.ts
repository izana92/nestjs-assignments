import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('factorial')
export class FactorialController {
  @Get(':number')
  getFactorial(@Param('number', ParseIntPipe) number: number): { factorial: number } {
    const factorial = this.calculateFactorial(number);
    return { factorial };
  }

  private calculateFactorial(num: number): number {
    if (num < 0) return 0; // Factorial is typically undefined for negative numbers
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }
}
