import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('fibonacci')
export class FibonacciController {
  @Get(':n')
  getFibonacci(@Param('n', ParseIntPipe) n: number): { sequence: number[] } {
    const sequence = this.generateFibonacci(n);
    return { sequence };
  }

  private generateFibonacci(n: number): number[] {
    if (n <= 0) return [];
    if (n === 1) return [0];
    
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
  }
}
