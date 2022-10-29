import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { MarkdownsModule } from './markdowns/markdowns.module';
import { Markdown } from './markdowns/markdown.entity';


const typeOrmConfig: TypeOrmModuleOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "hoge",
  password: "pass",
  database: "hoge",
  synchronize: true,
  entities: [Markdown],
  logging: true,
  charset: "utf8mb4"
}

@Module({
  imports: [
    MarkdownsModule,
    TypeOrmModule.forRoot(typeOrmConfig)
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
