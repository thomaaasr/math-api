import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MathService } from './math.service.js';

describe('MathService', () => {
  let service: MathService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MathService],
    }).compile();

    service = module.get<MathService>(MathService);
  });

  it('existe', () => {
    expect(service).toBeDefined();
  });

  it('soma dois números', () => {
    expect(service.soma(2, 3)).toBe(5);
    expect(service.soma(-2, 3)).toBe(1);
  });

  it('soma números decimais', () => {
    expect(service.soma(0.1, 0.2)).toBeCloseTo(0.3);
  });

  it('subtrai dois números', () => {
    expect(service.subtracao(10, 4)).toBe(6);
    expect(service.subtracao(4, 10)).toBe(-6);
  });

  it('multiplica dois números', () => {
    expect(service.multiplicacao(3, 7)).toBe(21);
    expect(service.multiplicacao(-2, 5)).toBe(-10);
  });

  it('divide dois números', () => {
    expect(service.divisao(9, 3)).toBe(3);
    expect(service.divisao(1, 4)).toBe(0.25);
  });

  it('não permite divisão por zero', () => {
    expect(() => service.divisao(9, 0)).toThrow(BadRequestException);
    expect(() => service.divisao(9, 0)).toThrow('Divisão por zero não é permitida');
  });
});
