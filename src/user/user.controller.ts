import { Controller, Get, Post, Body, Patch, Param, Delete,Res ,HttpStatus } from '@nestjs/common';
import { UsersService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Response } from 'express';
var jwt = require('jsonwebtoken');



@Controller('users')


export class UsersController {

  constructor(private  usersService: UsersService) {}


  


  @Post()
  create(@Body()user: CreateUserDto):Observable<any>  {
    return this.usersService.create(user);
  }




  @Post('login')
  login(@Body() user: CreateUserDto, @Res() response:Response)  {
     console.log(user)
      var token = jwt.sign(
      {id:user.id,email:user.email},
      process.env.JWT_SECRET
    )
  response.status(HttpStatus.CREATED)
  .json({Token:token})
  }
  


  

  @Get()
  findAll() {
    return this.usersService.findAll();
  }


  @Get(':id')
  findOne(@Param() params) {
    return this.usersService.findOne(params.id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
