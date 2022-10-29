import { Body, Controller, Get, Post } from '@nestjs/common';
import { MarkdownsService } from './markdowns.service';
import { Markdown } from './markdown.entity';
import { CreateMarkdownDto } from './dto/create-markdown.dto';


@Controller('markdowns')
export class MarkdownsController {
    constructor(private readonly markdownsService: MarkdownsService) { }

    @Get()
    findAll() {
        return this.markdownsService.findAll();
    }

    @Post()
    createTodo(@Body() createMarkdownDto: CreateMarkdownDto) {
        return this.markdownsService.createMarkdown(createMarkdownDto);
    }
}
