import { Controller, Get, Render, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { adatokDTO } from './adatokDTO.dto';
import { Res } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return {
      message: this.appService.getHello()
    };
  }

  @Get()
  @Render('kitolt')
  getKitolt(){

  }

  @Post()
  @Render('kitolt')
  postKitolt(@Body adatokDTO:adatokDTO, Res() response: Response){

  }
}
