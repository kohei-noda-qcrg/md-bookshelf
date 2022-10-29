import { Test, TestingModule } from '@nestjs/testing';
import { MarkdownsController } from './markdowns.controller';

describe('MarkdownsController', () => {
  let controller: MarkdownsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarkdownsController],
    }).compile();

    controller = module.get<MarkdownsController>(MarkdownsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
