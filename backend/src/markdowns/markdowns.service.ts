import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Markdown } from './markdown.entity';
import { CreateMarkdownDto } from './dto/create-markdown.dto';

@Injectable()
export class MarkdownsService {
    constructor(
        @InjectRepository(Markdown)
        private readonly markdownsRepository: Repository<Markdown>,
    ) { }

    async findAll(): Promise<Markdown[]> {
        return await this.markdownsRepository.find();
    }

    async createMarkdown(CreateMarkdownDto: CreateMarkdownDto): Promise<Markdown> {
        const newMarkdown = this.markdownsRepository.create(CreateMarkdownDto);
        return await this.markdownsRepository.save(newMarkdown);
    }
}
