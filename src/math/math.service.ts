import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class MathService {
  soma(a: number, b: number): number {
    return a + b;
  }

  subtracao(a: number, b: number): number {
    return a - b;
  }

  multiplicacao(a: number, b: number): number {
    return a * b;
  }

  divisao(a: number, b: number): number {
    if (b === 0) {
      throw new BadRequestException('Divisão por zero não é permitida');
    }
    return a / b;
  }
}