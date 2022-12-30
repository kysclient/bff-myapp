import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from "@nestjs/common";
import { SocketIoAdapter } from "./adapters/socket-io.adapters";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors:true});
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true
  }))
  app.useWebSocketAdapter(new SocketIoAdapter(app));
  // app.enableCors({
  //   origin: "http://localhost:3001",
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  //   credentials: true,
  // });

  await app.listen(4000);
}
bootstrap();
