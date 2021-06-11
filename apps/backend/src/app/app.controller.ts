// import { Body, Controller, Get, Post } from '@nestjs/common'
import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getData() {
    return this.appService.getData()
  }

  // @Post()
  // getData2(@Body() post) {
  //   return this.appService.getData(post)
  // }
}
