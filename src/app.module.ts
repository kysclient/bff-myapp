import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';
import { ChatModule } from "./chat/chat.module";

@Module({
  imports: [MoviesModule, ChatModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
