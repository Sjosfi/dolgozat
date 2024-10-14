import { Controller, Get, Render, Post, Body } from '@nestjs/common';
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

  @Get("kitolt")
  @Render('kitolt')
  getKitolt(){

  }

  @Post("kitolt")
  @Render('kitolt')
  postKitolt(@Body adatokDTO:adatokDTO, Res, response: Response){
    let errors = []
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!adatokDTO.email.valueOf.match(validRegex)){
      errors.push("Hibás az email")
    }
    if (adatokDTO.szam > 10){
      errors.push("Nem lehet 10-nél több személy!")
    }
    if (adatokDTO.szam < 1){
      errors.push("Nem lehet 1-nél kevesebb személy!")
    }
    if (errors.length == 0){
      return response.redirect("/siker")
    }else{
      return {nev: adatokDTO.nev, email: adatokDTO.email, idopont: adatokDTO.idopont, szam: adatokDTO.szam}
    }
  }
}
