import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './project/project.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogModule } from './blog/blog.module';
import * as Joi from '@hapi/joi'

@Module({
  imports: [
    ConfigModule.forRoot({
        envFilePath: '.env.local',
        validationSchema: Joi.object({
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.number().default(5432),
        DB_NAME: Joi.string().required(),
        DB_USER: Joi.string().required(),
        DB_PASS: Joi.string().required(),
        MESSAGE: Joi.string().required(),
        POSTGRES_SSL: Joi.boolean().required(),
      })
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: false,
      ssl: process.env.POSTGRES_SSL === 'true',
      extra: {
        ssl: 
          process.env.POSTGRES_SSL === 'true'
          ?{
            rejectUnauthorized: false,
          }
          : null,
      },

    }),ProjectModule, BlogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}