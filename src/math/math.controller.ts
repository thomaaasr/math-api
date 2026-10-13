import { Controller, Get, Query } from '@nestjs/common';

@Controller('math')
export class MathController {

  @Get('soma')
  soma(@Query('a') a: string, @Query('b') b: string) {
    return { resultado: Number(a) + Number(b) };
  }

  @Get('subtracao')
  subtracao(@Query('a') a: string, @Query('b') b: string) {
    return { resultado: Number(a) - Number(b) };
  }

  @Get('multiplicacao')
  multiplicacao(@Query('a') a: string, @Query('b') b: string) {
    return { resultado: Number(a) * Number(b) };
  }

  @Get('divisao')
  divisao(@Query('a') a: string, @Query('b') b: string) {
    if (Number(b) === 0) {
      return { erro: 'Divisão por zero não é permitida' };
    }
    return { resultado: Number(a) / Number(b) };
  }
}