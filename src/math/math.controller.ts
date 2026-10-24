import { applyDecorators, BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { MathService } from './math.service.js';

// Junta a documentação do Swagger que é igual nas quatro operações.
function DocumentaOperacao(
  resumo: string,
  exemplo: { a: number; b: number; resultado: number },
  erro400 = 'Parâmetro ausente ou que não é número',
) {
  return applyDecorators(
    ApiOperation({ summary: resumo }),
    ApiQuery({ name: 'a', type: Number, description: 'Primeiro número', example: exemplo.a }),
    ApiQuery({ name: 'b', type: Number, description: 'Segundo número', example: exemplo.b }),
    ApiOkResponse({ description: 'Resultado da operação', schema: { example: { resultado: exemplo.resultado } } }),
    ApiBadRequestResponse({
      description: erro400,
      schema: { example: { message: 'O parâmetro "a" precisa ser um número.', error: 'Bad Request', statusCode: 400 } },
    }),
  );
}

@ApiTags('Operações matemáticas')
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
  @DocumentaOperacao('Soma a + b', { a: 2, b: 3, resultado: 5 })
  soma(@Query('a') a: string, @Query('b') b: string) {
    return { resultado: this.mathService.soma(this.toNumber(a, 'a'), this.toNumber(b, 'b')) };
  }

  @Get('subtracao')
  @DocumentaOperacao('Subtrai a - b', { a: 10, b: 4, resultado: 6 })
  subtracao(@Query('a') a: string, @Query('b') b: string) {
    return { resultado: this.mathService.subtracao(this.toNumber(a, 'a'), this.toNumber(b, 'b')) };
  }

  @Get('multiplicacao')
  @DocumentaOperacao('Multiplica a × b', { a: 3, b: 7, resultado: 21 })
  multiplicacao(@Query('a') a: string, @Query('b') b: string) {
    return { resultado: this.mathService.multiplicacao(this.toNumber(a, 'a'), this.toNumber(b, 'b')) };
  }

  @Get('divisao')
  @DocumentaOperacao('Divide a ÷ b', { a: 9, b: 3, resultado: 3 }, 'Parâmetro ausente, que não é número, ou divisão por zero')
  divisao(@Query('a') a: string, @Query('b') b: string) {
    return { resultado: this.mathService.divisao(this.toNumber(a, 'a'), this.toNumber(b, 'b')) };
  }
}