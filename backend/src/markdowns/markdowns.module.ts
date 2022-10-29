import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarkdownsController } from './markdowns.controller';
import { MarkdownsService } from './markdowns.service';
import { Markdown } from './markdown.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Markdown])],
    controllers: [MarkdownsController],
    providers: [MarkdownsService],
})
export class MarkdownsModule { }
