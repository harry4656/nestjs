import { Controller, Get, Module } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'


@Controller()

class AppController {
  @Get()

  getRootRoute(){
    return 'Hi there'
  }
}


// A module is going to wrap up a controller, every application we create must have one module inside of it.
@Module({
  controllers: [AppController]
})

// Whenever our application starts, up next is going to look at this app module, it's going to find all the controllers that are listed right here and it's going to automatically create an instance
class AppModule {

}

async function bootstrap(){
  const app = await NestFactory.create(AppModule)

  await app.listen(3000)
}

bootstrap();