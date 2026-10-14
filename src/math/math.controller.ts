import {BadRequestException, Controller, Get, Query} from '@nestjs/common';

@Controller('math')
export class MathController {

  private toNumber (value: string, name: string): number {
    const number = Number(value);
    if (value === undefined || value.trim() === '' || Number.isNaN(number)) {
      throw new BadRequestException(`O parâmetro "${name}" precisa ser um número.`);
    }
    return number;
  }
  
  @Get('soma')
  soma(@Query('a') a: string, @Query('b') b: string) {
    return { resultado: this.toNumber(a, 'a') + this.toNumber(b, 'b') };
  }

  @Get('subtracao')
  subtracao(@Query('a') a: string, @Query('b') b: string) {
    return { resultado: this.toNumber(a, 'a') - this.toNumber(b, 'b') };
  }

  @Get('multiplicacao')
  multiplicacao(@Query('a') a: string, @Query('b') b: string) {
    return { resultado: this.toNumber(a, 'a') * this.toNumber(b, 'b') };
  }

  @Get('divisao')
  divisao(@Query('a') a: string, @Query('b') b: string) {
    const divisor = this.toNumber(b, 'b');
    if (divisor === 0) {
      throw new BadRequestException('Divisão por zero não é permitida' );
    }
    return { resultado: this.toNumber(a, 'a') / divisor };
  }
}