import { Test, TestingModule } from '@nestjs/testing';
import { MarkdownsService } from './markdowns.service';

describe('MarkdownsService', () => {
  let service: MarkdownsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MarkdownsService],
    }).compile();

    service = module.get<MarkdownsService>(MarkdownsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

});
