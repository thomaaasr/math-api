import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { MathService } from './math.service';

@Controller('math')
export class MathController {
  constructor(private readonly mathService: MathService) {}

  private toNumber(value: string, name: string): number {
    const number = Number(value);
    if (value === undefined || value.trim() === '' || Number.isNaN(number)) {
      throw new BadRequestException(`O parâmetro "${name}" precisa ser um número.`);
    }
    return number;
  }

  @Get('soma')
  soma(@Query('a') a: string, @Query('b') b: string) {
    return { resultado: this.mathService.soma(this.toNumber(a, 'a'), this.toNumber(b, 'b')) };
  }

  @Get('subtracao')
  subtracao(@Query('a') a: string, @Query('b') b: string) {
    return { resultado: this.mathService.subtracao(this.toNumber(a, 'a'), this.toNumber(b, 'b')) };
  }

  @Get('multiplicacao')
  multiplicacao(@Query('a') a: string, @Query('b') b: string) {
    return { resultado: this.mathService.multiplicacao(this.toNumber(a, 'a'), this.toNumber(b, 'b')) };
  }

  @Get('divisao')
  divisao(@Query('a') a: string, @Query('b') b: string) {
    return { resultado: this.mathService.divisao(this.toNumber(a, 'a'), this.toNumber(b, 'b')) };
  }
}